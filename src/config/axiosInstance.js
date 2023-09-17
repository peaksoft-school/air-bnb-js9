import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const headers = {
   'Content-Type': 'application/json',
}
const axiosInstance = axios.create({ baseURL: BASE_URL, headers })

let store

export const injectStore = (_store) => {
   store = _store
}

const logoutAction = () => {}
axiosInstance.interceptors.request.use((config) => {
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTUxMDA2MDAsImlhdCI6MTY5NDg0MTQwMCwidXNlcm5hbWUiOiJhbGlzdGVyQGdtYWlsLmNvbSJ9.MmMke36qVJ6TO1jebnhodi4Arjhnb-77L8PQp4Y1YdI'
   const updatedConfig = { ...config }
   // const token = store.getState().auth
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
         store.dispatch(logoutAction())
      }
      return Promise.reject(error)
   }
)
export { axiosInstance }
