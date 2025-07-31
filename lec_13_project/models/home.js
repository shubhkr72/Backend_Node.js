const RegisteredHomes = []
const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/pathUtil')

const { json } = require('body-parser')
module.exports = class Home {
    constructor(houseName, ownerName, rate, location, rating, photourl) {
        this.houseName = houseName
        this.ownerName = ownerName
        this.rate = rate
        this.location = location
        this.rating = rating
        this.photourl = photourl
    }
    save() {
        RegisteredHomes.push(this);

        const homeDataPath = path.join(rootDir, 'data','homes.json')

        fs.writeFile(homeDataPath, JSON.stringify(RegisteredHomes), (error) => {
            // console.log('registedred successfully')
            if (error) {
                console.error('Error writing to file:', error);
            } else {
                console.log('Registered successfully');
            }

        })


    }
    static fetchAll() {
        return RegisteredHomes
    }
}