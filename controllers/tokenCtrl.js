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
			res.status(200).json({ message: 'Token created', token: newToken })
		} catch (error) {
			return res.status(500).json({ message: error.message })
		}
	},
	infor: async (req, res) => {
		try {
			const token = await Token.findOneAndUpdate(
				{
					live: true,
				},
				{
					$set: { live: false },
				}
			)

			if (!token) {
				return res.status(400).json({ message: 'No tokennn' })
			}

			res.status(200).json({ message: 'Token infor', token })
		} catch (error) {
			return res.status(500).json({ message: error.message })
		}
	},
	updateToken: async (req, res) => {
		try {
			const { token, live } = req.body

			if (!token || !live) {
				return res.status(400).json({ message: 'No token' })
			}

			const newToken = await Token.findOneAndUpdate({ token }, { live })

			if (!newToken) {
				return res.status(400).json({ message: 'No token' })
			}

			res.status(200).json({ message: 'Token updated' })
		} catch (error) {
			return res.status(500).json({ message: error.message })
		}
	},
	deleteToken: async (req, res) => {
		try {
			const { token } = req.body

			if (!token) {
				return res.status(400).json({ message: 'No token' })
			}

			const newToken = await Token.findOneAndDelete({ token })

			if (!newToken) {
				return res.status(400).json({ message: 'No token' })
			}

			res.status(200).json({ message: 'Token deleted' })
		} catch (error) {
			return res.status(500).json({ message: error.message })
		}
	},
	getAllTokens: async (req, res) => {
		try {
			const { page = 1, limit = 10 } = req.query

			const tokens = await Token.find({})
				.skip(page * limit - limit)
				.limit(limit)

			if (!tokens) {
				return res.status(400).json({ message: 'No tokens' })
			}

			res.status(200).json({ message: 'Tokens', tokens })
		} catch (error) {
			return res.status(500).json({ message: error.message })
		}
	},
	getTokenId: async (req, res) => {
		try {
			const { token } = req.params

			if (!token) {
				return res.status(400).json({ message: 'No token' })
			}

			const newToken = await Token.findOne({ token })

			if (!newToken) {
				return res.status(400).json({ message: 'No token' })
			}

			res.status(200).json({
				message: 'Get token success',
				token: newToken,
			})
		} catch (error) {
			return res.status(500).json({ message: error.message })
		}
	},
}

module.exports = tokenCtrl
