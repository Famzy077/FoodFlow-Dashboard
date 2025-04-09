const mongooase = require('mongoose');
const { Schema, model } = mongooase;
const orderSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    orderItems: [
        {
            id: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});
module.exports = model('Order', orderSchema);
