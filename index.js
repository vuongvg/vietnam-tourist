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
const url = require("url");

const port = process.env.PORT;
const app = express();

app.use(cors(false));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
// "url": "http://localhost:5001/api",
// "url": "https://vietnam-tourist.vercel.app/",
const swaggerSpec = swaggerJSDoc({
   swaggerDefinition: {
      openapi: "3.0.0",
      info: {
         title: "Express API for VietNamTour",
         version: "1.0.0",
      },
      servers: [
         {
            url: "https://vietnam-tourist.vercel.app/api",
            description: "Development server",
         },
      ],
      components: {
         securitySchemes: {
            bearerAuth: {
               type: "http",
               scheme: "bearer",
               bearerFormat: "JWT",
               description:
                  "Example:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzFlYWVmMWY5YjAzNjRkOTQ0YTliZWIiLCJpYXQiOjE2NjU5MzE5OTYsImV4cCI6MTc1MjMzMTk5Nn0.jNPTrVr6l-mB4ScAZcpfhbsmHRdRaXaSTYjSh5DCGiM",
               value: "fsdfds",
            },
         },
      },
      security: [{ bearerAuth: [] }],
   },
   // "apis": [`${__dirname}/router/*.js`]
   apis: [path.join(__dirname, "./router", "*.js")],
});
// const options = { customCssUrl: `${__dirname}/swagger-ui.css` };
// console.log(`  ~ __dirname`, __dirname/swagger-ui.css)
console.log(`  ~ __dirname`, path.join(__dirname, "./public", "swagger-ui.css"));
const options = { customCssUrl: `swagger-ui.css` };
// const options = { customCssUrl: path.join(__dirname,'./public','swagger-ui.css') };

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
