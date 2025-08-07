

const mongoose = require('mongoose');

const contactDetailsSchema  = new mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Phone: { type: String, required: true },
    Message: { type: String, required: true },
});

const contactDetails = mongoose.model('ContactDetails', contactDetailsSchema);

module.exports = contactDetails;