import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ProtectedRoutes } from './ProtectedRoutes'
import { UserLayout } from '../layout/userLayout/UserLayout'
import { AdminLayout } from '../layout/adminLayout/AdminLayout'
import { role, userRoles } from '../utils/constants'
import { AnnouncementAdminPage } from '../pages/admin/AnnouncementAdminPage'
import { Applications } from '../pages/admin/Applications'
import {
   getAdminApplication,
   postAcceptApplications,
} from '../store/admin-application/ApplicationThunk'

export function AppRoutes() {
   const [currentPage, setCurrentPage] = useState(1)
   const [currentSize, setCurrenSize] = useState(10)
   const isAllowed = (roles) => {
      return roles.includes(role)
   }
   const dispatch = useDispatch()

   const acceptHandler = (id) => {
      const object = {
         status: 'accept',
         id,
      }
      dispatch(postAcceptApplications(object))

      const current = {
         currentPage,
         currentSize,
      }
      dispatch(getAdminApplication(current))
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
            <Route
               path="application/"
               element={
                  <Applications
                     acceptHandler={acceptHandler}
                     currentPage={currentPage}
                     currentSize={currentSize}
                     setCurrentPage={setCurrentPage}
                     setCurrenSize={setCurrenSize}
                  />
               }
            >
               <Route
                  path="Name"
                  element={
                     <AnnouncementAdminPage
                        roles="admin"
                        pages="application"
                        acceptHandler={acceptHandler}
                     />
                  }
               />
            </Route>
         </Route>
      </Routes>
   )
}
