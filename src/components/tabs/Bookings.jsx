import React from 'react'

export function Bookings({ bookings }) {
   return (
      <div>
         {bookings.map((item) => {
            return (
               <div key={item.id}>
                  <h1>{item.title}</h1>
                  <p>{item.age}</p>
               </div>
            )
         })}
      </div>
   )
}
