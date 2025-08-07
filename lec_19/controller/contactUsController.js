exports.GetContactPage=(req,res,next)=>{
        res.render('contact/contactUs', {
            pageTitle: 'Contact Us'
        })
    }
// exports.PostContactPage=(req,res,next)=>{
//     const { name, email, message } = req.body;
//     // Here you would typically handle the form submission, e.g., save to database or send an email
//     console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
//     // Redirect or render a success page
//     res.redirect('contact/ThanksContactUs');
// }
exports.GetThanksContactUsPage=(req,res,next)=>{
    res.render('contact/ThanksContactUs', {
        pageTitle: 'Thank You for Contacting Us'
    });
}

const mongoose=require('mongoose');
const contactDetails=require('../models/ContactForm');

exports.PostContactPage=(req,res,next)=>{
    const { Name, Email, Phone, Message } = req.body;
    
    const contactEntry = new contactDetails({
        Name: Name,
        Email: Email,
        Phone: Phone,
        Message: Message
    });

    contactEntry.save()
        .then(result => {
            console.log("Contact form submitted successfully", result);
            res.redirect('/contact/ThanksContactUs');
        })
        .catch(err => {
            console.error("Error submitting contact form:", err);
            res.status(500).send("Internal Server Error");
        });
}
