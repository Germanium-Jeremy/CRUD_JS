const express = require('express');
const { getTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/getTasks', getTasks);
router.get('/getTasks/:id', getTaskById);
router.post('/addTasks', createTask);
router.put('/editTasks/:id', updateTask);
router.delete('/deleteTasks/:id', deleteTask);

module.exports = router;