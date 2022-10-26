// require("dotenv").config();
const { app } = require("./app");
const { connectDb } = require("./db/connectDb");

const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

app.listen(port, () => {
   connectDb(uri).then(() => {
      console.log("App is runing at port : " + port);
   });
});
