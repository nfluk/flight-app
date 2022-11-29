const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

app.listen(PORT, () => {
  connect();
  console.log(`Listening to port ${PORT}`);
});
