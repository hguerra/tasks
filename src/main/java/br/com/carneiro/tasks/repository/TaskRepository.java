package br.com.carneiro.tasks.repository;

import br.com.carneiro.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {

}
