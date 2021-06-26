const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

// Enable Proxy
app.enable('trust proxy');

// Get Routes
const userRoutes = require('./routes/userRoutes');
const theaterRoutes = require('./routes/theaterRoutes');

// Morgan Middleware
app.use(morgan('dev'));

// CORS Config
app.use(cors({origin: 'http://localhost:3000', credentials: true}));

// body-parser: parser application/json
app.use(bodyParser.json());

// Connect to MongoDB database
const db_uri = process.env.DB_URI;

mongoose.connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected to MongoDB...");
}).catch((err) => {
    console.log(err);
})

// Use Routes
app.use("/users", userRoutes);
app.use("/theater", theaterRoutes);

// Listen on selected port
app.listen(port, () => {
    console.log(`Running on port: ${port}`);
})