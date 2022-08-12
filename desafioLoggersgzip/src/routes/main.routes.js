const { Router } = require('express')
const controller = require('../controllers/main.controller.js')
const authMiddleware = require('../middlewares/auth.js')
const compression = require('compression')

const router = new Router()

router.get('/', authMiddleware, controller.index)
router.get('/info', controller.info)
router.get('/info-with-compression', compression(), controller.info)
router.get('/api/randoms', controller.randoms)

module.exports = router