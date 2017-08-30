let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ApparelSchema = new Schema({
    name: {type: String, required: [true, "Please enter product name."]},
    description: {type: String, required: [true, "Please enter product description."]},
    quantity: {type: Number, required: [true, "Please enter product quantity."]},
    limited: {type: Boolean, required: [true, "Please enter product limitability."]},
    price: {type: Number, required: [true, "Please enter product price."]},
    bought: {type: Number, required:[false], default: 0},
    image: {type: String, required: true},
}, {timestamps: true});

mongoose.model('Apparel', ApparelSchema);
