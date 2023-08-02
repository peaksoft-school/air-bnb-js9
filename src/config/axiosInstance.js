import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const headers = {
   'Content-Type': 'multipart/form-data',
}
const axiosInstance = axios.create({ baseURL: BASE_URL, headers })

let store

export const injectStore = (_store) => {
   store = _store
}
const logoutAction = () => {}

const token = ''
axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   // const token = store.getState().login.accessToken
   if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`
   }
   return updatedConfig
})

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response.status === 401) {
         console.log('401 ERROR')
         store.dispatch(logoutAction())
      }
      return Promise.reject(error)
   }
)
export { axiosInstance }
