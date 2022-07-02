const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
    ,
    address:{
        type:String,
        required:true

    },
    status:{
        type:String,
        enum:['pending','approved','rejected','posted'],
        default:'pending'
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
},{
    timestamps:true
})

const Request = mongoose.model("Request", requestSchema)

module.exports = Request;
