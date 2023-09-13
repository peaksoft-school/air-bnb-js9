import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ProtectedRoutes } from './ProtectedRoutes'
import { UserLayout } from '../layout/userLayout/UserLayout'
import { AdminLayout } from '../layout/adminLayout/AdminLayout'
import { userRoles } from '../utils/constants'
import { AnnouncementAdminPage } from '../pages/admin/AnnouncementAdminPage'
import { Applications } from '../pages/admin/Applications'
import { ReusableTable } from '../components/table/Table'
import { AddAnouncementForm } from '../components/anouncement/Anouncement'
import {
   deleteAdminApplication,
   postAcceptApplications,
   postRejectApplications,
} from '../store/admin-application/ApplicationThunk'
import { toastSnackbar } from '../components/UI/snackbar/Snackbar'
import { Bookings } from '../components/UI/tabs/Bookings'
import { MyAnnouncement } from '../components/UI/tabs/MyAnnouncement'
import AdminUsersPage from '../layout/adminLayout/AdminUsersPage'
import { AllHousing } from '../pages/admin/all-housing/AllHousing'
import { NotFound } from '../components/UI/404/NotFound'
import { Payment } from '../components/payment/Payment'
import { UserProfile } from '../components/Profile/Profile'
import { OnModeration } from '../components/UI/tabs/OnModeration'

export function AppRoutes() {
   const [currentPage, setCurrentPage] = useState(1)
   const [currentSize, setCurrenSize] = useState(18)
   const [title, setTitle] = useState('')
   const [stat, setState] = useState('')
   const { toastType } = toastSnackbar()
   const dispatch = useDispatch()

   const role = useSelector((state) => state.auth.role)
   const { data, bookings } = useSelector((state) => state.adminUsers)
   const [state, setState] = useState(false)
   const isAllowed = (roles) => {
      return roles.includes(role)
   }

   const toggle = () => {
      setState((prev) => !prev)
   }

   const acceptHandler = (id) => {
      const object = {
         id,
         toastType,
         status: 'accept',
         current: {
            currentPage,
            currentSize,
         },
      }
      dispatch(postAcceptApplications(object))
   }

   const rejectedHandler = (id) => {
      const object = {
         toastType,
         reject: {
            status: 'reject',
            title,
            id,
         },
         current: {
            currentPage,
            currentSize,
         },
      }

      dispatch(postRejectApplications(object))
      setTitle('')
   }
   const removeCard = (id) => {
      const remove = {
         id,
         toastType,
         current: {
            currentPage,
            currentSize,
         },
      }
      dispatch(deleteAdminApplication(remove))
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
         >
            <Route
               path="/payment"
               element={
                  <Payment
                     price="41"
                     booked={false}
                     bookingsId="7"
                     announcementId="4"
                     toggleDatePicker={state}
                     openModalHandler={toggle}
                  />
               }
            />
         </Route>
         <Route path="AddAnouncementForm" element={<AddAnouncementForm />} />
         <Route
            path="/Profile"
            element={<Navigate to="/Profile/my-announcement" />}
         />
         <Route path="Profile" element={<UserProfile />}>
            <Route
               index
               path="bookings"
               element={<Bookings bookings={bookings} onChange="true" />}
            />
            <Route
               path="my-announcement"
               element={<MyAnnouncement announcement={data} select="true" />}
            />
            <Route
               path="on-moderation"
               element={<OnModeration moderation={data} />}
            />
         </Route>

         {/* admin */}
         <Route
            path="/admin"
            element={
               <ProtectedRoutes
                  isAllowed={isAllowed([userRoles.ADMIN])}
                  component={AdminLayout}
                  fallbackPath="/"
               />
            }
         >
            <Route path="/admin" element={<Navigate to="application" />} />

            <Route
               path="application"
               element={
                  <Applications
                     acceptHandler={acceptHandler}
                     currentPage={currentPage}
                     currentSize={currentSize}
                     setCurrentPage={setCurrentPage}
                     setCurrenSize={setCurrenSize}
                     rejectedHandler={rejectedHandler}
                     setTitle={setTitle}
                     removeCard={removeCard}
                     title={title}
                  />
               }
            />
            <Route
               path="/admin/application/Name/:id=12N"
               element={
                  <AnnouncementAdminPage
                     roles="admin"
                     pages="application"
                     acceptHandler={acceptHandler}
                     rejectedHandler={rejectedHandler}
                  />
               }
            />
            <Route path="users/" element={<ReusableTable />} />
            <Route
               path={`users/${stat}/`}
               element={<Navigate to="booking" />}
            />
            <Route
               path="users/:userId/"
               element={<AdminUsersPage setState={setState} />}
            >
               <Route
                  index
                  path="booking"
                  element={<Bookings bookings={bookings} onChange="true" />}
               />
               <Route
                  path="my-announcement"
                  element={
                     <MyAnnouncement announcement={data} select="false" />
                  }
               />
            </Route>
            <Route
               path="/admin/users/:userId/my-announcement/:id=name"
               element={<AnnouncementAdminPage roles="admin" pages="user" />}
            />

            <Route
               path="all-housing"
               element={<AllHousing removeCard={removeCard} />}
            />
         </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
   )
}
