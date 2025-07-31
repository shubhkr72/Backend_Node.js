const express = require('express')
const userRouter = require('./routes/UserRouter')
const { hostRouter } = require('./routes/AdminRouter')
const {error404} = require('./controller/errorController');
const { mongoConnect } = require('./utils/database');



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

//making public publicly accessible
// app.use(express.static(path.join(rootDir, 'public')))

app.use(error404)

//connecting to MongoDB
mongoConnect(() => {
    console.log("Connected to MongoDB successfully.");

    app.listen(3004, () => {
        console.log("Server has successfully started on port 3004.");
    });
});