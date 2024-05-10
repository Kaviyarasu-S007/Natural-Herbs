const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');

const mongoURI = "mongodb+srv://hariaws0510:vneN9nCXHl9lg4ZH@cluster0.fw6vyse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
  // Omit the useNewUrlParser and useUnifiedTopology options
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});