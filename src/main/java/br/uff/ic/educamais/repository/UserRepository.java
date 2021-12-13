package br.uff.ic.educamais.repository;

import br.uff.ic.educamais.model.UserModel;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserModel, Integer> {

}
