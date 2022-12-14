require('dotenv').config();
require('./config/database');
const express = require('express');

const app = express();

const userRouter = require('./routes/user/index');

app.use(express.json());

app.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'UEMCRP Server' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.use('/user', userRouter);

app.all('*', (req, res) => {
  try {
    res.status(404).json({ message: 'API not found' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port: ${process.env.PORT}`)
);
