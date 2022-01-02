package br.uff.ic.educamais.repository;

import br.uff.ic.educamais.model.ResourceModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ResourceRepository extends CrudRepository<ResourceModel, Long> {
}
