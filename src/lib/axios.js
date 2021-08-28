import Axios from 'axios'
import { getToken } from '../api/supabase'

const axios = Axios.create({
  baseURL: window.CORE_URL
})

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`
    return config
  },
  (error) => Promise.reject(error)
)
export default axios
