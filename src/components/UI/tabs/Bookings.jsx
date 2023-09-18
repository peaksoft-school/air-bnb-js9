import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { ProfileCards } from '../cards/ProfileCards'

export function Bookings() {
   const { data } = useSelector((state) => state.getannouncement)

   return (
      <Container>
         <BookingContainer>
            {data.bookings.map((bookings, index) => {
               return (
                  <ProfileCards
                     data={(bookings, index)}
                     announcement="false"
                     key={bookings.id}
                  />
               )
            })}
         </BookingContainer>
      </Container>
   )
}
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
