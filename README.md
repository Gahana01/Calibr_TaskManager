# Calibr_TaskManager
Internship Assignment : Task Manager API
This Node.js project uses Express to build a RESTful API for a Task Manager.

# Instructions
Create a Node.js project using Express to build a RESTful API for a Task Manager.
Use a simple in-memory data store (e.g., an array) to store tasks.
Implement CRUD operations for tasks: Create, Read, Update, Delete.
Include validation for task data (e.g., task name should be required and not empty).
Implement error handling and return appropriate status codes for different scenarios (e.g., 404 for not found, 400 for bad request).
Create a README.md file that includes instructions on how to run the project, API endpoints, and examples of requests and responses.

# API Endpoints
GET /tasks              Get a list of all tasks.
GET /tasks/:id          Get details of a specific task by ID.
POST /tasks             Create a new task. Request body should contain task details.
PUT /tasks/:id          Update details of a specific task by ID. Request body should contain updated task details.
DELETE /tasks/:id       Delete a specific task by ID.

# Instructions
The server will be running at http://localhost:3000.

# Task Data Structure
{ "id": "unique_task_id", "name": "Task Name", "description": "Task Description", "completed": false } 
