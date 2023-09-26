import React from 'react'
import {
   NavLink,
   Route,
   Routes,
   useLocation,
   useParams,
} from 'react-router-dom'
import { styled } from '@mui/material'
import { AdminBookings } from './AdminBookings'
import { AdminMyAnnouncement } from './AdminMyAnnouncement'

export function AdminTabs() {
   const location = useLocation()
   const { region, houseId } = useParams()

   return (
      <div>
         <StyleHead>
            <StyleLink
               to="bookings"
               active={
                  location.pathname ===
                  `/main/${region}/region/${houseId}/profile/bookings`
                     ? 'true'
                     : 'false'
               }
            >
               <h3>Bookings </h3>
            </StyleLink>

            <StyleLink
               to="my-announcement"
               active={
                  location.pathname ===
                  `/main/${region}/region/${houseId}/profile/my-announcement`
                     ? 'true'
                     : 'false'
               }
            >
               <h3>My announcement</h3>
            </StyleLink>
         </StyleHead>

         <Routes>
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="my-announcement" element={<AdminMyAnnouncement />} />
         </Routes>
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

const StyleLink = styled(NavLink)(({ active }) => ({
   color: active === 'true' ? ' #000' : '#6C6C6C',
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   // fontWeight: isActive ? '600' : '400',
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
      marginBottom: '0.5156rem',
   },
}))
