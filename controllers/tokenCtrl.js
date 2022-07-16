const Token = require('../models/tokenModel')

const tokenCtrl = {
	create: async (req, res) => {
		try {
			const { uid, token } = req.body

			if (!uid || !token) {
				return res.status(400).json({ message: 'No uid or token' })
			}

			const newToken = new Token({ uid, token })
			await newToken.save()
			res.status(200).json({ message: 'Token created' })
		} catch (error) {
			return res.status(500).json({ message: error.message })
		}
	},
}

module.exports = tokenCtrl
