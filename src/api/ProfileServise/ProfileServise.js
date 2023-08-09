import { axiosInstance } from '../../config/axiosInstance'

export const getMyAnnouncement = () => {
   return axiosInstance.get('/api/users/bookings/my-announcement')
}
