import axios from 'axios'

const baseURL = process.env.VUE_APP_BACKEND_URL
export default axios.create({
    baseURL
})
