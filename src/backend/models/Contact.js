const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: String,
        phone: String,
        message: String
    }
);

const Contact = mongoose.model('contacted',contactSchema);

module.exports = Contact;