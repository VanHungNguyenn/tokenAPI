const indexCtrl = require('../controllers/indexCtrl')

const router = require('express').Router()

router.get('/', indexCtrl.renderIndex)

module.exports = router
