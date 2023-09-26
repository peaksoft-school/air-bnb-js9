import { axiosInstance } from '../../config/axiosInstance'

//   application
export const getAdminApplicationRequest = (currentPage) => {
   return axiosInstance.get(
      `/api/admin/announcementsModeration?currentPage=${currentPage}&pageSize=18`
   )
}
export const getAdminApplicationRequestAll = () => {
   return axiosInstance.get(
      '/api/admin/announcementsModeration?currentPage=1&pageSize=999'
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
//   users
export const getAdminUsersCardsIdRequest = (payload) => {
   return axiosInstance.get(`/api/users/get/${payload}?value`)
}

export const getMyAnnouncementRequest = (id) => {
   return axiosInstance.get(`/api/users/get/${id}?value=announcement`)
}

export const getBookingsRequest = (id) => {
   return axiosInstance.get(`/api/users/get/${id}?value=booking`)
}

//    all-housing
export const getAllHousingRequest = ({ status, houseType, rating, price }) => {
   if (
      status === 'all' ||
      houseType === 'all' ||
      rating === 'all' ||
      price === 'all'
   ) {
      return axiosInstance.get(`/api/announcements/announcements-filter`)
   }
   return axiosInstance.get(
      `/api/announcements/announcements-filter?status=${status}&houseType=${houseType}&rating=${rating}&price=${price}`
   )
}

export const deleteAllHousingRequest = (id) => {
   return axiosInstance.delete(`/api/announcements/${id}`)
}

export const updateAllHousingRequest = ({ id, editData }) => {
   return axiosInstance.put(`/api/announcements/${id}`, editData)
}
