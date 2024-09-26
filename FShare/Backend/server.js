const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');
const { JWT_secret } = require ('./genereteSecret');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

//Cors Configuration
const corsOptions = {
    origin: 'https://127.0.0.1:3000',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/AuthDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Signup route
app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;

    //Chec if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username,  email, password: hashedPassword });
    try {
        await user.save();
        res.status(201).send('User created');
    } catch (err) {
        res.status(400).send('Error creating user: ' + err.message);
    }
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).send('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, JWT_secret); // Use a strong secret in production
    res.json({ token });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
