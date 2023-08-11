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
<<<<<<< HEAD
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTE5OTU1NzcsImlhdCI6MTY5MTczNjM3NywidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.rrpPVgTGrtY6ZGpQoLIPhCfsc60oQLgr1oBgjVFm4eY'
=======
   // const token = store.getState().login.accessToken
>>>>>>> 8b126ec6b3765746a1d4faca70b5665e40beb34c
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
