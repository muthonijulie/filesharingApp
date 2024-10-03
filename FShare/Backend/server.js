const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Create a db connection
mongoose.connect('mongodb+srv://junami:mongodb1234%23@hac.wc3op.mongodb.net/')
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.log("DB connections error:",error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:3000/',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
      "Content-Type",
      'Authorization',
      'Cache-Control',
      'Expires',
      'Pragma'
    ],
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
