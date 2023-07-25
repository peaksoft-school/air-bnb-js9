import React from 'react'
import { AnnouncementAdminPage } from '../../containers/admin/AnnouncementAdminPage'
import { AdminHeader } from '../Header/AdminHeader'

export function AdminLayout() {
   return (
      <div>
         <AdminHeader />
         <AnnouncementAdminPage />
      </div>
   )
}
