import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { ProfileCards } from '../cards/ProfileCards'

export function Bookings() {
   const { data } = useSelector((state) => state.getannouncement)

   console.log(data.bookings, 'data.bookings')
   return (
      <Container>
         <BookingContainer>
            {data.bookings.map((booking, index) => {
               return (
                  <ProfileCards
                     data={booking}
                     index={index}
                     announcement="false"
                     key={booking.id}
                  />
               )
               // ) : (
               //    <NoCard>Уou dont have a cards</NoCard>
               // )
            })}
         </BookingContainer>
      </Container>
   )
}
// const NoCard = styled('div')`
//    border: 4px dashed #dd8a08;
//    padding: 20px;
//    text-align: center;
//    font-size: 18px;
//    color: #555;
//    background-color: #f9f9f9;
//    border-radius: 8px;
//    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//    max-width: 300px;
//    margin-left: 16.6rem;
//    margin-top: 5rem;
// `

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'flex-start',
   // backgroundColor: 'red',
}))
const BookingContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   padding-top: 3%;
   width: 100%;
   gap: 1.25rem;
`
