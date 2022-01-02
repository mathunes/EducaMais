package br.uff.ic.educamais.controller;

import br.uff.ic.educamais.model.ResourceModel;
import br.uff.ic.educamais.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
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

}
