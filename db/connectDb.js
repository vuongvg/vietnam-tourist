// require("dotenv").config();
const { default: mongoose } = require("mongoose");

exports.connectDb = async (uri) => {
   try {
      // await mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
      await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
         console.log('\nConnection successful');
      });
   } catch (error) {
      console.log(`*** Error connect DB`, error);
   } 
}; 
 