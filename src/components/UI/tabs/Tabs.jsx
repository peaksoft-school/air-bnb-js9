import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Route, Routes } from 'react-router-dom'
import { OnModeration } from './OnModeration'
import { moderation } from '../../../utils/helpers'
import { Bookings } from './Bookings'
import { MyAnnouncement } from './MyAnnouncement'

export function Tabs({ state }) {
   const { data } = useSelector((state) => state.getannouncement)

   const BookingLength = data.bookings?.length
   const announcementLength = data.announcements.responses?.length
   const moderationLength = 0

   return state === 'true' ? (
      <div>
         <StyleHead>
            <StyleLink to="bookings">
               <h3>Bookings ({BookingLength})</h3>
            </StyleLink>

            <StyleLink to="my-announcement">
               <h3>My announcement ({announcementLength})</h3>
            </StyleLink>

            <StyleLink to="on-moderation">
               <h3>On moderation ({moderationLength})</h3>
            </StyleLink>
         </StyleHead>

         <Routes>
            <Route path="bookings" element={<Bookings />} />
            <Route path="my-announcement" element={<MyAnnouncement />} />
            <Route
               path="/on-moderation"
               element={<OnModeration moderation={moderation} />}
            />
         </Routes>
      </div>
   ) : (
      <div>
         <StyleHead>
            <StyleLink to="booking">
               <h3>Booking</h3>
            </StyleLink>

            <StyleLink to="my-announcement">
               <h3>My announcement</h3>
            </StyleLink>
         </StyleHead>
      </div>
   )
}
const StyleHead = styled('div')(() => ({
   width: '95%',
   height: '4.25vh',
   borderBottom: '1px solid #C4C4C4',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '3.125rem',
}))

const StyleLink = styled(NavLink)(({ isActive }) => ({
   color: isActive ? 'black' : '#6C6C6C',
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   fontWeight: isActive ? '600' : '400',
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
