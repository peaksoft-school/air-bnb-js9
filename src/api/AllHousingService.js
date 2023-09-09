import { axiosInstance } from '../config/axiosInstance'

export const getAllHousingRequest = ({ status, houseType, rating, price }) => {
   if (
      status === 'all' ||
      houseType === 'all' ||
      rating === 'all' ||
      price === 'all'
   ) {
      return axiosInstance.get(`/api/announcements/announcements-filter`)
   }
   return axiosInstance.get(
      `/api/announcements/announcements-filter?status=${status}&houseType=${houseType}&rating=${rating}&price=${price}`
   )
}

export const deleteAllHousingRequest = (id) => {
   return axiosInstance.delete(`/api/announcements/${id}`)
}

export const updateAllHousingRequest = ({ id, data }) => {
   return axiosInstance.put(`/api/announcements/${id}`, data)
}
