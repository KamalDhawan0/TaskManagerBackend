# Task Manager Backend

A simple and modular REST API for managing personal tasks. This project was built using Node.js, Express, Prisma, and SQLite, following a layered architecture to keep the codebase clean, maintainable, and easy to scale.

## Overview

This backend powers a personal task management application where users can create, update, organize, and track their tasks.

The project was designed with simplicity in mind while still following good backend development practices such as separation of concerns, service-based architecture, and database abstraction through Prisma ORM.

---

## Tech Stack

* Node.js
* Express.js
* Prisma ORM
* SQLite
* Nodemon

---

## Project Structure

```text
src/
├── controllers/
│   └── taskController.js
│
├── services/
│   └── taskService.js
│
├── routes/
│   └── taskRoutes.js
│
├── db/
│   └── prisma.js
│
├── app.js
└── server.js

prisma/
└── schema.prisma
```

### Architecture

```text
Client
  ↓
Routes
  ↓
Controllers
  ↓
Services
  ↓
Prisma ORM
  ↓
SQLite Database
```

* Routes handle incoming requests.
* Controllers manage request/response logic.
* Services contain business logic and database operations.
* Prisma acts as the ORM layer.
* SQLite stores application data.

---

## Features

### Task Management

* Create a new task
* View all tasks
* View a specific task
* Update task details
* Delete a task
* Mark tasks as complete/incomplete

### Filtering

* Retrieve all tasks
* Retrieve only active tasks
* Retrieve only completed tasks

### Statistics

* Total tasks count
* Active tasks count
* Completed tasks count

---

## Database Schema

### Task

| Field       | Type     | Description               |
| ----------- | -------- | ------------------------- |
| id          | String   | Unique task identifier    |
| title       | String   | Task title                |
| description | String   | Optional task description |
| dueDate     | DateTime | Optional due date         |
| completed   | Boolean  | Completion status         |
| createdAt   | DateTime | Creation timestamp        |
| updatedAt   | DateTime | Last update timestamp     |

## API Endpoints

Base URL:

```text
http://localhost:5000
```

| Method | Endpoint                  | Description                   |
| ------ | ------------------------- | ----------------------------- |
| POST   | `/tasks`                  | Create a new task             |
| GET    | `/tasks`                  | Get all tasks                 |
| GET    | `/tasks/:id`              | Get a task by ID              |
| PATCH  | `/tasks/:id`              | Update task details           |
| PATCH  | `/tasks/:id/toggle`       | Toggle task completion status |
| DELETE | `/tasks/:id`              | Delete a task                 |
| GET    | `/tasks?status=active`    | Get active tasks              |
| GET    | `/tasks?status=completed` | Get completed tasks           |
| GET    | `/tasks/stats`            | Get task statistics           |

## Server Configuration

Default Port:

```text
5000
```

Environment Variable:

```env
PORT=5000
```

