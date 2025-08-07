
const homeModel = require('../models/HomeModel')

exports.GetHomePage = (req, res, next) => {
    console.log(req.url, req.method)
    let homes=[]
    homeModel.find().sort({ Rate: 1 })
        .then(fetchedHomes => {
            homes = fetchedHomes;
            // console.log("Fetched homes:", homes);
            // Render the home page with the fetched homes
            res.render('HomePage', {
                RegisteredHomes: homes,
                pageTitle: 'AirHome',
                isLoggedIn: req.isLoggedIn ,
            });
        })
        .catch(err => {
            console.error("Error fetching homes:", err);
        });


    // console.log(homes)

    // AllHomes=homes

}
// console.log(RegisteredHomes)
// res.sendFile(path.join(rootDir,"views",'home.html'))



exports.GetHomeDetails = (req, res, next) => {
    const homeID = req.params.homeId;
    console.log("At home details page", homeID);
    homeModel.findById(homeID)
        .then(home => {
            if (!home) {
                return res.status(404).render('error404', { pageTitle: 'Home Not Found' });
            }
            res.render('HomeDetails', {
                home: home,
                pageTitle: home.HouseName
            });
        })
        .catch(err => {
            console.error("Error fetching home details:", err);
            res.status(500).render('error404', { pageTitle: 'Error Fetching Home' });
        });
}