package br.uff.ic.educamais.controller;

import br.uff.ic.educamais.model.EventModel;
import br.uff.ic.educamais.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin
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
        return service.getEvent(id);
    }

    @GetMapping("/event")
    public List<EventModel> readAll() {
        return service.getEvents();
    }

    @GetMapping("/event/period")
    public List<EventModel> readByPeriodOfTime(
            @RequestParam("startDate") String startDate,
            @RequestParam("endDate") String endDate
    ) throws ParseException {

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

        return service.getEventsByPeriodOfTime(formatter.parse(startDate), formatter.parse(endDate));
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
