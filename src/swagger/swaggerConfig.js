const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const swaggerSpec = swaggerJsdoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://192.168.88.232:8000',
            },
        ],
    },
    apis: [path.join(__dirname, '../routes/*.js')],
})

module.exports = {
    swaggerUi,
    swaggerSpec,
};
