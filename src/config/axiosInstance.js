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

axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   // const token = store.getState().login.accessToken
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTE4NDM3NjYsImlhdCI6MTY5MTU4NDU2NiwidXNlcm5hbWUiOiJzeWR5a292YTU2MUBnbWFpbC5jb20ifQ.CLS12OCe7Hz9_RwzdiCA0hbKd_uNEL5NkB9ABAtAtd4'
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
