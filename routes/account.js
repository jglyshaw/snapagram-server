import express from 'express';
import bcrypt from "bcryptjs";

import AccountModel from '../models/account.js';

const router = express.Router();


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const oldUser = await AccountModel.findOne({ username });
        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
        res.status(200).json({  username: oldUser.username, email: oldUser.email, _id: oldUser._id, image: oldUser.image});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// router.post('/edit', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const oldUser = await AccountModel.findOne({ username });
//         if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
//         res.status(200).json({  username: oldUser.username, email: oldUser.email, _id: oldUser._id});
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// });

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const oldUser = await AccountModel.findOne({ username });
        const oldUserEmail = await AccountModel.findOne({ email });
        if (oldUser || oldUserEmail) return res.status(400).json({ message: "User already exists" });
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await AccountModel.create({ email, password: hashedPassword, username: username });
        res.status(200).json({ username: result.username, email: result.email, _id: result._id, image: result.image });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;