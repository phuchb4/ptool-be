const express = require('express');
const cors = require('cors');
const { swaggerUi, swaggerSpec } = require('./swagger/swaggerConfig'); // Đường dẫn tới file trên
const productRoutes = require('./routes/product.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1', productRoutes);

app.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(8000, '0.0.0.0', () => {
    console.log('Server running at http://192.168.88.232:8000');
    console.log('Swagger docs at http://192.168.88.232:8000/api/documentation');
});