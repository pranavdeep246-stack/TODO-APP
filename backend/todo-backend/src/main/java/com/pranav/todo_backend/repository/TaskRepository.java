package com.pranav.todo_backend.repository;

import com.pranav.todo_backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}