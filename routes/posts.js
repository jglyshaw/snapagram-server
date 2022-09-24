import express from 'express';
import PostModel from '../models/posts.js';

const router = express.Router();



router.get('/allposts', async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.get('/userposts/:creatorID', async (req, res) => {
    try {
        const posts = await PostModel.find({creatorID: req.params.creatorID});
        res.status(200).json(removeCreatorID(posts));
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        post.delete()
        res.status(200).send("deleted successfully");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { title, description, tags, username, creatorID, image } = req.body;
    const newPost = new PostModel({ title, description, tags, username, creatorID, image })
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

router.patch('/like/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostModel.findById(id);
        await PostModel.findByIdAndUpdate(id, { likes: post.likes + 1 }, { new: true });
        res.json("liked successfully");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

router.patch('/comment/:id', async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    try {
        const post = await PostModel.findById(id);
        await PostModel.findByIdAndUpdate(id, { comments: [...post.comments, comment] }, { new: true });
        res.json("liked successfully");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostModel.findById(id);
        res.json(post);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

router.patch('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, tags, image, creatorID } = req.body;
    try {
        const updatedPost = await PostModel.findByIdAndUpdate(id, { title, description, tags, image }, { new: true });
        res.json(updatedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

export default router;