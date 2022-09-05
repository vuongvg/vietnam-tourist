const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
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
      type:String,
      match:[
         /((09|03|07|08|05)+([0-9]{8})\b)/,
         "Please enter valid phone number",
      ]
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

userSchema.method.findByNames = () => {
   console.log("Tìm tài khoản theo tên");
}

userSchema.method.findByEmail = () => {
   console.log("Tìm tài khoản theo email");
}

const User = mongoose.model('users',userSchema);

module.exports = User;
