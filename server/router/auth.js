const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
// const cookieParser = require('cookie-Parser')
const products = require('../data/Products')
const doctors = require('../data/DoctorDetails')

// router.use(cookieParser());

// we require database in our router
require('../db/connec');

// we got this from userSchema 
const User = require('../model/userSchema');
const Contact = require('../model/contactSchema');
const Feedback = require('../model/feedbackForm');

const middleware = (res, req, next) =>{
    console.log("Hello middleware");
    res.send("Hello");
    next();
}

router.get('/connection', function (req, res) {
    res.send("Connection Page");
});

/* //////////////////////////////////////////     PRODUCTS      //////////////////////////////////////////  */
router.get('/products', (req, res) => {
    res.json(products);
})

router.get('/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
})






/* //////////////////////////////////////////     DOCTORS      //////////////////////////////////////////  */

router.get('/doctors', (req, res) => {
    res.json(doctors)
})

router.get('/doctors/:id', (req, res)=>{
    const doctor = doctors.find((d) => d._id === req.params.id);
    res.json(doctor);
})


/* //////////////////////////////////////////     FEEDBACKFORM      //////////////////////////////////////////  */


router.post('/feedback', async(req, res) => {
    const {name, email, subject, message} = req.body;
    if(!name || !email || !subject || !message){
        return res.status(422).json({error: "Please fill all the details"});
    } 

    try{
        const feedback = new Feedback({name, email, subject, message});
        await feedback.save();
        res.status(201).json({message: "Feedback given successfully"});
    } catch(err){
        console.log(err);
    }
})



/*  //////////////////////////////////////////     PAGES      //////////////////////////////////////////  */

// REGISTRATION PAGE
router.post('/register', async (req, res) => {
    const {name, email, phone, address, password, cpassword} = req.body;
    if(!name || !email || !phone || !address || !password || !cpassword){
        return res.status(422).json({error: "Please fill all the details"});
    }

    try {
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(422).json({error: "This user already exists"});
        } else if(password != cpassword){
            return res.status(422).json({error: "Please write the same passwords"});
        } else{
            const user = new User({name, email, phone, address, password, cpassword});
            await user.save();
            res.status(201).json({message: "User Registered Successfully"});
        }
    } catch (error) {
        console.log(error);
    }
})

// SIGNIN PAGE

router.post('/signin', async (req, res) => {
    try {
        let token;
        const {email, password} = req.body;
        if(!email || !password){
            return  res.status(400).json({error: "Please fill all the details"});
        }

        const userLogin = await User.findOne({email: email});
        
        if (userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            
            //    cookies
            token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25899200000), 
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).json({error: "Invalid credentials"});
            } else{
                res.json({message: "User Sign in Successfully"}); 
            }
        } else{
            res.status(400).json({error: "Invalid credentials"});
        }

    } catch (err) {
        console.log(err);
    }
});



// CONTACT PAGE
router.post('/contact', async(req, res) => {
    const {name, email, phone, message} = req.body;
    if(!name || !email || !phone || !message){
        return res.status(422).json({error: "Please fill all the details"});
    }

    try {
        const contact = new Contact({name, email, phone, message});
        await contact.save();
        res.status(201).json({message: "Message sent successfully"});
    } catch (error) {
        console.log(error);
    }
})




// OUR PROFILE
router.get('/profile', authenticate ,(req, res) => {
    // res.send("I am profile page");
    req.send(req.rootUser);

})

module.exports = router;