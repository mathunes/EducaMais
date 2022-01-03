package br.uff.ic.educamais.service;

import br.uff.ic.educamais.model.CollectionModel;
import br.uff.ic.educamais.model.ResourceModel;
import br.uff.ic.educamais.repository.CollectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CollectionService {

    @Autowired
    private CollectionRepository repository;

    public ResponseEntity<?> getCollection(Long id) {
        CollectionModel existingCollection = repository
                .findById(id)
                .orElse(null);

        if (existingCollection == null)
            return new ResponseEntity<>("{\"message\":\"collection does not exist\"}", HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(existingCollection, HttpStatus.OK);
    }

}
