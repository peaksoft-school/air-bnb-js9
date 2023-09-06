import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainPages } from '../../pages/user/MainPages'

export function UserLayout() {
   return (
      <div>
         <MainPages />
         <Outlet />
      </div>
   )
}
