import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    likes: {
        type: Number,
        default: 0,
    }
})

var PostSchema = mongoose.model('post', postSchema);

export default PostSchema;