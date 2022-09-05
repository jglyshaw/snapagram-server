import express from 'express';
import CartModel from '../models/cart.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const carts = await CartModel.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cart = await CartModel.findById(req.params.id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const cart = await CartModel.findByIdAndDelete(req.params.id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { totalPrice, items, pizza } = req.body;
    const newCart = new CartModel({ totalPrice, items })
    try {
        await newCart.save();
        res.status(201).json(newCart);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

export default router;