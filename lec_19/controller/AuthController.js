const { check, validationResult } = require('express-validator');
const User = require('../models/UserModel')
const bcrypt = require('bcrypt');
const userdetails = require('../models/UserModel');

exports.GetLoginPage = (req, res, next) => {
    res.render('Auth/Login', {
        pageTitle: 'Login',
        isLoggedIn: false,
        errors: []
    });
}

exports.PostLoginPage = async (req, res, next) => {
    const email = req.body.Email;
    const password = req.body.Password;
    console.log(req.body)
    const user = await userdetails.findOne({ Email: email })
    // Check if user exists
    console.log("User found:", user);

    if (!user) {
        return res.status(422).render('Auth/Login', {
            pageTitle: 'Login',
            isLoggedIn: false,
            errors: [{ msg: 'User doesnt exist' }]
        });
    }

    const isMatch=await bcrypt.compare(password, user.Password);
    if(!isMatch) {
        return res.status(422).render('Auth/Login', {
            pageTitle: 'Login',
            isLoggedIn: false,
            errors: [{ msg: 'Invalid password' }]
        });
    }

    req.session.isLoggedIn = true; 
    // Set session variable for login status
    await req.session.save();
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
                    isLoggedIn: false,
                    errors: [],
                    oldInput: {
                        FirstName: '',
                        LastName: '',
                        Email: '',
                        UserName: '',
                        UserType: ''
                    }
                });
            }




// adjust the path if needed


exports.postSignupPage = [

  // Validation Rules
  check('FirstName')
    .notEmpty().withMessage('First name is required')
    .trim().matches(/^[a-zA-Z]+$/).withMessage('First name must contain only letters'),

  check('LastName')
    .notEmpty().withMessage('Last name is required')
    .trim().matches(/^[a-zA-Z]+$/).withMessage('Last name must contain only letters'),

  check('Email')
    .isEmail().withMessage('Valid email is required')
    .normalizeEmail(),

  check('UserName')
    .notEmpty().withMessage('Username is required')
    .trim().matches(/^[a-zA-Z0-9_]+$/).withMessage('Username must contain only letters, numbers, and underscores'),

  check('Password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    .trim()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/).withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number')
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\-]+$/).withMessage('Password must contain only valid characters'),

  check('ConfirmPassword').trim().custom((value, { req }) => {
    if (value !== req.body.Password) {
      throw new Error('Passwords do not match');
    }
    return true;
  }),

  check('UserType')
    .notEmpty().withMessage('User type is required')
    .trim().isIn(['guest', 'host']).withMessage('User type must be either "guest" or "host"'),

  check('termsAccepted').custom(value => {
    if (!value) {
      throw new Error('You must accept the terms');
    }
    return true;
  }),

  // Handler
  async (req, res) => {
    const { FirstName, LastName, Email, UserName, Password, UserType } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).render('Auth/SignUp', {
        pageTitle: 'Sign Up',
        isLoggedIn: false,
        errors: errors.array().map(err => ({ msg: err.msg })),
        oldInput: {
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          UserName: UserName,
          UserType: UserType
        }
      });
    }

    try {
      const hashedPassword = await bcrypt.hash(Password, 10);
      const newUser = new User({
        FirstName,
        LastName,
        Email,
        UserName,
        Password: hashedPassword,
        UserType
      });

      await newUser.save();
      console.log("User signed up successfully");
      return res.redirect('/login');
    } catch (err) {
      console.error("Error signing up user:", err);
      return res.status(500).render('Auth/SignUp', {
        pageTitle: 'Sign Up',
        isLoggedIn: false,
        errors: [{ msg: 'Internal server error' }],
        oldInput: {
          FirstName,
          LastName,
          Email,
          UserName,
          UserType
        }
      });
    }
  }
];

