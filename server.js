const express = require('express');
const mongoose = require('mongoose');
const TaskRoutes = require('./routes/TaskRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/projects')
  .then(() => console.log('✅ Connessione a MongoDB riuscita'))
  .catch((err) => console.error('❌ Errore di connessione MongoDB:', err));


app.use('/api', TaskRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server in ascolto sulla porta ${PORT}`);
});

