import { axiosInstance } from '../config/axiosInstance'

export const getAdminApplicationRequest = () => {
   return axiosInstance.get(
      `/api/announcements/announcementsModeration?currentPage=1&pageSize=3`
   )
}

export const deleteAdminApplicationRequest = (id) => {
   return axiosInstance.delete(`/api/announcements/${id}`)
}

export const postRejectApplicationsRequest = ({ id, title }) => {
   return axiosInstance.post(`/api/admin/reject-announcement/${id}`, { title })
}

export const postAcceptApplicationsRequest = (id) => {
   console.log('id:', id)
   return axiosInstance.post(`/api/admin/accepted-announcement/${id}`)
}
