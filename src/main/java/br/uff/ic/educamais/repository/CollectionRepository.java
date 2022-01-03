package br.uff.ic.educamais.repository;

import br.uff.ic.educamais.model.CollectionModel;
import org.springframework.data.repository.CrudRepository;

public interface CollectionRepository extends CrudRepository<CollectionModel, Long> {
}
