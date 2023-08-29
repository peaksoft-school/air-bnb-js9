import { axiosInstance } from '../../config/axiosInstance'

export const getMyAnnouncement = () => {
   return axiosInstance.get('/api/users/bookings/my-announcements')
}

export const houseSortRequest = (params) => {
   return axiosInstance.get('/api/users/filter', { params })
}

export const deleteAnnouncementbyIdRequest = (id) => {
   return axiosInstance.delete(`/api/announcements/${id}`)
}

export const findannounByIdRequest = (id) => {
   return axiosInstance.get(`/api/announcements/${id}`)
}

export const putAnnouncementsRequest = ({ saveData, itemId }) => {
   return axiosInstance.put(`/api/announcements/${itemId}`, saveData)
}
