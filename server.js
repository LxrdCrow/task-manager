const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connessione a MongoDB
mongoose.connect('mongodb://localhost:27017/federico')
  .then(() => console.log('✅ Connessione a MongoDB riuscita'))
  .catch((err) => console.error('❌ Errore di connessione MongoDB:', err));

// Definizione dello schema e modello
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

// Endpoint per creare un nuovo task
app.post('/api/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint per ottenere tutti i task
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint per aggiornare un task
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).send('Task non trovato');
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint per eliminare un task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).send('Task non trovato');
    res.json({ message: 'Task eliminato' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server in ascolto sulla porta ${PORT}`);
});
