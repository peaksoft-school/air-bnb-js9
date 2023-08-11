import { axiosInstance } from '../config/axiosInstance'

export const getGlobalSearchRequest = (params) => {
   return axiosInstance.get('/api/vendor/global-search', { params })
}
