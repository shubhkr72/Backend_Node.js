const homeModel=require('../models/home')


exports.getAddHome=(req,res,next)=>{
    // res.send()
    // res.sendFile(path.join(rootDir,"views",'addHome.html'))
    res.render('addHome')}

// const RegisteredHomes=[];

exports.postHome=(req,res,next)=>{
    console.log(req.body)


    // res.send()
    //caan destructure
    const h1=new homeModel(req.body.HouseName,req.body.OwnerName,req.body.Rate,req.body.Location,req.body.Rating,req.body.PhotoUrl,req.body.Description)
    // console.log(h1)
    // RegisteredHomes.push(req.body)
    // res.sendFile(path.join(rootDir,"views",'homeAdded.html'))
    h1.save()
    res.render('homeAddedsuccessfully')
}
// exports.RegisteredHomes=RegisteredHomes



//  this.HouseName=HouseName
//         this.OwnerName=OwnerName
//         this.rate=rate
//         this.location=location
//         this.rating=rating
//         this.photourl=[photourl]