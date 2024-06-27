const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config()
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.DB;

app.use(bodyParser.json());
app.use(cors());

app.use('/', taskRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => console.error('MongoDB connection error:', error));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));