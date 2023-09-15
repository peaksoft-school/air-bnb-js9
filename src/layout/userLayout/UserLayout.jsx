/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainPages } from '../../pages/user/main/MainPages'

export function UserLayout() {
   return (
      <div>
         <Outlet />
         <MainPages />
         <Outlet />
      </div>
   )
}
