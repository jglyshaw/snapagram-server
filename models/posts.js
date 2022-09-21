import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
    username: String,
    creatorID: {type: String, required:  true},
    tags: [String],
    likes: {
        type: Number,
        default: 0,
    },
    comments: { type: [String], default: [] },
    date: {
        type: Date,
        default: Date.now
    }
})

var PostSchema = mongoose.model('post', postSchema);

export default PostSchema;