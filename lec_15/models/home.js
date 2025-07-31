const db = require('../utils/database')


const { json } = require('body-parser')
module.exports = class Home {
    constructor(HouseName, OwnerName, Rate, Location, Rating, PhotoUrl, Description) {
        // this.id=Math.random().toString();
        this.HouseName = HouseName
        this.OwnerName = OwnerName
        this.Rate = Rate
        this.Location = Location
        this.Rating = Rating
        this.PhotoUrl = PhotoUrl
        this.Description = Description
    }

    // req.body.HouseName,req.body.OwnerName,req.body.Rate,req.body.Location,req.body.Rating,req.body.PhotoUrl,req.body.Description

    save() {
        // console.log({
        //     HouseName: this.HouseName,
        //     OwnerName: this.OwnerName,
        //     Rate: this.Rate,
        //     Location: this.Location,
        //     Rating: this.Rating,
        //     PhotoUrl: this.PhotoUrl,
        //     Description: this.Description
        // });
        const values = [
            this.HouseName ?? 'Default',
            this.OwnerName ?? 'Unknown',
            this.Rate ?? 0,
            this.Location ?? 'Unknown',
            this.Rating ?? 0,
            this.PhotoUrl ?? 'Unknown',
            this.Description ?? 'No Description'
        ];

        // return db.execute('INSERT INTO homes (houseName, ownerName, Rate, location, Rating, photoUrl) VALUES (?, ?, ?, ?, ?, ?)', [this.houseName, this.ownerName, this.Rate, this.location, this.Rating, this.photoUrl])
        // .then(result => {
        return db.execute('INSERT INTO homes (HouseName, OwnerName, Rate, Location, Rating, PhotoUrl, Description) VALUES (?, ?, ?, ?, ?, ?, ?)', values)
            .then(result => {
                console.log("Home added successfully")
                console.log(result)
                return result;
            })
            .catch(err => {
                console.log(err)
            })



    }
    static fetchAll() {
        return db.execute('SELECT * FROM homes ORDER BY Rate ASC');
        
    }

    static findHomeById(homeId) {
  // Return the Promise directly from the database call
  return db.execute('SELECT * FROM homes WHERE ID = ?', [homeId]);
}
    
}