const { default: mongoose } = require("mongoose");

exports.connectDb = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("*** DB connected");
   } catch (error) {
      console.log(`*** Error connect DB`, error);
   }
};
