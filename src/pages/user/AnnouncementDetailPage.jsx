/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Typography, styled } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../layout/Header/Header'
import { HouseSlidDetail } from '../../components/UI/house-detail/HouseSlidDetail'
import { NameOfHotel } from '../../components/UI/name-hotel/NameOfHotel'
import { house } from '../../utils/helpers'
import Feedback from '../../components/UI/feedback/Feedback'
import { Payment } from '../../components/payment/Payment'
import { Footer } from '../../layout/Footer/Footer'
import { RatingChart } from '../../components/UI/rating/RatingChart'
import { LeaveFeedback } from '../../components/leave-feedback/LeaveFeeadback'
import { getByIdRequest } from '../../store/anouncement/AnouncementThunk'
import {
   countRatingGetByIdRequest,
   feedbackGetByIdRequest,
} from '../../store/feedback/feedbackThunk'
import { uploadActions } from '../../store/Upload'

export default function AnnouncementDetailPage() {
   const [state, setState] = useState(false)
   const [openModal, setOpenModal] = useState(false)
   const [showFullFeedback, setShowFullFeedback] = useState(false)
   const { announcementDataById } = useSelector(
      (state) => state.announcementGetById
   )

   const { feedbackDataById, countRatingDataById } = useSelector(
      (state) => state.feedback
   )
   const { houseId } = useParams()
   const dispatch = useDispatch()
   console.log(countRatingDataById)
   useEffect(() => {
      dispatch(feedbackGetByIdRequest())
      dispatch(getByIdRequest(houseId))
      dispatch(countRatingGetByIdRequest())
   }, [dispatch])

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

   return (
      <>
         <Header />
         <Container>
            <Breadcrumbs aria-label="breadcrumb">
               <Link underline="hover" color="inherit" href="/">
                  Main
               </Link>
               <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
               >
                  Naryn
               </Link>
               <Typography color="text.primary">Hotel</Typography>
            </Breadcrumbs>
            <HotelInfo>
               <p>Name</p>
               <HotelImgAndNameOfHotel>
                  <HouseSlidDetail images={house} />
                  <HotelNamePaymentBlock>
                     <NameOfHotel
                        dataById={announcementDataById}
                        buttons="no"
                     />
                     <Payment
                        state={state}
                        openModalHandler={toggle}
                        price={announcementDataById.price}
                     />
                  </HotelNamePaymentBlock>
               </HotelImgAndNameOfHotel>
            </HotelInfo>
            <div style={{ marginTop: '3.75rem' }}>
               <StyledFeedback>Feedback</StyledFeedback>
               <FeedbackAndRatingBlock>
                  <div>
                     {showFullFeedback
                        ? feedbackDataById.map((feedback) => (
                             <Feedback
                                data={feedback}
                                announcementBooked={announcementDataById}
                             />
                          ))
                        : truncatedFeedback.map((feedback) => (
                             <Feedback
                                data={feedback}
                                announcementBooked={announcementDataById}
                             />
                          ))}

                     <ShowMoreBlock>
                        <ShowFullFeedbackText onClick={toggleFeedback}>
                           {showFullFeedback ? 'Show less' : 'Show more'}
                        </ShowFullFeedbackText>
                     </ShowMoreBlock>
                     <ButtonForFeedback
                        onClick={leaveFeedbackHandler}
                        style={{ width: '39.375rem', marginTop: '2.5rem' }}
                     >
                        leave feedback
                     </ButtonForFeedback>
                  </div>
                  <div>
                     <RatingChart
                        // countRatingDataById={countRatingDataById}
                        // starValue={countRatingDataById.averageRating}
                        starValue="6"
                     />
                     <ButtonForFeedback onClick={leaveFeedbackHandler}>
                        leave feedback
                     </ButtonForFeedback>
                     {openModal && (
                        <LeaveFeedback
                           onClick={dispatch(uploadActions.resetImages())}
                           openModal={openModal}
                           setOpenModal={setOpenModal}
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
   padding: '0 6.25rem 5.75rem 6.25rem',
   marginTop: ' 2.5rem',
}))

const HotelInfo = styled('p')(() => ({
   marginTop: '2.5rem',
   p: {
      color: '#000',
      fontSize: '1.25rem',
      fontWeight: '500',
      textTransform: 'uppercase',
      marginBottom: '1.875rem',
   },
}))

const HotelImgAndNameOfHotel = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
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
   justifyContent: 'space-between',
}))

const FeedbackAndRatingBlock = styled('div')(() => ({
   display: 'flex',
   alignItems: 'flex-start',
   gap: '12.6875rem',
   marginBottom: '6.63rem',
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

const ShowMoreBlock = styled('div')(() => ({
   display: 'flex',
   justifyContent: ' center',
}))
