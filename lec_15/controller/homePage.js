
const homeModel=require('../models/home')

exports.getHomePage=(req,res,next)=>{
    console.log(req.url,req.method)
    // let AllHomes=[]

    homeModel.fetchAll().then(([homes])=>{
        // console.log(homes)
        
        // AllHomes=homes
        res.render('homeList',{RegisteredHomes:homes,
            pageTitle:'AirHome'
        })

    })
    // console.log(RegisteredHomes)
    // res.sendFile(path.join(rootDir,"views",'home.html'))
}


exports.getHomeDetails = (req, res, next) => {
    const homeID = req.params.homeId;
    console.log("At home details page", homeID);

    homeModel.findHomeById(homeID)
        .then(([rows]) => {
            const home = rows[0]; // first home row
            if (!home) {
                console.log("No home found, redirecting...");
                res.redirect('/');
            } else {
                console.log("Home found:", home);
                res.render('homeDetails', { home });
            }
        })
        .catch(err => {
            console.error("Error fetching home:", err);
            res.status(500).send("Internal Server Error");
        });
};
