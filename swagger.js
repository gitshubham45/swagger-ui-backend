const swaggerAutogen = require('swagger-autogen');

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
    host: 'swagger-ui-backend-nyfr.vercel.app',
    schemes: ['https']
};

const outputFile = './swagger-output.json';
const routes = ["./server.js"];


swaggerAutogen(outputFile, routes, doc);