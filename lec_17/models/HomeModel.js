
// const { json } = require('body-parser')
// const getDb = require('../utils/database').getDb;
// const mongodb = require('mongodb');
// module.exports = class Home {
//     constructor(HouseName, OwnerName, Rate, Location, Rating, PhotoUrl, Description) {
//         // this.id=Math.random().toString();
//         this.HouseName = HouseName
//         this.OwnerName = OwnerName
//         this.Rate = Rate
//         this.Location = Location
//         this.Rating = Rating
//         this.PhotoUrl = PhotoUrl
//         this.Description = Description
//     }

//     // req.body.HouseName,req.body.OwnerName,req.body.Rate,req.body.Location,req.body.Rating,req.body.PhotoUrl,req.body.Description

//     save() {
        
//         const values = [
//             this.HouseName ?? 'Default',
//             this.OwnerName ?? 'Unknown',
//             this.Rate ?? 0,
//             this.Location ?? 'Unknown',
//             this.Rating ?? 0,
//             this.PhotoUrl ?? 'Unknown',
//             this.Description ?? 'No Description'
//         ];
//         const db = getDb();
//         return db.collection('homes').insertOne(this)
//     }

//     static fetchAll() {
//         const db = getDb();
//         return db.collection('homes').find().toArray()
//             .then(homes => {
//                 console.log("Fetched homes:", homes);
//                 return homes;
//             })
//             .catch(err => {
//                 console.error("Error fetching homes:", err);
//                 throw err;
//             });
        
        
//     }

//     static findHomeById(homeId) {
//         const db = getDb();
//         return db.collection('homes').findOne({ _id: new mongodb.ObjectId(homeId) })
//             .then(home => {
//                 if (!home) {
//                     console.log("Home not found with ID:", homeId);
//                     return null;
//                 }
//                 console.log("Found home:", home);
//                 return home;
//             })
//             .catch(err => {
//                 console.error("Error finding home by ID:", err);
//                 throw err;
//             });
//     }
//   // Return the Promise directly from the database call
// }
    


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