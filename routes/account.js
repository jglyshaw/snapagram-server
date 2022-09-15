import express from 'express';
import AccountModel from '../models/account.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const accounts = await AccountModel.find();
        res
        res.status(200).json(accounts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const account = await AccountModel.findById(req.params.id);
        res.status(200).json(account);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { username, password, email } = req.body;
    const newAccount = new AccountModel({ username, password, email})

    try {
        await newAccount.save();
        res.status(201).json(newAccount);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

export default router;