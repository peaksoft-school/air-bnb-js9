/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Outlet } from 'react-router'
import { MainPages } from '../../pages/MainPages'

export function UserLayout() {
   return (
      <div>
         <Outlet />
         <MainPages />
      </div>
   )
}
