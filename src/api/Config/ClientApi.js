import axios from "axios"


const PublicClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export default PublicClient