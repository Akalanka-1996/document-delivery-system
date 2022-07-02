const router = require('express').Router()
const {createRequest, getRequests, getRequestByUser} = require('../controller/requestController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getRequests)
router.route('/my-requests').get(protect, getRequestByUser)
router.route('/create').post(protect, createRequest)

module.exports = router