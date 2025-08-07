exports.GetContactPage=(req,res,next)=>{
        res.render('contactUs', {
            pageTitle: 'Contact Us'
        })
    }