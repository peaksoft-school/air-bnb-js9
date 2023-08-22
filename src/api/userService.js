import { axiosInstance } from '../config/axiosInstance'

export const getAllUsers = () => {
   return axiosInstance.get('/api/users')
}

export const deleteUser = (id) => {
   return axiosInstance.delete(`/api/users/${id}`)
}
