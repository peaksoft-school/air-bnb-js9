import { axiosInstance } from '../config/axiosInstance'

export const getFavoriterequest = () => {
   return axiosInstance.get(`/api/favorites/getAllFavorites`)
}
