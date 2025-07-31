
const homeModel=require('../models/home')

exports.getHomePage=(req,res,next)=>{
    console.log(req.url,req.method)

    console.log(homeModel.fetchAll())
    // console.log(RegisteredHomes)
    // res.sendFile(path.join(rootDir,"views",'home.html'))
    res.render('home',{RegisteredHomes:homeModel.fetchAll(),
        pageTitle:'AirHome'
    })
}