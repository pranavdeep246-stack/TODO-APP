package com.pranav.todo_backend.controller;

import com.pranav.todo_backend.model.Task;
import com.pranav.todo_backend.repository.TaskRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("*")
public class TaskController {

    private final TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
}
@PostMapping
public Task createTask(@RequestBody Task task) {
    return taskRepository.save(task);
}