import axios from "axios";

const API_URL = '/api/requests/'

// create a request

const createRequest = async(requestData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + 'create', requestData, config)

    return response.data
}


const requestService = {
    createRequest
}

export default requestService