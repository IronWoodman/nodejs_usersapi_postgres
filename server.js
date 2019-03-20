const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const users = require("./src/users.js");

const app = express();
const jsonParser = bodyParser.json();

const options = {
    definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
        title: 'Users API', // Title (required)
        version: '1.0.0', // Version (required)
    },
    },
    // Path to the API docs
    apis: ['app.js','swagger.js']
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.static(__dirname + "/public"));
app.get("/swagger.json", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.get("/users", users.getAll);
app.post("/users", jsonParser, users.add);
app.put("/users", jsonParser, users.update);
app.delete("/users", jsonParser, users.remove);

app.listen(3000, () => console.log("Server started"));