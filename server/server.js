const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('dotenv').config();

const port = 5000;

// Get Routes
const userRoutes = require('./routes/userRoutes');

// Morgan Middleware
app.use(morgan('dev'));

// CORS Config
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Connect to MongoDB database
const db_uri = process.env.DB_URI;

mongoose.connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB...");
})
.catch((err) => {
    console.log(err);
})

// Use Routes
app.use("/users", userRoutes);

// Listen on selected port
app.listen(port, () => {
    console.log(`Running on port: ${port}`);
})