import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import flightsRoute from './routes/flights.js';
import departuresRoute from './routes/departures.js';
import arrivalsRoute from './routes/arrivals.js';

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

//middleware
app.use('/api/auth', authRoute);
app.use('/api/users', authRoute);
app.use('/api/flights', authRoute);
app.use('/api/departures', authRoute);
app.use('/api/arrivals', authRoute);

app.listen(PORT, () => {
  connect();
  console.log(`Listening to port ${PORT}`);
});
