const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
	name: {type: String, required: true},
	images: {type: Array, required: true},
	price: {type: Number, required: true},
	description: {type: Array}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
