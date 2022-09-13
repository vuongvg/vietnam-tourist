const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
   {
      username: { 
         type:String, 
         unique:true,
         required:[true, "Name must be provided"],
         trim:true,
         maxlength:[20, "Nam can not be  more than 20 characters"]
      },
      email: { 
         type:String, 
         unique:true,
         required:[true, "Email must be provided"],
         lowercase: true,
         match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
         ],
      },
      phone: { 
         type:String,
         required: [true, "Contact information must be provided"],
         maxlength: [11, "The max length of phone number is only 11"],
         minLength: [10, "The min length of phone number is only 10"],
         unique: true,
      },
      salt: {
         type: String,
      },
      hash: { 
         type:String,
      },
      avatar: {
         type:String,
      },
      role: {
         type:String,
      }
   }, 
   { collection:'users', timestamps: true, versionKey: false }
);

userSchema.statics.findUserByName = function(username) {
   return this.find({username: username});
}

userSchema.statics.findUserById = function(_id) {
   return this.find({_id: _id});
}

userSchema.statics.findUserByEmail = function(email) {
   return this.find({email: email});
}

userSchema.statics.findUserById = function(_id) {
   return this.find({_id: _id});
}

userSchema.statics.updateUserInfor = function(userId,updateInfor) {
   return this.findByIdAndUpdate(userId, updateInfor, {new:true});
}

const UserModel = mongoose.model('Users',userSchema);

module.exports = UserModel;
