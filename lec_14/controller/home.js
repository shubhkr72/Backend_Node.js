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
    const h1=new homeModel(req.body.houseName,req.body.ownerName,req.body.price,req.body.location,req.body.rating,req.body.photourl )
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