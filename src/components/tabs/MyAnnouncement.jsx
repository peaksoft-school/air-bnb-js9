import React from 'react'

export function MyAnnouncement({ moderation }) {
   return (
      <div>
         {moderation.map((item) => {
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
