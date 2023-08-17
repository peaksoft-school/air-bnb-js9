import React from 'react'
import { Cards } from '../UI/cards/Cards'

export function Bookings({ booking }) {
   return (
      <div>
         <Cards
            data={booking}
            page="admin"
            justifyContent="start"
            bgColor="white"
         />
      </div>
   )
}
