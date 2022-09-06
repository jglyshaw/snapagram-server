import express from 'express';
import PostModel from '../models/posts.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await PostModel.findByIdAndDelete(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { title, description, tags, likes } = req.body;
    const newPost = new PostModel({ title, description, tags, likes })
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

export default router;