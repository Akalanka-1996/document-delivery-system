const Request = require('../model/request.model')
const asyncHandler = require('express-async-handler')

// get all requests

const getRequests = asyncHandler(async (req, res) => {
    const requests = await Request.find()
    res.json(requests)
})

// get requests by user

const getRequestByUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const requests = await Request.find({user: req.user._id})
    res.json(requests)
})

// create a request

const createRequest = asyncHandler(async (req, res) => {


    const {title, description, name, address} = req.body
    
    if(!title || !description || !name) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else{
        const request = new Request({
            user: req.user._id, title, description, name, address

        })

        const createdRequest = await request.save()

        res.status(201).json(createdRequest)
    }
})

module.exports = {createRequest, getRequests, getRequestByUser}