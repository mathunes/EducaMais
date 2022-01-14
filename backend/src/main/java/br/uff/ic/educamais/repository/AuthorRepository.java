package br.uff.ic.educamais.repository;

import br.uff.ic.educamais.model.AuthorModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AuthorRepository extends CrudRepository<AuthorModel, Long> {

    @Query("SELECT a FROM author a WHERE a.lastName = ?1")
    List<AuthorModel> findByLastName(String lastName);

}