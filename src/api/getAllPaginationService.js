import { axiosInstance } from '../config/axiosInstance'

export const getAllPaginationRequest = ({ page, size }) => {
   return axiosInstance.get(
      `/api/announcements/pagination?page=${page}&size=${size}`
   )
}
