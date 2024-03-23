import axios from "axios"

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    withXSRFToken: true,
})

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem(('ACCESS_TOKEN'))
    config.headers.Authorization = `Bearer ${token}`
    return config
})

axiosClient.interceptors.response.use((response) => {
    return response
}, (response) => {
    const {data} = response
    console.log(data)
})

export default axiosClient