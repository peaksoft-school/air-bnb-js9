import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ProtectedRoutes } from './ProtectedRoutes'
import { UserLayout } from '../layout/userLayout/UserLayout'
import { AdminLayout } from '../layout/adminLayout/AdminLayout'
import { userRoles } from '../utils/constants'
import { ReusableTable } from '../components/table/Table'
import { AddAnouncementForm } from '../components/anouncement/Anouncement'
import { Bookings } from '../components/UI/tabs/Bookings'
import { MyAnnouncement } from '../components/UI/tabs/MyAnnouncement'
import AdminUsersPage from '../pages/admin/users/AdminUsersPage'
import AnnouncementGetAll from '../components/anouncement/AnnouncementGetAll'
import { Favorites } from '../components/UI/favorites/Favorites'
import { UserProfile } from '../components/Profile/Profile'
import { NotFound } from '../components/UI/404/NotFound'
import { OnModeration } from '../components/UI/tabs/OnModeration'
import { ApplicatioinsRoute } from '../pages/admin/ApplicatioinsRoute'
import { AnnouncementAdminPage } from '../pages/admin/AnnouncementAdminPage'
import { AnnouncementDetailPage } from '../pages/user/main/get-by-id/AnnouncementDetailPage'

export function AppRoutes() {
   const { users, bookings } = useSelector((state) => state.admin)
   const role = useSelector((state) => state.auth.role)

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
            path="/main/AddAnouncementForm"
            element={<AddAnouncementForm />}
         />

         <Route path="favorites" element={<Favorites />} />

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
               element={<MyAnnouncement announcement={users} select="true" />}
            />
            <Route
               path="on-moderation"
               element={<OnModeration moderation={users} />}
            />
         </Route>

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
               path="/admin/application/:cardId"
               element={<ApplicatioinsRoute booleanPage="announcement" />}
            />

            <Route path="users" element={<ReusableTable />} />
            <Route path="users/:userId" element={<AdminUsersPage />}>
               <Route
                  index
                  path="booking"
                  element={<Bookings bookings={bookings} onChange="true" />}
               />
               <Route
                  path="my-announcement"
                  element={
                     <MyAnnouncement announcement={users} select="false" />
                  }
               />
            </Route>
            <Route
               path="/admin/users/:userId/my-announcement/:id=name"
               element={<AnnouncementAdminPage roles="admin" pages="user" />}
            />

            <Route
               path="all-housing"
               element={<ApplicatioinsRoute booleanPage="all-housing" />}
            />
         </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
   )
}
