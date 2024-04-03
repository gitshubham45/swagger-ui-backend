const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");
const dataRoutes = require("./routes/dataRoutes");
const secretRoutes = require("./routes/secretRoutes");
const path = require('path');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const swaggerAutogen = require('swagger-autogen')();
const fs = require('fs');




const app = express();
dotenv.config();

connectDB();

app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const options = { customCssUrl: '/public/swagger-ui.css', customSiteTitle: "The Words That I Know API - Swagger" };

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,options));



app.use(express.json());



app.get('/', async (req, res) => {
    res.send("Hello, world!");
})

app.use("/api/user", userRoutes);
app.use("/api/publicapi", dataRoutes);
app.use("/api/secret", secretRoutes);


const port = process.env.PORT || 3000;
app.listen(port, console.log("server listening on port", port));

