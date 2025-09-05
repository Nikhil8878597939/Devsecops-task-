A simple Node.js/Express + MongoDB app.
  const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoDb   = process.env.MONGO_DB   || 'testdb';

mongoose.connect(`mongodb://${mongoUser}:${mongoPass}@${mongoHost}:27017/${mongoDb}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    res.send('Hello from Secure DevSecOps App 🚀');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
