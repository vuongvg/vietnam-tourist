// require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { connectDb } = require("./db/connectDb");
const { errorHandleMdw } = require("./middlewares/errorHandleMdw");
const { notFoundMdw } = require("./middlewares/notFound");
const router = require("./router");
const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerDocument = require("./swagger.json");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT;
const app = express();

// "url": "http://localhost:5001/api",
// "url": "https://vietnam-tourist.vercel.app/",

const swaggerSpec = swaggerJSDoc(swaggerDocument);

app.use(cors(false));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static("public"));

app.get("/", (req, res) => { 
   res.send("Sever is running");
});

app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(notFoundMdw);
app.use(errorHandleMdw);

connectDb().then(() =>
   app.listen(port, () => {
      console.log("App is runing at port : " + port);
   })
);
