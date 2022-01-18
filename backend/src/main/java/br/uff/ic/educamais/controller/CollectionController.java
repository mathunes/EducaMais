package br.uff.ic.educamais.controller;

import br.uff.ic.educamais.service.CollectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class CollectionController {

    @Autowired
    private CollectionService service;

    @GetMapping("/collection/{id}")
    public ResponseEntity<?> read(@PathVariable("id") Long id) {
        return service.getCollection(id);
    }

}
