package br.uff.ic.educamais.service;

import br.uff.ic.educamais.model.AuthorModel;
import br.uff.ic.educamais.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService {

    @Autowired
    private AuthorRepository repository;

    public AuthorModel saveAuthor(AuthorModel author) {
        return repository.save(author);
    }

    public List<AuthorModel> getAuthors() {
        return (List<AuthorModel>) repository.findAll();
    }

    public ResponseEntity<?> getAuthor(Long id) {
        AuthorModel existingAuthor = repository
                .findById(id)
                .orElse(null);

        if (existingAuthor == null)
            return new ResponseEntity<>("{\"message\":\"author does not exist\"}", HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(existingAuthor, HttpStatus.OK);
    }

    public List<AuthorModel> getAuthorsByLastName(String lastName) {
        return repository.findByLastName(lastName);
    }

    public ResponseEntity<?> updateAuthor(AuthorModel author) {
        AuthorModel existingAuthor = repository
                .findById(author.getId())
                .orElse(null);

        if (existingAuthor == null)
            return new ResponseEntity<>("{\"message\":\"author does not exist\"}", HttpStatus.NOT_FOUND);

        if (author.getEmail() != null)
            existingAuthor.setEmail(author.getEmail());

        if (author.getName() != null)
            existingAuthor.setName(author.getName());

        if (author.getLastName() != null)
            existingAuthor.setLastName(author.getLastName());

        if (author.getAffiliation() != null)
            existingAuthor.setAffiliation(author.getAffiliation());

        if (author.getOrcid() != null)
            existingAuthor.setOrcid(author.getOrcid());

        return new ResponseEntity<>(repository.save(existingAuthor), HttpStatus.OK);
    }

    public ResponseEntity<?> deleteAuthor(Long id) {
        AuthorModel existingAuthor = repository
                .findById(id)
                .orElse(null);

        if (existingAuthor == null)
            return new ResponseEntity<>("{\"message\":\"author does not exist\"}", HttpStatus.NOT_FOUND);

        repository.deleteById(id);
        return new ResponseEntity<>("{\"message\":\"removed author\"}", HttpStatus.OK);
    }

}
