const router = require('express').Router()
const {createRequest, getRequests, getRequestByUser, updateRequest, deleteRequest} = require('../controller/requestController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getRequests)
router.route('/create').post(protect, createRequest)
router.route('/:id').put(protect, updateRequest).delete(protect, deleteRequest)

module.exports = router