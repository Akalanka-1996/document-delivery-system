const router = require('express').Router()
const {createRequest, getRequests} = require('../controller/requestController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getRequests)
router.route('/create').post(protect, createRequest)

module.exports = router