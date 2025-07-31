const mongodb=require('mongodb');

const MongoClient=mongodb.MongoClient;

const mongo_url='mongodb+srv://sebrin:Sebrin720%40@homestay.d4wrno4.mongodb.net/?retryWrites=true&w=majority&appName=HomeStay';

let _db;
const mongoConnect=(callback)=>{
    MongoClient.connect(mongo_url)
        .then(client=>{
            console.log("Connected to MongoDB");
            _db=client.db('HomeStay');
            callback();
        })
        .catch(err=>{
            console.error("Failed to connect to MongoDB", err);
        });
}
const getDb=()=>{
    if(_db){
        return _db;
    }
    throw new Error("No database found");
}

module.exports={mongoConnect,getDb};