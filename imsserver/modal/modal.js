const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true, "must provide Email Address"],
        trim:true,
        lowerCase:true,
    },
    password :{
        type:String,
        required:[true, "must provide Password"],
        minlength: [6,'password must be at least 6 characters']

    }
})