import { axiosInstance } from '../config/axiosInstance'

export const leaveFeedback = (data) => {
   return axiosInstance.post(`/api/feedbacks/6`, data)
}

export const getFeedbackById = (data) => {
   return axiosInstance.get(`/api/feedbacks/6`, data)
}

export const putFeedbackById = (feedbackId, data) => {
   return axiosInstance.put(`/api/feedbacks/${feedbackId}`, data)
}

export const likeOrDislike = (feedbackId, likeOrDislike) => {
   return axiosInstance.post(
      `/api/feedbacks/likeAndDislike?feedbackId=${feedbackId}&likeOrDislike=${likeOrDislike}`
   )
}

export const getCountRatingById = (data) => {
   return axiosInstance.get(`/api/feedbacks/countRating/6`, data)
}
