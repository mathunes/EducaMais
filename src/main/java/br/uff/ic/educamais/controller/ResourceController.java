package br.uff.ic.educamais.controller;

import br.uff.ic.educamais.model.AuthorModel;
import br.uff.ic.educamais.model.ResourceModel;
import br.uff.ic.educamais.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ResourceController {

    @Autowired
    private ResourceService service;

    @PostMapping("/resource")
    public ResourceModel create(@RequestBody ResourceModel resource) {
        return service.saveResource(resource);
    }

    @GetMapping("/resource")
    public List<ResourceModel> readAll() {
        return service.getResources();
    }

    @GetMapping("/resource/{id}")
    public ResponseEntity<?> read(@PathVariable("id") Long id) {
        return service.getResourceById(id);
    }

    @PutMapping("/resource")
    public ResponseEntity<?> update(@RequestBody ResourceModel resource) {
        return service.updateResource(resource);
    }

}
