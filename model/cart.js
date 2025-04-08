const mongoose = require('mongoose');

const cartShema = new mongoose.Schema({
    products:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Product"
        }
    ],
    total:{
        type: Number
    }
})

const Cart = mongoose.model('Cart', cartShema);
module.exports = {Cart}