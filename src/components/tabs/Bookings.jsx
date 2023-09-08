import { styled } from '@mui/material'
import React from 'react'
import { AdminCards } from '../UI/cards/AdminCards'
import { ProfileCards } from '../UI/cards/ProfileCards'

export function Bookings({ bookings, onChange }) {
   return (
      <div>
         {onChange === 'true' ? (
            <AdminCards
               data={bookings}
               page="admin"
               justifyContent="start"
               bgColor="white"
            />
         ) : (
            <BookingContainer>
               <ProfileCards data={bookings} announcement="false" />
            </BookingContainer>
         )}
      </div>
   )
}
const BookingContainer = styled('div')`
   flex-wrap: wrap;
   padding-top: 3%;
   width: 100%;
`
