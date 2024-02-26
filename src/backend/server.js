const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/Contact.js');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ProjectContactForm');

app.post('/form',(req, res) =>
{
    Contact.create(req.body)
    .then(contacts => res.json(contacts))
    .catch(err => res.json(err))
});

app.listen(3003, () =>
{
    console.log("Server is Running")
})