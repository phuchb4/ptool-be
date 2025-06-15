// app.js hoặc server.js
const express = require('express');
const app = express();
const port = 3000;

const { swaggerUi, swaggerSpec } = require('./swagger/swaggerConfig');

app.use(express.json());

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes của bạn
const productRoutes = require('./routes/product.routes');
app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Server chạy ở http://localhost:${port}`);
    console.log(`Swagger docs: http://localhost:${port}/api-docs`);
});
