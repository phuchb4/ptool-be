// routes/product.routes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'Joeyvlr2004@';

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Login
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login Successful!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       401:
 *         description: Login Failed!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'phuchb@gmail.com' && password === '123456') {
        const payload = { email };

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

        return res.status(200).json({
            message: 'Login Successful!',
            token,
        });
    } else {
        res.status(401).json({ message: 'Login failed!' });
    }
});

module.exports = router;