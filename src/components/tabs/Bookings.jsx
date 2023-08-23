import React from 'react'
import { styled } from '@mui/material'
import { ProfileCards } from '../UI/cards/ProfileCards'

export function Bookings({ bookings }) {
   return (
      <BookingContainer>
         <ProfileCards data={bookings} />
      </BookingContainer>
   )
}
const BookingContainer = styled('div')`
   flex-wrap: wrap;
   padding-top: 2%;
   width: 100%;
`
