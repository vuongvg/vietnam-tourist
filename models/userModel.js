const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
   userid: {
      type:String,
      require:true,
      unique:true
   },
   username: { 
      type:String, 
      require:true,
      trim:true,
   },
   email: { 
      type:String, 
      require:true,
      lowercase: true,
      unique: true,
      match: [
         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
         "Please fill a valid email address",
      ],
   },
   phone: { 
      type:Number,
      min:9,
      max:15,
   },
   hash: { 
      type:String,
      require:true, 
   },
   avatar: {
      type:String,
   },
   role: {
      type:Number, 
      require:true,
   }
});

const User = mongoose.model('users',userSchema);

module.exports = User;
