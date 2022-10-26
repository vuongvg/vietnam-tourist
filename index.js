const { app } = require("./app");
const { connectDb } = require("./db/connectDb");

const port = process.env.PORT ||5001;

connectDb();
app.listen(port, () => {
   console.log("App is runing at port : " + port);
});
