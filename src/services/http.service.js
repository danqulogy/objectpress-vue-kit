import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.objectpress.co'
})
export default instance