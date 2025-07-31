
const homeModel=require('../models/home')

exports.getHomePage=(req,res,next)=>{
    console.log(req.url,req.method)
    // let AllHomes=[]

    homeModel.fetchAll(homes=>{
        // AllHomes=homes
        res.render('homeList',{RegisteredHomes:homes,
            pageTitle:'AirHome'
        })

    })
    // console.log(RegisteredHomes)
    // res.sendFile(path.join(rootDir,"views",'home.html'))
}
exports.getHomeDetails=(req,res,next)=>{
    const homeID=req.params.homeid;
    console.log("at home details page",homeID)
    homeModel.findHomeById(homeID,home=>{
        if(!home){
            res.redirect('/') 
        }else{
            console.log('home found',home)
            res.render('homeDetails',{home})
        }
    })

}