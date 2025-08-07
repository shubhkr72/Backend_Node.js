const express = require('express')
const userRouter = require('./routes/UserRouter')
const { hostRouter } = require('./routes/AdminRouter')
const {error404} = require('./controller/errorController');
// const { mongoConnect } = require('./utils/database');
const { default: mongoose } = require('mongoose');



const app = express();
//set ejs
app.set('view engine', 'ejs')
app.set('views', 'views')
//parse bosy for every post
app.use(express.urlencoded())

app.use((req, res, next) => {
    console.log(req.url, req.method)
    next()
})
//for common path
app.use(userRouter) //middleware

app.use('/host', hostRouter) //middleware
// app.use(,hostRouter) //middleware


app.use(error404)


// Using Mongoose to connect to MongoDB
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js

const DB_URL = 'mongodb+srv://sebrin:Sebrin720%40@homestay.d4wrno4.mongodb.net/HomeStay?retryWrites=true&w=majority&appName=HomeStay';

//db name is HomeStay

mongoose.connect(DB_URL).then(() => {
    console.log("Connected to MongoDB successfully.");
    app.listen(3004, () => {
        console.log("Server has successfully started on port 3004.");
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});