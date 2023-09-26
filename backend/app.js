const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;

// This is the middleware
app.use(express.json());
app.use(cors());

const server = () => {
    console.log("Testing access: ", PORT);
}

server();