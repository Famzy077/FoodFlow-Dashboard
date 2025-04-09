const express = require('express');
const router = express.Router();
const Order = require('../models/orderSchema');
// Get all orders
router.get('/order', async (req, res) => {
    try {
        const order = await Order.find();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Get a single order
router.get('/order/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Create a new order
router.post('/order', async (req, res) => {
    try {
        const order = new Order(req.body);
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
);
// Update an order
router.patch('/order/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const order = await Order.findByIdAndUpdate
        (id
        , req.body
        , { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Delete an order
router.delete('/order/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
module.exports = router;