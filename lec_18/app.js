const express = require('express')
const userRouter = require('./routes/UserRouter')
const { hostRouter } = require('./routes/AdminRouter')
const {AuthRouter} = require('./routes/AuthRouter')
const {error404} = require('./controller/errorController');
// const { mongoConnect } = require('./utils/database');
const { default: mongoose } = require('mongoose');
const session= require('express-session');
const mongodbsession = require('connect-mongodb-session')(session);


const app = express();
//set ejs
app.set('view engine', 'ejs')
app.set('views', 'views');
//parse bosy for every post
//cookie check 


app.use(express.urlencoded())
const DB_URL = 'mongodb+srv://sebrin:Sebrin720%40@homestay.d4wrno4.mongodb.net/HomeStay?retryWrites=true&w=majority&appName=HomeStay';

//session store
const store = new mongodbsession({
    uri: DB_URL,
    collection: 'sessions'
});
//session middleware
app.use(session({
    secret: 'shubham-sebrin',
    resave: false,
    saveUninitialized: true,
    store: store //store in mongodb
}))

app.use((req,res,next) => {
    // req.isLoggedIn = req.get('cookie') ? req.get('cookie').split('=')[1] === 'true' ? true : false : false; // Set isLoggedIn
    req.isLoggedIn = req.session.isLoggedIn; // Set session variable for login status
    next();
});

app.use((req, res, next) => {
    console.log(req.url, req.method)
    next()
})
//for common path
app.use(userRouter) //middleware


app.use('/host', (req, res, next) => {
    if(!req.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}); //middleware
// app.use(,hostRouter) //middleware
app.use(AuthRouter) //middleware


app.use(error404)


// Using Mongoose to connect to MongoDB
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js


//db name is HomeStay

mongoose.connect(DB_URL).then(() => {
    console.log("Connected to MongoDB successfully.");
    app.listen(3004, () => {
        console.log("Server has successfully started on port 3004.");
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});