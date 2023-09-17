import { axiosInstance } from '../config/axiosInstance'

export const getGlobalSearchRequest = ({
   word,
   isNearby,
   latitude,
   longitude,
}) => {
   return axiosInstance.get(
      `/api/vendor/global-search?word=${word}&isNearby=${isNearby}&latitude=${latitude}&longitude=${longitude}`
   )
}
