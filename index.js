// require("dotenv").config();
const { app } = require("./app");
const { connectDb } = require("./db/connectDb");

const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

// "test": "jest --watchAll",
// "test": "echo \"Error: no test specified\" && exit 1",

connectDb()
app.listen(port, () => {
   console.log("App is runing at port : " + port);
   // connectDb(uri).then(() => {
   //    console.log("App is runing at port : " + port);
   // });
});
