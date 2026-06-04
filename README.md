# TODO LIST APP

## Overview

This is a full-stack Todo List application built using HTML, CSS, JavaScript, Spring Boot, and MySQL.

The application allows users to create, view, update, search, and delete tasks. All tasks are stored in a MySQL database, ensuring that data persists even after refreshing the page or restarting the application.

---

## Live Demo

The project is deployed using GitHub Pages and can be accessed here:

**Live Website:** https://pranavdeep246-stack.github.io/TODO-APP/

## Repository

**GitHub Repository:** https://github.com/pranavdeep246-stack/TODO-APP.git

## Features

* Create new tasks
* View all saved tasks
* Edit existing tasks by double-clicking them
* Mark tasks as completed
* Delete tasks
* Automatically delete empty tasks
* Search existing tasks
* Task completion counter
* Persistent storage using MySQL

---

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Spring Boot
* Spring Data JPA

### Database

* MySQL

---

## Project Structure

### Backend

* `Task.java` – Entity class representing a task
* `TaskRepository.java` – JPA repository for database operations
* `TaskController.java` – REST API endpoints
* `TodoBackendApplication.java` – Spring Boot entry point

### Frontend

* `index.html` – User interface
* `style.css` – Application styling
* `script.js` – Frontend logic and API communication

---

## REST API Endpoints

### Get all tasks

```http
GET /tasks
```

### Create a task

```http
POST /tasks
```

### Update a task

```http
PUT /tasks/{id}
```

### Delete a task

```http
DELETE /tasks/{id}
```

---

## Database Configuration

Before running the backend, update the database credentials in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
```

For security reasons, the password included in the repository is a placeholder value and must be replaced with your own MySQL password.

Make sure that:

* MySQL is installed and running
* The specified database exists
* The username and password match your local MySQL configuration

---

## How To Run

### Backend

1. Install Java 17 or later
2. Install MySQL
3. Create a database (for example: `todo_db`)
4. Update the database configuration in `application.properties`
5. Navigate to the backend project directory
6. Run the Spring Boot application

Using Maven:

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```

The backend will run on:

```text
http://localhost:8080
```

### Frontend

1. Open the frontend folder
2. Launch `index.html` using Live Server (recommended) or any local web server
3. Ensure the backend is running on port 8080
4. Start using the application

---



## Author

Pranav
