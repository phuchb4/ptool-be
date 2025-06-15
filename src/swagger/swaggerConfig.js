const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'My Express API',
        version: '1.0.0',
        description: 'Tài liệu API sử dụng Swagger trong Express.js',
        },
        servers: [
        {
            url: 'http://localhost:3000',
        },
        ],
    },
    apis: [path.join(__dirname, '../routes/*.js')],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec,
};
