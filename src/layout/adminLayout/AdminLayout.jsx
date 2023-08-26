/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Outlet } from 'react-router'
import { AdminHeader } from '../Header/AdminHeader'

export function AdminLayout() {
   return (
      <div>
         <AdminHeader />
         <Outlet />
      </div>
   )
}
