import { axiosInstance } from '../../config/axiosInstance'

export const getMyAnnouncement = () => {
   return axiosInstance.get(
      '/api/announcements/myAnnouncements?ascOrDesc=gul&currentPage=123123&pageSize=123123'
   )
}
