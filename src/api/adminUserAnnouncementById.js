import { axiosInstance } from '../config/axiosInstance'

export const getAdminUsersAnnouncementById = (payload) => {
   return axiosInstance.get(`/api/users/getAnnouncementProfile/${payload}`)
}
