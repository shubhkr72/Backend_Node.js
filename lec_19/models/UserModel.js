
const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true ,unique: true},
    UserName: { type: String, required: true ,unique: true},
    Password: { type: String, required: true },
    // ConfirmPassword: { type: String, required: true },
    UserType: { type: String, required: true }
});

module.exports = mongoose.model('UserDetails', UserDetailsSchema);



// module.exports = UserDetails;