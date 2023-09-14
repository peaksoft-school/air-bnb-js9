import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/UI/button/Button'
import { Profile } from '../../components/UI/profile/Profile'
import { Tabs } from '../../components/UI/tabs/Tabs'
import { getAdminUsersCardsIdRequest } from '../../api/adminUsersServise'
import {
   getAdminUsersCardsId,
   getBookings,
} from '../../store/admin-users/adminUsersThunk'

function AdminUsersPage({ setState }) {
   const [userData, setUserData] = useState({})
   const [showButton, setShowButton] = useState(false)
   const { toggle } = useSelector((state) => state.application)

   const { userId } = useParams()
   const dispatch = useDispatch()

   const showButtonHandler = () => {
      setShowButton(true)
   }

   const closeButtonHandler = () => {
      setShowButton(false)
   }
   const getUsersById = async (id) => {
      try {
         const { data } = await getAdminUsersCardsIdRequest(id)
         setUserData(data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getUsersById(userId)
      dispatch(getAdminUsersCardsId(userId))
      dispatch(getBookings(userId))
      setState(userId)
   }, [userId])

   return toggle ? (
      <Outlet />
   ) : (
      <Container>
         <UserSide>
            <StyledNavlink to="/admin/users/">
               Users
               <span
                  style={{
                     fontWeight: '700',
                     color: '#363636',
                  }}
               >
                  {' '}
                  / {userData.fullName}
               </span>
            </StyledNavlink>
            <h3 style={{ marginBottom: '1.40rem', marginTop: '2.5rem' }}>
               {userData.fullName}
            </h3>
            <div>
               <Profile
                  data={userData}
                  width="29vw"
                  height="6%"
                  paddingTop="1rem"
               />

               {showButton ? (
                  <Button
                     variant="contained"
                     bgColor="#DD8A08"
                     color="white"
                     width="350px"
                     marginTop="2rem"
                     marginLeft="2.8rem"
                  >
                     block all announcement
                  </Button>
               ) : null}
            </div>
         </UserSide>
         <CardSide>
            <Tabs
               state="false"
               showButtonHandler={showButtonHandler}
               closeButtonHandler={closeButtonHandler}
            />
            <Outlet />
         </CardSide>
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   gap: '2rem',
   padding: '2.90rem 0rem 2.88rem 2.5rem',
   cursor: 'pointer',
   marginTop: '5rem',
}))

const UserSide = styled('div')(() => ({
   width: '32%',
}))

const CardSide = styled('div')(() => ({
   width: '70%',
   paddingTop: '4.7rem',
}))

const StyledNavlink = styled(NavLink)(() => ({
   color: '#C4C4C4',
}))
export default AdminUsersPage
