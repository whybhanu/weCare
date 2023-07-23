const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: false
}).then(() => {
    console.log("Connection Successfully");
}).catch((err) => {
    console.log("Not connected");
    console.log(err);
})