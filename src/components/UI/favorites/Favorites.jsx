import { styled } from '@mui/material'
import React from 'react'

export function Favorites({ item }) {
   return item.map((item) => (
      <UserStyle>
         <Section />
         <div>
            <NameStyle>{item.name}</NameStyle>
            <EmailStyle>{item.email}</EmailStyle>
            <EmailStyle>{item.checkout}</EmailStyle>
         </div>
      </UserStyle>
   ))
}
const UserStyle = styled('div')`
   display: flex;
   gap: 1rem;
   align-self: flex-start;
`

const NameStyle = styled('div')`
   color: #000;
   font-weight: 500;
   line-height: normal;
`
const EmailStyle = styled('p')`
   color: var(--tertiary-middle-gray, #828282);
   line-height: 130%;
`
const Section = styled('section')`
   width: 3rem;
   height: 3rem;
   border-radius: 50%;
   background-color: #c4c4c4;
`
