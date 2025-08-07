exports.GetLoginPage = (req, res, next) => {
    res.render('Auth/Login', {
        pageTitle: 'Login',
        isLoggedIn: false
    });
}
exports.PostLoginPage = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    // Here you would typically check the credentials against a database
    // For demonstration, we'll just log them
    console.log("Email:", email);
    console.log("Password:", password);
    // req.isLoggedIn = true; // Simulating a successful login
    // res.cookie('isLoggedIn', 'true', {
    //     maxAge: 60000,
    //     httpOnly: true
    // });
    req.session.isLoggedIn = true; // Set session variable for login status

    // Redirect to home page after login
    res.redirect('/');
}

exports.PostLogoutPage = (req, res, next) => {
    // Clear the cookie to log out the user
    req.session.isLoggedIn = false; // Clear session variable for login status
    req.session.destroy(err => {
        if (err) {
            console.error("Error destroying session:", err);
        }
    });
    // res.clearCookie('isLoggedIn'); // Clear the cookie if you were using cookies
    // Redirect to home page after logout
    res.redirect('/');
}
exports.getSignupPage = (req, res, next) => {
    res.render('Auth/SignUp', {
        pageTitle: 'Sign Up',
        isLoggedIn: false
    });
}