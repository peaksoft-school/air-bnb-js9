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
<<<<<<< HEAD
const token =
   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQzNjMyMTIsImlhdCI6MTY5NDEwNDAxMiwidXNlcm5hbWUiOiJhbGlzdGVyQGdtYWlsLmNvbSJ9.s1iC5xnLxmXhuLuGZkP30dLD0EeVCSqkVFt27-LKGHk'
=======

>>>>>>> 7cfca575a7f8407450377e8232f40de04465010a
axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const token = store.getState().auth
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
