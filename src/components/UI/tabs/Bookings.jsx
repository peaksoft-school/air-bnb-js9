import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
// import { AdminCards } from '../cards/admin/AdminCards'
import { ProfileCards } from '../cards/ProfileCards'

export function Bookings() {
   const { data } = useSelector((state) => state.getannouncement)

   return (
      <Container>
         {/* {onChange === 'true' ? (
            <AdminCards
               image
               data={bookings}
               page="admin"
               justifyContent="start"
               bgColor="white"
               padding="2rem 0 0 2rem "
            />
         ) : (
            <BookingContainer>
               <ProfileCards data={bookings} announcement="false" />
            </BookingContainer>
         )}
      </div>
      <Container> */}
         <BookingContainer>
            {data.bookings.map((booking, index) => {
               return data.bookings?.lenght > 0 ? (
                  <ProfileCards
                     data={(booking, index)}
                     announcement="false"
                     key={booking.id}
                  />
               ) : (
                  <NoCard>Уou dont have a cards</NoCard>
               )
            })}
         </BookingContainer>
      </Container>
   )
}
const NoCard = styled('div')`
   border: 4px dashed #dd8a08;
   padding: 20px;
   text-align: center;
   font-size: 18px;
   color: #555;
   background-color: #f9f9f9;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   max-width: 300px;
   margin-left: 16.6rem;
   margin-top: 5rem;
`

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'flex-start',
   // backgroundColor: 'red',
}))
const BookingContainer = styled('div')`
   flex-wrap: wrap;
   padding-top: 3%;
   width: 100%;
`
