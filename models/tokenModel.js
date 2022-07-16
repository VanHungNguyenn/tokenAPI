const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema(
	{
		uid: {
			type: String,
			required: true,
		},
		token: {
			type: String,
			required: true,
		},
		live: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Token', tokenSchema)
