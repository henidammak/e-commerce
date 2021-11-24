const mongoose = require ('mongoose')

const userSchema =mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    phone:Number
})
module.exports=mongoose.model('Admin',userSchema)