import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ProtectedRoutes } from './ProtectedRoutes'
import { UserLayout } from '../layout/userLayout/UserLayout'
import { AdminLayout } from '../layout/adminLayout/AdminLayout'
import { userRoles } from '../utils/constants'
import { ReusableTable } from '../components/table/Table'
import { AddAnouncementForm } from '../pages/user/add-announcement/Anouncement'
import { Bookings } from '../components/UI/tabs/Bookings'
import { MyAnnouncement } from '../components/UI/tabs/MyAnnouncement'
import AdminUsersPage from '../pages/admin/users/AdminUsersPage'
import AnnouncementGetAll from '../pages/user/announcement-get-all/AnnouncementGetAll'
import { UserProfile } from '../pages/user/announcement-get-all/get-by-id/profile/Profile'
import { NotFound } from '../components/UI/404/NotFound'
import { OnModeration } from '../components/UI/tabs/OnModeration'
import { ApplicatioinsRoute } from '../pages/admin/ApplicatioinsRoute'
import { AnnouncementDetailPage } from '../pages/user/announcement-get-all/get-by-id/AnnouncementDetailPage'
import { AnnouncementAdminPage } from '../pages/admin/AnnouncementAdminPage'
import { Favorite } from '../pages/user/announcement-get-all/favorite/Favorite'

export function AppRoutes() {
   const { announcements, bookings } = useSelector((state) => state.admin)
   console.log('announcements:', announcements)
   console.log('bookings:', bookings)
   const role = useSelector((state) => state.auth.role)
   const { data } = useSelector((state) => state.getannouncement)
   const [userIdState, setUserIdState] = useState('')
   // console.log(userIdState, 'userIdState')
   const isAllowed = (roles) => {
      return roles.includes(role)
   }

   return (
      <Routes>
         <Route path="/" element={<Navigate to="/main" />} />
         <Route
            path="/main"
            element={
               <ProtectedRoutes
                  isAllowed={isAllowed([userRoles.GUEST, userRoles.USER])}
                  component={UserLayout}
                  fallbackPath="/admin"
               />
            }
         />
         <Route path="/main/:region/region" element={<AnnouncementGetAll />} />
         <Route
            path="/main/:region/region/:houseId"
            element={<AnnouncementDetailPage />}
         />

         <Route
            path="/main/:region/region/:houseId/profile/"
            element={<UserProfile />}
         >
            <Route
               path="bookings"
               element={<Bookings bookings={data.bookings} onChange="true" />}
            />
            <Route
               path="my-announcement"
               element={
                  <MyAnnouncement
                     announcement={data.announcements}
                     select="true"
                  />
               }
            />
            <Route
               path="on-moderation"
               element={<OnModeration moderation={announcements} />}
            />
         </Route>

         <Route
            path="/profile"
            element={<Navigate to="/profile/my-announcement" />}
         />
         <Route
            path="/main/AddAnouncementForm"
            element={<AddAnouncementForm />}
         />

         <Route path="/main/favotite" element={<Favorite />} />
         {/* admin */}
         <Route path="/admin" element={<Navigate to="application" />} />
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
            <Route
               path="application/"
               element={<ApplicatioinsRoute booleanPage="applications" />}
            />

            <Route
               path="/admin/application/Name/:cardId"
               element={<ApplicatioinsRoute booleanPage="announcement" />}
            />
            <Route
               path="all-housing"
               element={<ApplicatioinsRoute booleanPage="all-housing" />}
            />

            <Route path="users/" element={<ReusableTable />} />
            <Route
               path={`users/${userIdState}/`}
               element={<Navigate to="booking" />}
            />
            <Route
               path="users/:userId/"
               element={<AdminUsersPage setUserIdState={setUserIdState} />}
            >
               <Route
                  index
                  path="booking"
                  element={<Bookings bookings={bookings} onChange="true" />}
               />
               <Route
                  path="my-announcement"
                  element={
                     <MyAnnouncement
                        select="false"
                        announcement={announcements}
                     />
                  }
               />
            </Route>
            <Route
               path="/admin/users/:userId/my-announcement/:id=name"
               element={<AnnouncementAdminPage roles="admin" pages="user" />}
            />
         </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
   )
}
