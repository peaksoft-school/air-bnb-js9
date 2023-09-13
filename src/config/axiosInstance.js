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
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQ3NjYyOTEsImlhdCI6MTY5NDUwNzA5MSwidXNlcm5hbWUiOiJhbGlzdGVyQGdtYWlsLmNvbSJ9.Duu10-yfW_hZK74_REABhib5NDheOPP67HGy4MRTXd8'
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
