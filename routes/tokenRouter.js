const router = require('express').Router()
const tokenCtrl = require('../controllers/tokenCtrl')

router.post('/create', tokenCtrl.create)
router.get('/infor', tokenCtrl.infor)
router.put('/update', tokenCtrl.updateToken)
router.delete('/delete', tokenCtrl.deleteToken)
router.get('/all', tokenCtrl.getAllTokens)

module.exports = router
