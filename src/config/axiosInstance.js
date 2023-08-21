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
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTI1OTgzNjAsImlhdCI6MTY5MjMzOTE2MCwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.wUmNBR7pQyd_0A1NNzXlSXwztC9KUS3IeASpSDc6AI4'
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
