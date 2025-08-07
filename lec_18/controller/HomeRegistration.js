const { mongo } = require('mongoose')
const homeModel=require('../models/HomeModel')


exports.getAddHome=(req,res,next)=>{
    // res.send()
    // res.sendFile(path.join(rootDir,"views",'addHome.html'))
    res.render('HomeRegistration/AddHome')
}

// const RegisteredHomes=[];

exports.postHome=(req,res,next)=>{
    console.log(req.body)
    const {HouseName, OwnerName, Rate, Location, Rating, PhotoUrl, Description} = req.body;
    const h1=new homeModel({
        HouseName: HouseName ?? 'Default',
        OwnerName: OwnerName ?? 'Unknown',
        Rate: Rate ?? 0,
        Location: Location ?? 'Unknown',
        Rating: Rating ?? 0,
        PhotoUrl: PhotoUrl ?? 'Unknown',
        Description: Description ?? 'No Description'
    });
    
    console.log(h1)
    h1.save()
        .then(result => {
            console.log("Home added successfully", result);
        })
        .catch(err => {
            console.error("Error adding home:", err);
        });


    // res.send()
    //caan destructure
    // const h1=new homeModel(req.body.HouseName,req.body.OwnerName,req.body.Rate,req.body.Location,req.body.Rating,req.body.PhotoUrl,req.body.Description)
    // console.log(h1)
    // RegisteredHomes.push(req.body)
    // res.sendFile(path.join(rootDir,"views",'homeAdded.html'))
    // h1.save()
    res.render('HomeRegistration/homeAddedsuccessfully')
}
