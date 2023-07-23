const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        // minLength: 3,
        // maxLength: 45
    },
    email: {
        type: String,
        required: true,
        minLength: 8
    },
    phone: {
        type: Number,
        required: true
        // maxLength: 10,
        // minLength: 10
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]

})

// HASHING THE PASSWORDS
userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

// We are generating token

userSchema.methods.generateAuthToken = async function  () {
    try {
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
        
    } catch (error) {
        console.log(error);
    }
};

const User = mongoose.model("USERINFO", userSchema);
module.exports = User;
