import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoutes'
import { UserLayout } from '../layout/userLayout/UserLayout'
import { AdminLayout } from '../layout/adminLayout/AdminLayout'
import { roles, userRoles } from '../utils/constants'

const isAllowed = (role) => {
   return role.includes(roles)
}

export function AppRoutes() {
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
            path="/admin"
            element={
               <ProtectedRoutes
                  isAllowed={isAllowed([userRoles.ADMIN])}
                  component={AdminLayout}
                  fallbackPath="/"
               />
            }
         />
      </Routes>
   )
}
