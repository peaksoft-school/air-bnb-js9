import { axiosInstance } from '../../config/axiosInstance'

export const getFavorite = () => {
   return axiosInstance.get('/api/favorites/getAllFavorites')
}

export const postFavorite = (id) => {
   console.log(id, 'id service')
   return axiosInstance.post(`/api/favorites/${id}`)
}
