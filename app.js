const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { errorHandleMdw } = require("./errors/errorHandleMdw");
const { notFoundMdw } = require("./middlewares/notFound");
const router = require("./router");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const { swaggerDocument } = require("./docs/swaggerDocument");
const Document = require("./swagger.json");

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
// resend style css
app.get("/docs/swagger-ui-custom.css", (req, res) => {
   res.sendFile(`${__dirname}/public/swagger-ui-custom.css`);
});
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(Document), options));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument,options));

app.use(notFoundMdw);
app.use(errorHandleMdw);

module.exports = { app };
