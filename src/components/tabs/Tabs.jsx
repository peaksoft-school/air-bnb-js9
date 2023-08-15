/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@mui/material'
import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import { OnModeration } from './OnModeration'
import { announcement, bookings, moderation } from '../../utils/helpers'

export function Tabs({ state }) {
   const BookingLength = bookings.length
   const announcementLength = announcement.length
   const moderationLength = moderation.length

   return state === 'true' ? (
      <div>
         <StyleHead>
            <StyleLink to="/booking">
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
               <h3>Bookings</h3>
            </StyleLink>

            <StyleLink to="my-announcement">
               <h3>My announcement</h3>
            </StyleLink>
         </StyleHead>
         <Outlet />
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
