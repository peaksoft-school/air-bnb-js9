import { axiosInstance } from '../../config/axiosInstance'

export const getAnnouncementRequest = (id) => {
   return axiosInstance.get(`/api/users/getAnnouncementProfile/${id}`)
}
export const deleteInnerAnnouncementRequest = (id) => {
   return axiosInstance.delete(`/api/announcements/${id}`)
}
