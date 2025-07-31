exports.GetAboutPage=(req,res,next)=>{
        res.render('about', {
            pageTitle: 'About Us'
        })
    }
    // console.log(RegisteredHomes)
    // res.sendFile(path.join(rootDir,"views",'home.html'))
