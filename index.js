// require("dotenv").config();
const { app } = require("./app");
const { connectDb } = require("./db/connectDb");

const port = process.env.PORT;

app.listen(port, () => {
   connectDb().then(() => {
      console.log("App is runing at port : " + port);
   }); 
});
