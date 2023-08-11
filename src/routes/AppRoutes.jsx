import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ProtectedRoutes } from './ProtectedRoutes'
import { UserLayout } from '../layout/userLayout/UserLayout'
import { AdminLayout } from '../layout/adminLayout/AdminLayout'
<<<<<<< HEAD
import { roles, userRoles } from '../utils/constants'
import { AnnouncementAdminPage } from '../pages/admin/AnnouncementAdminPage'
import { Applications } from '../pages/admin/Applications'

const isAllowed = (role) => {
   return role.includes(roles)
}
=======
import { userRoles } from '../utils/constants'
>>>>>>> 8b126ec6b3765746a1d4faca70b5665e40beb34c

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
            <Route path="application/" element={<Applications />}>
               <Route
                  path="announcementAdminPage"
                  element={<AnnouncementAdminPage />}
               />
            </Route>
         </Route>
      </Routes>
   )
}
