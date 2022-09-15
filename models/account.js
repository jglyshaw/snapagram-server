import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String
})

var AccountSchema = mongoose.model('account', accountSchema);

export default AccountSchema;