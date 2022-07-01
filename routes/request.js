const router = require('express').Router()
const {createRequest} = require('../controller/requestController')

const {protect} = require('../middleware/authMiddleware')

router.route('/create').post(protect, createRequest)

module.exports = router