const mongoose = require('mongoose');

// Definition of the Task schema
// The schema defines the structure of the Task document in MongoDB
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true 
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Task', TaskSchema);
