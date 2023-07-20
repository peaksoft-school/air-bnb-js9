import React from 'react'

export const OnModeration = ({ moderation }) => {
   return (
      <div>
         {moderation.map((item) => {
            return (
               <div>
                  <h1>{item.title}</h1>
                  <p>{item.age}</p>
               </div>
            )
         })}
      </div>
   )
}