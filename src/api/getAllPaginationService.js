import { axiosInstance } from '../config/axiosInstance'

export const getPaginationRequest = (page) => {
   return axiosInstance.get(
      `/api/announcements/pagination?page=${page}&size=16`
   )
}

export const getAllPaginationRequest = () => {
   return axiosInstance.get('/api/announcements/pagination?page=1&size=9999')
}
