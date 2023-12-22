const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Products = new Schema({
    productId:{
        type:String,
        required:true
    },
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceId:{
        type : String,
    },
})


const Product = mongoose.model('Product', Products);

module.exports = Product;