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
   const updatedConfig = { ...config }
   // const { token } = store.getState().auth
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQxNTI2NzgsImlhdCI6MTY5Mzg5MzQ3OCwidXNlcm5hbWUiOiJhbGlzdGVyQGdtYWlsLmNvbSJ9.CrnQ5H9LZ8ek3O07-4dthSP7O5lAn65lw7L5JxVD8fw '
   if (token) {
      updatedConfig.headers.Authorization = ` Bearer ${token}`
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
