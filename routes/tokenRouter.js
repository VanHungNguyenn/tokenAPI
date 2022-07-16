const router = require('express').Router()
const tokenCtrl = require('../controllers/tokenCtrl')

router.post('/create', tokenCtrl.create)

module.exports = router
