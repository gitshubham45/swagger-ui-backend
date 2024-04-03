const swaggerAutogen = require('swagger-autogen');
// const userRoutes = require('./routes/userRoutes');

const doc = {
    info: {
        title: 'My API',
        description: 'Description'
    },
    securityDefinitions: {
        
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'bearer',
            in: 'header',
        },
    },
    security: [
        {
            "bearerAuth": []
        }
    ],
    host: 'https://swagger-ui-backend-nyfr.vercel.app/'
};

const outputFile = './swagger-output.json';
const routes = ["./server.js"];


swaggerAutogen(outputFile, routes, doc);