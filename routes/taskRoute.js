const express = require('express');
const taskController = require('../controllers/taskControllers');

const router = express.Router();

//All the API Endpoints Routes...
//Get all tasks
router.get('/tasks', taskController.getAllTask);

//Get a specific 1 task by ID
router.get('/tasks/:id', taskController.get1Task);

//Create a new task
router.post('/tasks', taskController.createTask);

//Update a task
router.put('/tasks/:id', taskController.updateTask);

//Delete a task
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
