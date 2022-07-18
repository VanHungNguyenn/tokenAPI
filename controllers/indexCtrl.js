const Token = require('../models/tokenModel')

const indexCtrl = {
	renderIndex: async (req, res) => {
		try {
			const { page = 1, limit = 10 } = req.query

			const tokens = await Token.find({})
				.skip(page * limit - limit)
				.limit(limit)

			if (!tokens) {
				return res.status(400).json({ message: 'No tokens' })
			}

			const total = await Token.countDocuments()

			res.render('main/index', {
				tokens,
				page,
				pages: Math.ceil(total / limit),
			})
		} catch (error) {
			return res.status(500).json({ message: error.message })
		}
	},
}

module.exports = indexCtrl
