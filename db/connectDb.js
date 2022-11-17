// require("dotenv").config();
const { default: mongoose } = require("mongoose"); 

exports.connectDb = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
         console.log('Connection successful');
      });
   } catch (error) {
      console.log(`*** Error connect DB`, error);
   } 
}; 
   