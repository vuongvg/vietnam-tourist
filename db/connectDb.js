const { default: mongoose } = require("mongoose");

exports.connectDb = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI)
      .then(() => {
         console.log('connection successful');
      });
   } catch (error) {
      console.log(`*** Error connect DB`, error);
   }
};
