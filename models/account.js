import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
    username: { type: String, required:  true },
    password: { type: String, required:  true },
    email: { type: String, required:  true }
})

var AccountSchema = mongoose.model('account', accountSchema);

export default AccountSchema;