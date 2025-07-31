const RegisteredHomes = []
const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/pathUtil')

const { json } = require('body-parser')
module.exports = class Home {
    constructor(houseName, ownerName, rate, location, rating, photourl) {
        this.id=Math.random().toString();
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
    static fetchAll(callback) {
        const homeDataPath = path.join(rootDir, 'data','homes.json')
        fs.readFile(homeDataPath,(err,data)=>{
            callback(!err ? JSON.parse(data):[])
        })
        // return RegisteredHomes
    }
    
    static findHomeById(homeId,callback){
        this.fetchAll(homes=>{
            const homefound=homes.find(home=>home.id===homeId)
            callback(homefound)
        })


    }
}