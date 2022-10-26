// require("dotenv").config();
// const { app } = require("./app");
const { connectDb } = require("./db/connectDb");

const port = process.env.PORT;
const uri = process.env.MONGODB_URI;
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { errorHandleMdw } = require("./middlewares/errorHandleMdw");
const { notFoundMdw } = require("./middlewares/notFound");
const router = require("./router");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(cors(false));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const options = { customCssUrl: `swagger-ui-custom.css` };

app.get("/", (req, res) => {
   res.send("Sever is running ");
});
app.use("/api", router);
app.get("/docs/swagger-ui-custom.css", (req, res) => {
   res.sendFile(`${__dirname}/public/swagger-ui-custom.css`);
});
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerDocument), options));

app.use(notFoundMdw);
app.use(errorHandleMdw);

app.listen(port, () => {
   connectDb(uri).then(() => {
      console.log("App is runing at port : " + port);
   });
});
