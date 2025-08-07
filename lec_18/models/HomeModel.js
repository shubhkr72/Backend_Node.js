

const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    HouseName: { type: String, required: true },
    OwnerName: { type: String, required: true },
    Rate: { type: Number, required: true },
    Location: { type: String, required: true },
    Rating: { type: Number, required: true },
    PhotoUrl: { type: String, required: true },
    Description: { type: String, required: true }
});

const Home = mongoose.model('Home', homeSchema);



module.exports = Home;