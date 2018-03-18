package br.com.carneiro.tasks.service;

import br.com.carneiro.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);

}
