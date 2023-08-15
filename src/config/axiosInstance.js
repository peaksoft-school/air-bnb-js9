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

const token =
   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTE4MTY0NTUsImlhdCI6MTY5MTU1NzI1NSwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.Sv8eD1SmRa1fLZ0sXyRydWBhfS-5linJgMSlyct3rtk'
axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const { token } = store.getState().auth
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
