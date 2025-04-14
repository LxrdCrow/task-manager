const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/TaskRoutes');

dotenv.config(); // Load environment variables from .env file

// Initialize Express app
const app = express();
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Connection to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/projects')
  .then(() => console.log('✅ Connessione a MongoDB riuscita'))
  .catch((err) => console.error('❌ Errore di connessione MongoDB:', err));

// Routes for tasks
app.use('/api/tasks', taskRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server in ascolto sulla porta ${PORT}`);
});
