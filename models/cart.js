import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    totalPrice: Number,
    items: [String],
    pizza: Number
})

var CartSchema = mongoose.model('helloWorld', cartSchema);

export default CartSchema;