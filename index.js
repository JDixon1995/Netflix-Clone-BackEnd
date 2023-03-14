const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = 8000

dotenv.config()

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})