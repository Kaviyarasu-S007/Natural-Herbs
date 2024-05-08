const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/project', {
  // No options needed for the new URL format
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

