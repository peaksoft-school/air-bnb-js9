import React from 'react'

export function MyAnnouncement({ announcement }) {
   return (
      <div>
         {announcement.map((item) => {
            return (
               <div key={item.id}>
                  <h1>{item.title}</h1>
               </div>
            )
         })}
      </div>
   )
}
