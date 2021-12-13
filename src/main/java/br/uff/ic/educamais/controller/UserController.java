package br.uff.ic.educamais.controller;

import br.uff.ic.educamais.model.UserModel;
import br.uff.ic.educamais.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping("/user/{id}")
    public ResponseEntity search(@PathVariable("id") Integer id) {

        return repository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());

    }

    @PostMapping("/user")
    public UserModel save(@RequestBody UserModel user) {

        return repository.save(user);

    }

}
