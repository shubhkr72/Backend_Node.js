exports.GetContactPage=(req,res,next)=>{
        res.render('contact/contactUs', {
            pageTitle: 'Contact Us'
        })
    }