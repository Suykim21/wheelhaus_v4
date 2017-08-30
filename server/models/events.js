var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = new mongoose.Schema({
	title: {type: String, required: [true, "The event title is required"]},
	description: {type: String, required: [true, "The event description is required"]},
	address: {
		street: {
			type: String, required: [true, "Street address required"],
		},
		city: {
			type: String, required: [true, "City required"],
		},
		state: {
			type: String, required: [true, "State required"],
		},
		zipcode: {
			type: Number, required: [true, "Zipcode required"],
		},
	},
	date: {type: Date, required: [true, "The event date is required"]},
	image: {type: String}
}, {timestamps: true})

mongoose.model('Event', EventSchema)
