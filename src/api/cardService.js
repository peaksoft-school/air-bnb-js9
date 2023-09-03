import { axiosInstance } from '../config/axiosInstance'

export const getAllCardsRequest = ({ region, houseType, rating, price }) => {
   if (
      region === 'All' ||
      houseType === 'All' ||
      rating === 'All' ||
      price === 'All'
   ) {
      return axiosInstance.get('/api/vendor/announcements-filter')
   }
   return axiosInstance.get(
      `/api/vendor/announcements-filter?region=${region}&houseType=${houseType}&rating=${rating}&price=${price}`
   )
}
