import React from 'react'
import { Cards } from '../UI/cards/Cards'

export function Bookings({ bookings }) {
   return (
      <div>
         <Cards
            data={bookings}
            page="admin"
            justifyContent="start"
            bgColor="white"
         />
      </div>
   )
}
