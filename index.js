const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = 8000

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('DB Connected')
})
.catch((err) => {
    console.error(err)
})

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})