import React from 'react'
import { AdminCards } from '../UI/cards/AdminCards'

export function MyAnnouncement({ announcement }) {
   return (
      <div>
         <AdminCards
            data={announcement}
            page="admin"
            justifyContent="start"
            bgColor="white"
         />
      </div>
   )
}
