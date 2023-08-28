import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainPages } from '../../pages/MainPages'

export function UserLayout() {
   return (
      <div>
         <MainPages />
         <Outlet />
      </div>
   )
}
