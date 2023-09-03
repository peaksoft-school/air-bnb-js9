import { axiosInstance } from '../config/axiosInstance'

export const getAllHousingRequest = ({ status, houseType, rating, price }) => {
   console.log(rating, 'rating')
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
