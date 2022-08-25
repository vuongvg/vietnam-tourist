const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
   username: { type:String, require:true},
   email: { type:String, require:true },
   phoneNumber: { type:Int16Array},
   hashedPassword: { type:String,require:true },
   avatar: {type:String},
   role: {type:Int8Array, require:true}
});

const User=mongoose.model('users',userSchema)

module.exports=User