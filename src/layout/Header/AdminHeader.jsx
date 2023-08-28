import React, { useState } from 'react'
import { MenuItem, styled } from '@mui/material'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AirBNBIcon, SelectionIcon } from '../../assets/icons/index'
import { MeatBalls } from '../../components/UI/meat-balls/MeatBalls'
import { authActions } from '../../store/auth/authSlice'

export function AdminHeader() {
   const [meatBalls, setMeatBalls] = useState(null)
   const location = useLocation()
   const { userId } = useParams()
   const dispatch = useDispatch()

   const toggleMeatBalls = (e) => {
      setMeatBalls(e.currentTarget)
   }
   const closeMeatBallsHeandler = () => {
      setMeatBalls(null)
   }

   const logoutHnadler = () => {
      dispatch(authActions.logout())
   }

   const open = Boolean(meatBalls)
   const idd = open ? 'simple-popover' : undefined

   return (
      <Header>
         <div className="header-block">
            <AirBNBIcon style={{ height: '4.5rem', width: '4.5rem' }} />
            <div className="nav">
               <StyleNavLink
                  to="/admin/application"
                  active={
                     location.pathname === '/admin/application' ||
                     location.pathname === '/admin/application/name'
                        ? 'true'
                        : 'false'
                  }
               >
                  <p>Application</p>
               </StyleNavLink>

               <StyleNavLink
                  to="/admin/users"
                  active={
                     location.pathname === '/admin/users/' ||
                     location.pathname === `/admin/users/${userId}` ||
                     location.pathname === `/admin/users/${userId}/booking` ||
                     location.pathname ===
                        `/admin/users/${userId}/my-announcement`
                        ? 'true'
                        : 'false'
                  }
               >
                  <p>Users</p>
               </StyleNavLink>

               <StyleNavLink
                  to="/all-housing"
                  active={
                     location.pathname === '/all-housing' ? 'true' : 'false'
                  }
               >
                  <p>All housing</p>
               </StyleNavLink>
            </div>
         </div>
         <HeaderMenu onClick={toggleMeatBalls}>
            <p>Administrator</p>
            <SelectionIcon />
         </HeaderMenu>
         <MeatBalls
            anchorEl={meatBalls}
            open={open}
            close={closeMeatBallsHeandler}
            id={idd}
            propsVertical="bottom"
            propsHorizontal="left"
            width=" 10rem"
            height=" 3rem"
            margin="10px 0 0 0"
         >
            <MenuItem onClick={logoutHnadler}>Log out</MenuItem>
         </MeatBalls>
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
   position: 'fixed',
   zIndex: '11',
   top: '0rem',

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

const StyleNavLink = styled(NavLink)(({ active }) => ({
   textDecoration: 'uppercase',
   color: active === 'true' ? '#FF4B4B' : ' #E5E5E5',

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
