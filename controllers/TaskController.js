const Task = require('../models/Task');

// Obtain all tasks from the database
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Errore nel recupero delle task' });
  }
};

// Create a new task in the database
const createTask = async (req, res) => {
  try {
    const newTask = new Task({ title: req.body.title });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: 'Errore nella creazione della task' });
  }
};

// Update a task in the database
const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: 'Errore nell\'aggiornamento della task' });
  }
};

// Delete a task from the database
const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: 'Errore nell\'eliminazione della task' });
  }
};

// Export the functions to be used in the routes
const express = require('express');
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};
