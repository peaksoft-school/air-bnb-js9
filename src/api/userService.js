import { axiosInstance } from '../config/axiosInstance'

export const getAllUsers = () => {
   return axiosInstance.get('/api/users/get-all')
}

export const deleteUser = (id) => {
   return axiosInstance.delete(`/api/users/${id}`)
}
