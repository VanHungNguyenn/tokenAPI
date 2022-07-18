const router = require('express').Router()
const tokenCtrl = require('../controllers/tokenCtrl')

const authKey = require('../middlewares/authKey')

router.get('/infor', tokenCtrl.infor)
router.get('/all', tokenCtrl.getAllTokens)
router.get('/:token', tokenCtrl.getTokenId)
router.post('/create', tokenCtrl.create)
router.put('/update', tokenCtrl.updateToken)
router.delete('/delete', authKey, tokenCtrl.deleteToken)

module.exports = router
