package br.uff.ic.educamais.repository;

import br.uff.ic.educamais.model.CourseModel;
import org.springframework.data.repository.CrudRepository;

public interface CourseRepository extends CrudRepository<CourseModel, Long> {
}
