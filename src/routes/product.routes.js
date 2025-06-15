// routes/product.routes.js
const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Lấy tất cả sản phẩm
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm
 */
router.get('/', (req, res) => {
    res.json(['Sản phẩm 1', 'Sản phẩm 2']);
});

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Lấy sản phẩm theo ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID sản phẩm
 *     responses:
 *       200:
 *         description: Thông tin sản phẩm
 */
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ id, name: `Sản phẩm ${id}` });
});

module.exports = router;
