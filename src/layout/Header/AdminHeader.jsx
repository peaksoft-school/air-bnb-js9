import React, { useState } from 'react'
import { styled } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import { AirBNBIcon } from '../../assets/icons/index'
import { MenuEditAndDelete } from '../../components/UI/menu/MenuEditAndDelete'

export function AdminHeader() {
   const [meatBalls, setMeatBalls] = useState(false)
   const location = useLocation()

   const toggleMeatBalls = () => {
      setMeatBalls(!meatBalls)
   }

   return (
      <Header>
         <div className="header-block">
            <AirBNBIcon style={{ height: '4.5rem', width: '4.5rem' }} />
            <div className="nav">
               <StyleNavLink
                  to="/application"
                  isActive={location.pathname === '/application'}
               >
                  <p>Application</p>
               </StyleNavLink>

               <StyleNavLink
                  to="/admin/users"
                  isActive={location.pathname === '/users'}
               >
                  <p>Users</p>
               </StyleNavLink>

               <StyleNavLink
                  to="/all-housing"
                  isActive={location.pathname === '/all-housing'}
               >
                  <p>All housing</p>
               </StyleNavLink>
            </div>
         </div>
         <HeaderMenu onClick={toggleMeatBalls}>
            <p>Administrator</p>
            <MenuEditAndDelete
               open={meatBalls}
               openHandler={toggleMeatBalls}
               state="true"
               right="6.5vw"
               top="8vh"
            >
               <h3>Accept</h3>
               <h3>Reject</h3>
               <h3>Delete</h3>
            </MenuEditAndDelete>
         </HeaderMenu>
      </Header>
   )
}

const Header = styled('header')(() => ({
   width: '100%',
   height: '5.125rem',
   background: '#0B0B0B',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '0.87rem 2.4rem',

   '.header-block': {
      width: '45%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   '.nav': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      gap: '2.25rem',
   },
}))

const HeaderMenu = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '0.5rem',
   p: {
      color: ' #E5E5E5',
      fontFamily: 'Inter',
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
   },
}))

const StyleNavLink = styled(NavLink)(({ isActive }) => ({
   textDecoration: 'uppercase',
   color: isActive ? '#FF4B4B' : ' #E5E5E5',

   p: {
      fontFamily: 'Inter',
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
   },

   '&:hover': {
      color: '#FF4B4B',
   },
   '&:focus': {
      color: '#FF4B4B',
   },
}))
