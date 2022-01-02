package br.uff.ic.educamais.repository;

import br.uff.ic.educamais.model.EventModel;
import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository<EventModel, Long> {
}
