import React from 'react'
import { Cards } from '../UI/cards/Cards'

export function MyAnnouncement({ announcement }) {
   return (
      <div>
         <Cards
            data={announcement}
            page="admin"
            justifyContent="start"
            bgColor="white"
         />
      </div>
   )
}
