/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@mui/material'
import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Bookings } from './Bookings'
import { MyAnnouncement } from './MyAnnouncement'
import { OnModeration } from './OnModeration'

const bookings = [
   {
      id: 1,
      title: 'Beku',
   },
   {
      id: 2,
      title: 'bookings',
   },
]
const announcement = [
   {
      id: 3,
      title: 'announcement',
   },
   {
      id: 4,
      title: 'Beku',
   },
]
const moderation = [
   {
      id: 5,
      title: 'moderation',
   },
]
export function Tabs() {
   const BookingLength = bookings.length
   const announcementLength = announcement.length
   const moderationLength = moderation.length

   return (
      <div>
         <StyleHead>
            <StyleLink to="/">
               <h3>Bookings({BookingLength})</h3>
            </StyleLink>

            <StyleLink to="/my-announcemen">
               <h3>My announcement({announcementLength})</h3>
            </StyleLink>

            <StyleLink to="/on-moderation">
               <h3>On moderation({moderationLength})</h3>
            </StyleLink>
         </StyleHead>

         <Routes>
            <Route path="/" element={<Bookings bookings={bookings} />} />

            <Route
               path="/my-announcemen"
               element={<MyAnnouncement moderation={announcement} />}
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

const StyleLink = styled(NavLink)(() => ({
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
