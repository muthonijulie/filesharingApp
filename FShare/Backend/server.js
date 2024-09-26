const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');
const { JWT_secret } = require('./generateSecret');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// CORS Configuration
const corsOptions = {
    origin: 'https://127.0.0.1:3000',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/AuthDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Initialize GridFS
let gfs;
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/AuthDB', { useNewUrlParser: true, useUnifiedTopology: true });
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads'); // Set the collection name
});

// Multer storage configuration for GridFS
const storage = new GridFsStorage({
    url: 'mongodb://127.0.0.1:27017/AuthDB',
    file: (req, file) => {
        return {
            filename: file.originalname,
            bucketName: 'uploads', // Set the bucket name
        };
    },
});
const upload = multer({ storage });

// Signup route
app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });
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

// File upload route
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});

// Retrieve files route
app.get('/api/files/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({ err: 'No file exists' });
        }

        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
nom