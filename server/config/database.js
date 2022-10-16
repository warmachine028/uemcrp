const mongoose = require('mongoose');

const connection = mongoose.createConnection(process.env.MONGODB_URI, {});

connection.on('connected', () => {
  console.log('Connected to mongodb');
});

connection.on('disconnected', () => {
  console.log('Connection disconnected');
});

connection.on('error', (error) => {
  console.log(error);
});
