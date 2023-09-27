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
import { AdminUsersPage } from '../pages/admin/users/AdminUsersPage'
import AnnouncementGetAll from '../pages/user/announcement-get-all/AnnouncementGetAll'
import { UserProfile } from '../pages/user/announcement-get-all/get-by-id/profile/Profile'
import { NotFound } from '../components/UI/404/NotFound'
import { OnModeration } from '../components/UI/tabs/OnModeration'
import { ApplicatioinsRoute } from '../pages/admin/ApplicatioinsRoute'
import { AnnouncementDetailPage } from '../pages/user/announcement-get-all/get-by-id/AnnouncementDetailPage'
import { AnnouncementAdminPage } from '../pages/admin/AnnouncementAdminPage'
import { Favorite } from '../pages/user/announcement-get-all/favorite/Favorite'
import { MyProfile } from '../components/my-profile/MyProfile'
import { AdminBookings } from '../components/UI/tabs/admin/AdminBookings'
import { AdminMyAnnouncement } from '../components/UI/tabs/admin/AdminMyAnnouncement'

export function AppRoutes() {
   const [userIdState, setUserIdState] = useState('')
   // const { announcements, bookings } = useSelector((state) => state.admin)
   const role = useSelector((state) => state.auth.role)
   const { data } = useSelector((state) => state.getannouncement)

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
         {/* add announcement */}
         <Route
            path="/main/AddAnouncementForm"
            element={<AddAnouncementForm />}
         />

         {/* popular apartment */}
         <Route
            path="/main/:houseId/popular-apartment"
            element={<AnnouncementDetailPage navigateRoute="hotel" />}
         />

         {/* popular house */}
         <Route
            path="/main/:houseId/popular-house"
            element={<AnnouncementDetailPage navigateRoute="hotel" />}
         />

         {/* get all cards */}
         <Route path="/main/:region/region" element={<AnnouncementGetAll />} />
         <Route
            path="/main/:region/region/:houseId"
            element={<AnnouncementDetailPage navigateRoute="region" />}
         />
         {/* user profile */}
         <Route
            path="/main/:region/region/:houseId/profile/"
            element={<UserProfile />}
         >
            <Route path="bookings" element={<Bookings onChange="true" />} />
            <Route
               path="my-announcement"
               element={<MyAnnouncement select="true" />}
            />
            <Route path="on-moderation" element={<OnModeration />} />
         </Route>

         {/* my profile */}
         <Route path="/main/my-profile" element={<MyProfile />}>
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
            <Route path="on-moderation" element={<OnModeration />} />
         </Route>

         <Route path="/main/favotite" element={<Favorite />} />
         {/* navigate */}
         <Route
            path="/main/NARYN/region/5/profile"
            element={
               <Navigate to="/main/NARYN/region/5/profile/my-announcement" />
            }
         />
         <Route
            path="/main/my-profile"
            element={<Navigate to="/main/my-profile/my-announcement" />}
         />
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
               element={<Navigate to="bookings" />}
            />
            <Route
               path="users/:userId/"
               element={<AdminUsersPage setUserIdState={setUserIdState} />}
            >
               <Route path="bookings" element={<AdminBookings />} />
               <Route
                  path="my-announcement"
                  element={<AdminMyAnnouncement />}
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
