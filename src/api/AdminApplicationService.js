import { axiosInstance } from '../config/axiosInstance'

export const getAdminApplicationRequest = ({ currentPage, currentSize }) => {
   return axiosInstance.get(
      `/api/admin/announcementsModeration?currentPage=${currentPage}&pageSize=${currentSize}`
   )
}

export const getApplicationByIdRequest = (id) => {
   return axiosInstance.get(`/api/admin/applicationById?applicationId=${id}`)
}

export const deleteAdminApplicationRequest = (id) => {
   return axiosInstance.delete(`/api/announcements/${id}`)
}

export const postRejectApplicationsRequest = ({ id, title, status }) => {
   return axiosInstance.post(
      `/api/admin/accepted-announcement/${id}?value=${status}&messageFromAdminToUser=${title}`
   )
}

export const postAcceptApplicationsRequest = ({ id, status }) => {
   return axiosInstance.post(
      `/api/admin/accepted-announcement/${id}?value=${status}`
   )
}
