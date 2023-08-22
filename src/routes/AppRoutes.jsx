import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ProtectedRoutes } from './ProtectedRoutes'
import { UserLayout } from '../layout/userLayout/UserLayout'
import { AdminLayout } from '../layout/adminLayout/AdminLayout'
import { userRoles } from '../utils/constants'
import { AnnouncementAdminPage } from '../pages/admin/AnnouncementAdminPage'
import { Applications } from '../pages/admin/Applications'
import AddAnouncementForm from '../components/anouncement/Anouncement'
import {
   getAdminApplication,
   postAcceptApplications,
   postRejectApplications,
} from '../store/admin-application/ApplicationThunk'
import { toastSnackbar } from '../components/UI/snackbar/Snackbar'

export function AppRoutes() {
   const [currentPage, setCurrentPage] = useState(1)
   const [currentSize, setCurrenSize] = useState(18)
   const [title, setTitle] = useState('')
   const dispatch = useDispatch()
   const { toastType } = toastSnackbar()

   const role = useSelector((state) => state.auth.role)

   const isAllowed = (roles) => {
      return roles.includes(role)
   }

   const acceptHandler = async (id) => {
      try {
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
         toastType('success', 'Accepted :)', 'Moderation successfully passed')
      } catch (error) {
         toastType('error', error)
      }
   }

   const rejectedHandler = (id) => {
      const object = {
         status: 'reject',
         title,
         id,
      }

      dispatch(postRejectApplications(object))
         .unwrap()
         .then(() => {
            toastType(
               'success',
               'Accepted :)',
               'Moderation successfully passed'
            )
         })
         .catch((error) => {
            const errorMessage = error?.message || 'An error occurred'
            toastType('error', 'Error', errorMessage)
         })
      setTitle('')

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
         <Route path="AddAnouncementForm" element={<AddAnouncementForm />} />

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
            <Route path="/admin/" element={<Navigate to="application/" />} />
            <Route
               path="application/"
               element={
                  <Applications
                     acceptHandler={acceptHandler}
                     currentPage={currentPage}
                     currentSize={currentSize}
                     setCurrentPage={setCurrentPage}
                     setCurrenSize={setCurrenSize}
                     rejectedHandler={rejectedHandler}
                     setTitle={setTitle}
                     title={title}
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
                        rejectedHandler={rejectedHandler}
                     />
                  }
               />
            </Route>
         </Route>
      </Routes>
   )
}
