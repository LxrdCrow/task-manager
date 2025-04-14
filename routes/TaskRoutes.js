const express = require('express');
const router = express.Router();
const TaskController = require('./controllers/TaskController');


// Routes for task management:

router.post('/tasks', TaskController.createTask);

router.get('/tasks', TaskController.getAllTasks);

router.delete('/tasks/:id', TaskController.deleteTask);

router.put('/tasks/:id', TaskController.updateTask);

module.exports = router;
