const Request = require('../model/request.model')
const asyncHandler = require('express-async-handler')


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

module.exports = {createRequest}