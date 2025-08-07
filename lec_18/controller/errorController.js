exports.error404=(req,res,next)=>{
    console.log("404 error")
    res.status(404).render('error/Error404',{pageTitle:'page not found'})
}