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




const app = express();
dotenv.config();

connectDB();

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.use(express.json());



app.get('/', async (req, res) => {
    res.send("Hello, world!");
})

app.use("/api/user", userRoutes);
app.use("/api/publicapi", dataRoutes);
app.use("/api/secret", secretRoutes);


const port = process.env.PORT || 3000;
app.listen(port, console.log("server listening on port", port));

