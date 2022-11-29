import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from server! This is the auth page.');
});

router.get('/register', (req, res) => {
  res.send('Hello from server! This is the register page.');
});

export default router;
