import React from 'react'
import {
   NavLink,
   Route,
   Routes,
   useLocation,
   useParams,
} from 'react-router-dom'
import { styled } from '@mui/material'
import { Bookings } from './Bookings'
import { MyAnnouncement } from './MyAnnouncement'
import { OnModeration } from './OnModeration'

const moderation = [
   {
      id: 5,
      title: 'moderation',
   },
]

export function Tabs({
   announcement,
   bookings,
   state,
   showButtonHandler,
   closeButtonHandler,
}) {
   const BookingLength = bookings?.length
   const announcementLength = announcement?.length
   const moderationLength = moderation?.lenght

   const location = useLocation()
   const { userId } = useParams()

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
            <Route
               path="bookings"
               element={<Bookings bookings={bookings} onChange="true" />}
            />
            <Route
               path="my-announcement"
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
   ) : (
      <div>
         <StyleHead>
            <StyleLink
               active={
                  location.pathname === `/admin/users/${userId}/booking`
                     ? 'true'
                     : 'false'
               }
               onClick={closeButtonHandler}
               to="booking"
            >
               <h3>Bookings</h3>
            </StyleLink>

            <StyleLink
               active={
                  location.pathname === `/admin/users/${userId}/my-announcement`
                     ? 'true'
                     : 'false'
               }
               onClick={showButtonHandler}
               to="my-announcement"
            >
               <h3>My announcement</h3>
            </StyleLink>
         </StyleHead>
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
   // marginBottom: '2rem',
}))

const StyleLink = styled(NavLink)(({ active }) => ({
   color: active === 'true' ? '2px solid #000' : '#6C6C6C',
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: 'normal',
   borderBottom: active === 'true' ? '2px solid #000' : null,

   '&:hover': {
      color: ' var(--primary-black, #363636)',
      fontWeight: '600',
   },
   '&:focus': {
      color: 'var(--primary-black, #363636)',
      fontWeight: '600',
      // borderBottom: active === 'true' ? '2px solid #000' : null,
   },
   h3: {
      marginBottom: '0.5156rem',
   },
}))
