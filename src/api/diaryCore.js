import axios from 'axios'
import { getToken } from './supabase'

const diaryCore = axios.create({
  baseURL: window.CORE_URL
})

diaryCore.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`
    return config
  },
  (error) => Promise.reject(error)
)
export default diaryCore
