package br.uff.ic.educamais.repository;

import br.uff.ic.educamais.model.EventModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;


public interface EventRepository extends CrudRepository<EventModel, Long> {

    @Query("SELECT e FROM event e WHERE e.startDate BETWEEN ?1 AND ?2 OR e.endDate BETWEEN ?1 AND ?2")
    List<EventModel> findByPeriodOfTime(Date startDate, Date endDate);

}
