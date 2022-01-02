package br.uff.ic.educamais.repository;

import br.uff.ic.educamais.model.AuthorModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface AuthorRepository extends CrudRepository<AuthorModel, Long> {
    @Query("SELECT a.name FROM author a WHERE a.id = ?1")
    String findByIdTest(Long id);
}