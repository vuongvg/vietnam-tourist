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
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT;
const app = express();

const swaggerSpec = swaggerJSDoc({
   swaggerDefinition: {
      openapi: "3.0.0",
      info: {
         title: "Express API for VietNamTour",
         version: "1.0.0",
      },
      servers: [
         {
            // url: process.env.URL,
            url: "http://localhost:5001/api",
            description: "Development server",
         },
      ],
      basePath: "/",
      components: {
         securitySchemes: {
            bearerAuth: {
               type: "http",
               scheme: "bearer",
               bearerFormat: "JWT",
            },
         },
      },
      security: [
         {
            bearerAuth: ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzFlYWVmMWY5YjAzNjRkOTQ0YTliZWIiLCJpYXQiOjE2NjUzMzMwNjcsImV4cCI6MTc1MTczMzA2N30.yw3Xbzj2HmatVk6zmxcP1rhOzIE5CIuMvHC0EbV5eVw'],
         },
      ],
   },
   apis: ["./router/*.js"],
});

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

connectDb();

app.listen(port, () => {
   console.log("App is runing at port " + port);
});
