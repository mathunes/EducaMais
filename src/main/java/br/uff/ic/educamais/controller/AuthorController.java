package br.uff.ic.educamais.controller;

import br.uff.ic.educamais.model.AuthorModel;
import br.uff.ic.educamais.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class AuthorController {

    @Autowired
    private AuthorService service;

    @PostMapping("/author")
    public AuthorModel create(@RequestBody AuthorModel author) {
        return service.saveAuthor(author);
    }

    @GetMapping("/author/{id}")
    public ResponseEntity<?> read(@PathVariable("id") Long id) {
        return service.getAuthorById(id);
    }

    @GetMapping("/author")
    public List<AuthorModel> readAll() {
        return service.getAuthors();
    }

    @PutMapping("/author")
    public ResponseEntity<?> update(@RequestBody AuthorModel author) {
        return service.updateAuthor(author);
    }

    @DeleteMapping("/author/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        return service.deleteAuthor(id);
    }

}
