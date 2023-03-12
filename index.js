const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8000

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})