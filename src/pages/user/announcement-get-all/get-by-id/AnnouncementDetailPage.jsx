/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../../../layout/header/Header'
import { HouseSlidDetail } from '../../../../components/UI/house-detail/HouseSlidDetail'
import { NameOfHotel } from '../../../../components/UI/name-hotel/NameOfHotel'
import Feedback from '../../../../components/UI/feedback/Feedback'
import { Payment } from '../../../../components/payment/Payment'
import { Footer } from '../../../../layout/footer/Footer'
import { RatingChart } from '../../../../components/UI/rating/RatingChart'
import { LeaveFeedback } from '../../../../components/leave-feedback/LeaveFeeadback'
import {
   countRatingGetByIdRequest,
   feedbackGetByIdRequest,
} from '../../../../store/user/feedback/feedbackThunk'
import { getByIdRequest } from '../../../../store/anouncement/AnouncementThunk'

import { uploadActions } from '../../../../store/Upload'

export function AnnouncementDetailPage({ navigateRoute }) {
   const [state, setState] = useState(false)
   const [openModal, setOpenModal] = useState(false)
   const [showFullFeedback, setShowFullFeedback] = useState(false)
   const { announcementDataById } = useSelector(
      (state) => state.announcementGetById
   )
   const { feedbackDataById, countRatingDataById } = useSelector(
      (state) => state.feedback
   )
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { region, houseId } = useParams()
   const { id, booked } = announcementDataById

   useEffect(() => {
      dispatch(feedbackGetByIdRequest(houseId))
      dispatch(countRatingGetByIdRequest(houseId))
      dispatch(getByIdRequest(houseId))
   }, [dispatch, houseId])

   const toggleFeedback = () => {
      if (feedbackDataById.length <= 3) {
         setShowFullFeedback(false)
      } else if (feedbackDataById.length >= 3) {
         setShowFullFeedback(!showFullFeedback)
      }
   }

   const truncatedFeedback = feedbackDataById.slice(0, 3)

   const leaveFeedbackHandler = () => {
      setOpenModal((prev) => !prev)
   }

   const toggle = () => {
      setState((prev) => !prev)
   }

   const announcementImages = announcementDataById.images?.map((item) => item)
   const images = Array.isArray(announcementImages)
      ? announcementImages?.map((image, index) => ({
           id: index + 1,
           original: image,
           thumbnail: image,
        }))
      : []

   return (
      <>
         <Header login="false" />
         <Container>
            {navigateRoute === 'region' ? (
               <ContainerNavigate>
                  <button type="button" onClick={() => navigate('/main')}>
                     Main /
                  </button>
                  <button type="button" onClick={() => navigate(-1)}>
                     {region}
                  </button>
                  <p> / Hotel</p>
               </ContainerNavigate>
            ) : (
               <ContainerNavigate>
                  <button type="button" onClick={() => navigate('/main')}>
                     Main
                  </button>
                  <p> / Hotel</p>
               </ContainerNavigate>
            )}

            <HotelInfo>
               <p>Name</p>
               <HotelImgAndNameOfHotel>
                  <HouseSlidDetail images={images} />
                  <HotelNamePaymentBlock>
                     <NameOfHotel
                        dataById={announcementDataById}
                        buttons="no"
                     />
                     <Payment
                        state={state}
                        booked={booked}
                        openModalHandler={toggle}
                        announcementId={announcementDataById.id}
                        price={announcementDataById.price}
                     />
                  </HotelNamePaymentBlock>
               </HotelImgAndNameOfHotel>
            </HotelInfo>
            <div style={{ marginTop: '3.75rem' }}>
               <StyledFeedback>Feedback</StyledFeedback>
               <FeedbackAndRatingBlock>
                  <div className="feedback">
                     {showFullFeedback
                        ? feedbackDataById.map((feedback) => (
                             <Feedback
                                data={feedback}
                                announcementBooked={announcementDataById.booked}
                             />
                          ))
                        : truncatedFeedback.map((feedback) => (
                             <Feedback
                                data={feedback}
                                announcementBooked={announcementDataById.booked}
                             />
                          ))}

                     <ShowFullFeedbackText onClick={toggleFeedback}>
                        {showFullFeedback
                           ? feedbackDataById.length > 3 && 'Show less'
                           : feedbackDataById.length > 3 && 'Show more'}
                     </ShowFullFeedbackText>
                     {/* {booked ? (
                        <ButtonForFeedback
                           onClick={leaveFeedbackHandler}
                           style={{ width: '39.375rem', marginTop: '2.5rem' }}
                        >
                           leave feedback
                        </ButtonForFeedback>
                     ) : null} */}
                  </div>
                  <div>
                     <RatingChart
                        countRatingDataById={countRatingDataById}
                        starValue={countRatingDataById.averageRating}
                        // starValue="6"
                     />
                     {booked ? (
                        <ButtonForFeedback onClick={leaveFeedbackHandler}>
                           leave feedback
                        </ButtonForFeedback>
                     ) : null}

                     {openModal && (
                        <LeaveFeedback
                           onClick={dispatch(uploadActions.resetImages())}
                           openModal={openModal}
                           setOpenModal={setOpenModal}
                           announcementId={id}
                        />
                     )}
                  </div>
               </FeedbackAndRatingBlock>
            </div>
         </Container>
         <Footer />
      </>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
   height: '100%',
   padding: '2.25rem 6.25rem 5.75rem 6.25rem',
   marginTop: ' 5.5rem',
   background: '#F7F7F7',
}))
const ContainerNavigate = styled('div')(() => ({
   display: 'flex',
   gap: '0.5rem',
   button: {
      background: 'rgba(0 , 0, 0, 0.0)',
      border: 'none',
      color: 'var(--tertiary-light-gray, #C4C4C4)',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      cursor: 'pointer',
   },
   p: {
      color: ' var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      cursor: 'pointer',
   },
}))
const HotelInfo = styled('div')(() => ({
   marginTop: '2.5rem',
   p: {
      color: '#000',
      fontSize: '1.25rem',
      fontWeight: '500',
      marginBottom: '1.875rem',
   },
}))

const HotelImgAndNameOfHotel = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'flex-start',
}))

const StyledFeedback = styled('h4')(() => ({
   color: '#000',
   fontSize: '1.25rem',
   fontWeight: '500',
   textTransform: 'uppercase',
   marginBottom: '2.875rem',
   cursor: 'pointer',
}))

const ButtonForFeedback = styled('button')(() => ({
   padding: '0.5rem 1rem',
   width: '26.5rem',
   color: ' #828282',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: '500',
   textTransform: 'uppercase',
   border: '.0625rem solid#828282',
   background: 'none ',
   cursor: 'pointer',
}))

const HotelNamePaymentBlock = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   margin: '5rem 0 0 0 ',
}))

const FeedbackAndRatingBlock = styled('div')(() => ({
   width: '94%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'flex-start',
   marginBottom: '6.63rem',
   '.feedback': {
      width: '50%',
      minHeight: '10rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
   },
}))

const ShowFullFeedbackText = styled('button')(() => ({
   color: '#000',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: '400',
   textDecorationLine: 'underline',
   marginTop: '1rem',
   cursor: 'pointer',
   background: 'none',
   border: ' none',
}))
