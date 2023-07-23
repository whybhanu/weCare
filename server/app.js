const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const mongoose = require('mongoose');

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

// You have to always use it before router
app.use(express.json());

// connecting router module
app.use((require('./router/auth')));

// Linking database for connection
require('./db/connec');

// using middleware
app.use(express.json());



app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})