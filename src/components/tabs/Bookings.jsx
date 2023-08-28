import React from 'react'
import { AdminCards } from '../UI/cards/AdminCards'

export function Bookings({ bookings }) {
   return (
      <div>
         <AdminCards
            data={bookings}
            page="admin"
            justifyContent="start"
            bgColor="white"
         />
      </div>
   )
}
