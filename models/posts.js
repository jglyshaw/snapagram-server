import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    likes: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

var PostSchema = mongoose.model('post', postSchema);

export default PostSchema;