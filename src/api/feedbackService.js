import { axiosInstance } from '../config/axiosInstance'

export const leaveFeedback = ({ id, data }) => {
   return axiosInstance.post(`/api/feedbacks/${id}`, data)
}

export const getFeedbackById = (id) => {
   return axiosInstance.get(`/api/feedbacks/${id}`)
}

export const putFeedbackById = (feedbackId, data) => {
   return axiosInstance.put(`/api/feedbacks/${feedbackId}`, data)
}

export const likeOrDislike = (feedbackId, likeOrDislike) => {
   console.log(feedbackId, 'feedback id')
   return axiosInstance.post(
      `/api/feedbacks/likeAndDislike?feedbackId=${feedbackId}&likeOrDislike=${likeOrDislike}`
   )
}

export const getCountRatingById = (id) => {
   return axiosInstance.get(`/api/feedbacks/countRating/${id} `)
}
