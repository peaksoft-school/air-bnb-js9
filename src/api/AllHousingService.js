import { axiosInstance } from '../config/axiosInstance'

export const getAllHousingRequest = ({ status, houseType, rating, price }) => {
   return axiosInstance.get(
      `/api/announcements/announcements-filter?status=${status}&houseType=${houseType}&rating=${rating}&price=${price}`
   )
}
