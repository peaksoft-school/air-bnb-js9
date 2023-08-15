import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ProtectedRoutes } from './ProtectedRoutes'
import { UserLayout } from '../layout/userLayout/UserLayout'
import { AdminLayout } from '../layout/adminLayout/AdminLayout'
import { userRoles } from '../utils/constants'
import AdminUsersPage from '../layout/adminLayout/AdminUsersPage'
import { Bookings } from '../components/tabs/Bookings'
import { MyAnnouncement } from '../components/tabs/MyAnnouncement'
import { announcement, bookings } from '../utils/helpers'

export function AppRoutes() {
   const role = useSelector((state) => state.auth.role)

   const isAllowed = (roles) => {
      return roles.includes(role)
   }

   return (
      <Routes>
         <Route
            path="/"
            element={
               <ProtectedRoutes
                  isAllowed={isAllowed([userRoles.GUEST, userRoles.USER])}
                  component={UserLayout}
                  fallbackPath="/admin"
               />
            }
         />
         <Route
            path="/admin/"
            element={
               <ProtectedRoutes
                  isAllowed={isAllowed([userRoles.ADMIN])}
                  component={AdminLayout}
                  fallbackPath="/"
               />
            }
         >
            <Route path="users/" element={<AdminUsersPage />}>
               <Route
                  index
                  path="booking"
                  element={<Bookings bookings={bookings} />}
               />
               <Route
                  path="my-announcement"
                  element={<MyAnnouncement announcement={announcement} />}
               />
            </Route>
         </Route>
      </Routes>
   )
}
