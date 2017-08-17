let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ApparelSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true},
    limited: {type: Boolean, required: true},
    price: {type: Number, required: true},
    bought: {type: Number},
    image: {type: String, required: true},

}, {timestamps: true});

mongoose.model('Apparel', ApparelSchema);
