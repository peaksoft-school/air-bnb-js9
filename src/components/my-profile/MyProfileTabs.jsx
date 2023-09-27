import React from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { Bookings } from '../UI/tabs/Bookings'
import { MyAnnouncement } from '../UI/tabs/MyAnnouncement'
import { OnModeration } from '../UI/tabs/OnModeration'

export function MyProfileTabs() {
   const { data } = useSelector((state) => state.getannouncement)
   const BookingLength = data.bookings?.length
   const announcementLength = data.announcements?.length
   const moderationLength = data.moderations?.length
   const location = useLocation()

   return (
      <div>
         <StyleHead>
            {BookingLength === 0 ? (
               <StyleLink
                  to="/main/my-profile/bookings"
                  active={
                     location.pathname === '/main/my-profile/bookings'
                        ? 'true'
                        : 'false'
                  }
               >
                  <h3>Bookings </h3>
               </StyleLink>
            ) : (
               <StyleLink
                  to="/main/my-profile/bookings"
                  active={
                     location.pathname === '/main/my-profile/bookings'
                        ? 'true'
                        : 'false'
                  }
               >
                  <h3>Bookings ({BookingLength})</h3>
               </StyleLink>
            )}
            {announcementLength === 0 ? (
               <StyleLink
                  to="/main/my-profile/my-announcement"
                  active={
                     location.pathname === '/main/my-profile/my-announcement'
                        ? 'true'
                        : 'false'
                  }
               >
                  <h3>My announcement </h3>
               </StyleLink>
            ) : (
               <StyleLink
                  to="/main/my-profile/my-announcement"
                  active={
                     location.pathname === '/main/my-profile/my-announcement'
                        ? 'true'
                        : 'false'
                  }
               >
                  <h3>My announcement ({announcementLength})</h3>
               </StyleLink>
            )}
            {moderationLength <= 0 ? (
               <StyleLink
                  to="/main/my-profile/on-moderation"
                  active={
                     location.pathname === '/main/my-profile/on-moderation'
                        ? 'true'
                        : 'false'
                  }
               >
                  <h3>On moderation </h3>
               </StyleLink>
            ) : (
               <StyleLink
                  to="/main/my-profile/on-moderation"
                  active={
                     location.pathname === '/main/my-profile/on-moderation'
                        ? 'true'
                        : 'false'
                  }
               >
                  <h3>On moderation {moderationLength}</h3>
               </StyleLink>
            )}
         </StyleHead>
         <Routes>
            <Route path="bookings" element={<Bookings />} />
            <Route path="my-announcement" element={<MyAnnouncement />} />
            <Route path="on-moderation" element={<OnModeration />} />
         </Routes>
      </div>
   )
}
const StyleHead = styled('div')(() => ({
   width: '96.5%',
   height: '4.25vh',
   borderBottom: '1px solid #C4C4C4',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '3.125rem',
}))

const StyleLink = styled(NavLink)(({ active, isActive }) => ({
   color: active === 'true' ? ' #000' : '#6C6C6C',
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   fontWeight: isActive ? '600' : '400',
   lineHeight: 'normal',
   borderBottom: active === 'true' ? '2px solid #000' : null,

   '&:hover': {
      color: ' var(--primary-black, #363636)',
      fontWeight: '600',
   },
   '&:focus': {
      color: 'var(--primary-black, #363636)',
      fontWeight: '600',
   },
   h3: {
      color: active === 'true' ? '2px solid #000' : '#6C6C6C',
      marginBottom: '0.5156rem',
   },
}))
