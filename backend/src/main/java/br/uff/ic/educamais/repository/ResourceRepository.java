package br.uff.ic.educamais.repository;

import br.uff.ic.educamais.model.ResourceModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ResourceRepository extends CrudRepository<ResourceModel, Long> {

    @Query("SELECT r FROM resource r INNER JOIN r.authors a WHERE a.id = ?1")
    List<ResourceModel> findByAuthor(Long idAuthor);

    @Query("SELECT r FROM resource r INNER JOIN r.collection c WHERE c.id = ?1")
    List<ResourceModel> findByCollection(Long idCollection);

}
