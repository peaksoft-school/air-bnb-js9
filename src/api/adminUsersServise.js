import { axiosInstance } from '../config/axiosInstance'

export const getAdminUsersCardsIdRequest = (payload) => {
   return axiosInstance.get(`/api/users/get/${payload}?value=announcement`)
}

export const getMyAnnouncementRequest = (id) => {
   return axiosInstance.get(`/api/users/get/${id}?value=announcement`)
}

export const getBookingsRequest = (id) => {
   return axiosInstance.get(`/api/users/get/${id}?value=booking`)
}
