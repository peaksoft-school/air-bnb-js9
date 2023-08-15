import { axiosInstance } from '../config/axiosInstance'

export const getAdminUsersCardsRequest = () => {
   return axiosInstance.get('/api/users')
}
export const getAdminUsersCardsIdRequest = (userId) => {
   return axiosInstance.get(`/api/users/get/${userId}`)
}
