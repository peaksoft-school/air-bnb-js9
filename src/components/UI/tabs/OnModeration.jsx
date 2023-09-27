import React from 'react'
import { styled } from '@mui/material'
import { ProfileCards } from '../cards/ProfileCards'

export function OnModeration({ moderation }) {
   return (
      <ModerationContainer>
         {moderation?.map((item) => {
            return (
               <div key={item.id}>
                  <ProfileCards data={item} announcement="true" />
               </div>
            )
         })}
      </ModerationContainer>
   )
}
const ModerationContainer = styled('div')`
   margin-top: 3rem;
   width: 100%;
   display: flex;
   gap: 3rem;
   flex-wrap: wrap;
   margin-bottom: 2rem;
`
