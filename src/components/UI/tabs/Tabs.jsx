import React from 'react'
import { styled } from '@mui/material'
import { Link, Route, Routes } from 'react-router-dom'
import { Bookings } from './Bookings'
import { MyAnnouncement } from './MyAnnouncement'
import { OnModeration } from './OnModeration'

const moderation = [
   {
      id: 5,
      title: 'moderation',
   },
]

export function Tabs({ announcement, bookings }) {
   const BookingLength = bookings?.length
   const announcementLength = announcement?.length
   const moderationLength = moderation?.lenght

   return (
      <div>
         <StyleHead>
            <StyleLink to="/bookings">
               <h3>Bookings ({BookingLength})</h3>
            </StyleLink>

            <StyleLink to="/my-announcemen">
               <h3>My announcement ({announcementLength})</h3>
            </StyleLink>

            <StyleLink to="/on-moderation">
               <h3>On moderation ({moderationLength})</h3>
            </StyleLink>
         </StyleHead>

         <Routes>
            <Route
               path="/bookings"
               element={<Bookings bookings={bookings} onChange="true" />}
            />
            <Route
               path="/my-announcemen"
               element={
                  <MyAnnouncement announcement={announcement} select="true" />
               }
            />
            <Route
               path="/on-moderation"
               element={<OnModeration moderation={moderation} />}
            />
         </Routes>
      </div>
   )
}
const StyleHead = styled('div')(() => ({
   width: '90%',
   height: '4.25vh',
   borderBottom: '1px solid #C4C4C4',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '3.125rem',
}))

const StyleLink = styled(Link)(() => ({
   color: ' #6C6C6C',
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: 'normal',
   '&:hover': {
      color: ' var(--primary-black, #363636)',
      fontWeight: '600',
   },
   '&:focus': {
      color: 'var(--primary-black, #363636)',
      fontWeight: '600',
      borderBottom: '2px solid #000',
   },
   h3: {
      marginBottom: '0.5156rem',
   },
}))
