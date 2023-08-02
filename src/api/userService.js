import { axiosInstance } from '../config/axiosInstance'

export const getAllUsers = () => {
   return axiosInstance.get('/api/users/getAllUsers')
}

export const deleteUser = ({ id }) => {
   return axiosInstance.delete(`/api/announcements/${id}`)
}
