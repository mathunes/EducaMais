package br.uff.ic.educamais.service;

import br.uff.ic.educamais.model.AuthorModel;
import br.uff.ic.educamais.model.EventModel;
import br.uff.ic.educamais.model.ResourceModel;
import br.uff.ic.educamais.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository repository;

    @Autowired
    private ResourceService resourceService;

    public EventModel saveEvent(EventModel event) {

        EventModel newEvent = repository.save(event);

        event.getResources().forEach(resource -> {

            ResponseEntity<?> existingResource = resourceService.getResource(resource.getId());

            if (existingResource.getBody() instanceof ResourceModel) {

                ((ResourceModel) existingResource.getBody()).setCollection(event);

                resourceService.updateResource((ResourceModel) existingResource.getBody());

            }

        });

        return newEvent;
    }

    public List<EventModel> getEvent() {
        return (List<EventModel>) repository.findAll();
    }

    public ResponseEntity<?> getEventById(Long id) {
        EventModel existingEvent = repository
                .findById(id)
                .orElse(null);

        if (existingEvent == null)
            return new ResponseEntity<>("{\"message\":\"event does not exist\"}", HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(existingEvent, HttpStatus.OK);
    }

    public ResponseEntity<?> updateEvent(EventModel event) {
        EventModel existingEvent = repository
                .findById(event.getId())
                .orElse(null);

        if (existingEvent == null)
            return new ResponseEntity<>("{\"message\":\"event does not exist\"}", HttpStatus.NOT_FOUND);

        if (event.getTitle() != null)
            existingEvent.setTitle(event.getTitle());

        if (event.getDescription() != null)
            existingEvent.setDescription(event.getDescription());

        if (event.getImage() != null)
            existingEvent.setImage(event.getImage());

//        if (event.getResources() != null)
//            existingEvent.setResources(event.getResources());

        if (event.getStartDate() != null)
            existingEvent.setStartDate(event.getStartDate());

        if (event.getEndDate() != null)
            existingEvent.setEndDate(event.getEndDate());

        return new ResponseEntity<>(repository.save(existingEvent), HttpStatus.OK);

    }

    public ResponseEntity<?> deleteEvent(Long id) {

        EventModel existingEvent = repository
                .findById(id)
                .orElse(null);

        if (existingEvent == null)
            return new ResponseEntity<>("{\"message\":\"resource does not exist\"}", HttpStatus.NOT_FOUND);

        //Removing relationship
        existingEvent.getResources().forEach(resource -> {

            ResponseEntity<?> existingResource = resourceService.getResource(resource.getId());

            if (existingResource.getBody() instanceof ResourceModel) {

                ((ResourceModel) existingResource.getBody()).setCollection(null);

                resourceService.updateResource((ResourceModel) existingResource.getBody());

            }

        });

        repository.deleteById(id);

        return new ResponseEntity<>("{\"message\":\"removed resource\"}", HttpStatus.OK);
    }

}
