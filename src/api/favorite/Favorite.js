import { axiosInstance } from '../../config/axiosInstance'

export const getFavorite = () => {
   return axiosInstance.get('/api/favorites/getAllFavorites')
}
