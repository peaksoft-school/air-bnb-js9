import React, { useState } from 'react'
import { Breadcrumbs, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import { Header } from '../layout/Header/Header'
import { HouseSlidDetail } from '../components/UI/house-detail/HouseSlidDetail'
import { NameOfHotel } from '../components/UI/name-hotel/NameOfHotel'
import { Hotel, house } from '../utils/helpers'
import Feedback from '../components/UI/feedback/Feedback'
import { Payment } from '../components/payment/Payment'
import { Footer } from '../layout/Footer/Footer'
import { RatingChart } from '../components/UI/rating/RatingChart'

const data = [
   {
      name: 'Bars Barsov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      starRating: 2,
      like: 4,
      dislike: 2,
      avatar:
         'https://ca.slack-edge.com/T023L1WBFLH-U04553S5F4Y-b3857864c0e6-512',
   },
   {
      name: 'Beku Bekov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      starRating: 3,
      like: 1,
      dislike: 5,
      avatar: '',
   },
   {
      name: 'Aziret Aziretov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      starRating: 4,
      like: 5,
      dislike: 3,
      avatar:
         'https://ca.slack-edge.com/T023L1WBFLH-U03E00N1USF-0fc4b2f5d54e-512',
   },
   {
      name: 'Emir Emirov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      starRating: 5,
      like: 4,
      dislike: 1,
      avatar: '',
   },
]

export default function AnouncementDetailPage() {
   const [state, setState] = useState(false)

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
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                     }}
                  >
                     <NameOfHotel hotel={Hotel} button="no" />
                     <Payment
                        state={state}
                        openModalHandler={toggle}
                        price="26"
                     />
                  </div>
               </HotelImgAndNameOfHotel>
            </HotelInfo>
            <div style={{ marginTop: '3.75rem' }}>
               <StyledFeedback>Feedback</StyledFeedback>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'flex-start',
                     gap: '12.6875rem',
                  }}
               >
                  <div>
                     {data.map((el) => (
                        <Feedback data={el} />
                     ))}
                  </div>
                  <div>
                     <RatingChart starValue="5.5" />
                     <ButtonForFeedback>leave feedback</ButtonForFeedback>
                  </div>
               </div>
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
}))

const ButtonForFeedback = styled('button')(() => ({
   padding: '8px 16px',
   width: '26.5rem',
   color: 'var(--tertiary-middle-gray, #828282)',
   fontFamily: 'Inter',
   fontSize: '16px',
   fontWeight: '500',
   textTransform: 'uppercase',
   border: '1px solid#828282',
}))
