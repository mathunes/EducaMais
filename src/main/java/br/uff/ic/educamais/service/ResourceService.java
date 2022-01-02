package br.uff.ic.educamais.service;

import br.uff.ic.educamais.model.AuthorModel;
import br.uff.ic.educamais.model.ResourceModel;
import br.uff.ic.educamais.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class ResourceService {

    @Autowired
    private ResourceRepository repository;

    @Autowired
    private AuthorService authorService;

    public ResourceModel saveResource(@RequestBody ResourceModel resource) {

        ResourceModel newResource = repository.save(resource);

        resource.getAuthors().forEach(author -> {

            ResponseEntity<?> existingAuthor = authorService.getAuthorById(author.getId());

            if (existingAuthor.getBody() instanceof AuthorModel) {

                ((AuthorModel) existingAuthor.getBody()).getResources().add(resource);

                authorService.updateAuthor((AuthorModel) existingAuthor.getBody());

            }

        });

        return newResource;
    }

    public List<ResourceModel> getResources() {
        return (List<ResourceModel>) repository.findAll();
    }

    public ResponseEntity<?> getResource(Long id) {
        ResourceModel existingResource = repository
                .findById(id)
                .orElse(null);

        if (existingResource == null)
            return new ResponseEntity<>("{\"message\":\"resource does not exist\"}", HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(existingResource, HttpStatus.OK);
    }

//    public ResponseEntity<?> updateResource(ResourceModel resource) {
//        ResourceModel existingResource = repository
//                .findById(id)
//                .orElse(null);
//
//        if (existingResource == null)
//            return new ResponseEntity<>("{\"message\":\"resource does not exist\"}", HttpStatus.NOT_FOUND);
//
//
//    }

}
