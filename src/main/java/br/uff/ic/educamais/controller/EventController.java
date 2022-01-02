package br.uff.ic.educamais.controller;

import br.uff.ic.educamais.model.AuthorModel;
import br.uff.ic.educamais.model.EventModel;
import br.uff.ic.educamais.model.ResourceModel;
import br.uff.ic.educamais.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {

    @Autowired
    private EventService service;

    @PostMapping("/event")
    public EventModel create(@RequestBody EventModel event) {
        return service.saveEvent(event);
    }

    @GetMapping("/event/{id}")
    public ResponseEntity<?> read(@PathVariable("id") Long id) {
        return service.getEventById(id);
    }

    @GetMapping("/event")
    public List<EventModel> readAll() {
        return service.getEvent();
    }

    @PutMapping("/event")
    public ResponseEntity<?> update(@RequestBody EventModel event) {
        return service.updateEvent(event);
    }

    @DeleteMapping("/event/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        return service.deleteEvent(id);
    }

}
