const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { JWT_secret } = require('./generateSecret');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));

// MySQL Database connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Leave empty if no password
    database: 'AuthDB',
    waitForConnections: true,
    connectionLimit: 10,
});

// File upload configuration using Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    },
});

const upload = multer({ storage });

// Ensure 'uploads' directory exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Signup route
app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user exists
        const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).send('User already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into MySQL database
        await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
        res.status(201).send('User created');
    } catch (err) {
        res.status(400).send('Error creating user: ' + err.message);
    }
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = rows[0];

        if (!user) {
            return res.status(400).send('User not found');
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        // Generate JWT
        const token = jwt.sign({ id: user.id }, JWT_secret);
        res.json({ token });
    } catch (err) {
        res.status(400).send('Error logging in: ' + err.message);
    }
});

// File upload route
app.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
        // Save file metadata in MySQL
        const fileName = req.file.filename;
        const filePath = req.file.path;

        await pool.query('INSERT INTO uploads (filename, filepath) VALUES (?, ?)', [fileName, filePath]);

        res.json({ file: req.file });
    } catch (err) {
        res.status(500).send('File upload failed: ' + err.message);
    }
});

// Retrieve files route
app.get('/api/files/:filename', async (req, res) => {
    try {
        const [fileData] = await pool.query('SELECT * FROM uploads WHERE filename = ?', [req.params.filename]);

        if (fileData.length === 0) {
            return res.status(404).json({ err: 'No file exists' });
        }

        const file = fileData[0];
        res.sendFile(path.resolve(file.filepath));
    } catch (err) {
        res.status(500).send('Error retrieving file: ' + err.message);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
