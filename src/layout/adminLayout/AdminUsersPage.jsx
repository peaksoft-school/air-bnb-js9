import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Profile } from '../../components/UI/profile/Profile'
import { Tabs } from '../../components/tabs/Tabs'
import { getAdminUsersCardsIdRequest } from '../../api/adminUsersServise'
import {
   getAdminUsersCardsId,
   getBookings,
} from '../../store/admin-users/adminUsersThunk'

function AdminUsersPage() {
   const [userData, setUserData] = useState({})
   const { userId } = useParams()
   const dispatch = useDispatch()

   const getUsersById = async () => {
      try {
         const { data } = await getAdminUsersCardsIdRequest(userId)
         setUserData(data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getUsersById()
      dispatch(getAdminUsersCardsId(userId))
      dispatch(getBookings(userId))
   }, [])

   return (
      <Container>
         <UserSide>
            <NavLink to="/admin/users/">
               Users
               <span style={{ fontWeight: '700', color: '#363636' }}>
                  {' '}
                  / {userData.fullName}
               </span>
            </NavLink>
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
            </div>
         </UserSide>
         <CardSide>
            <Tabs state="false" />
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
}))

const UserSide = styled('div')(() => ({
   width: '32%',
}))

const CardSide = styled('div')(() => ({
   width: '70%',
   paddingTop: '4.7rem',
}))

// const StyledNavlink = styled(NavLink)(() => ({
//    marginBottom: '2.5rem',
// }))
export default AdminUsersPage
