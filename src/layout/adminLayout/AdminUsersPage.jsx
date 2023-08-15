import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material'
import { Profile } from '../../components/UI/profile/Profile'
import { Tabs } from '../../components/tabs/Tabs'

function AdminUsersPage() {
   const userData = [
      {
         name: 'Медер Медербеков',
         contact: 'mederbekov@gmail.com',
         photo: '',
      },
   ]
   return (
      <Container>
         <UserSide>
            <p style={{ marginBottom: '2.5rem', color: '#C4C4C4' }}>
               Users
               <span style={{ fontWeight: '700', color: '#363636' }}>
                  {' '}
                  / Meder Mederbekov
               </span>
            </p>
            <h3 style={{ marginBottom: '1.40rem' }}>MEDER MEDERBEKOV</h3>
            <div>
               {userData.map((el) => (
                  <Profile
                     data={el}
                     width="29vw"
                     height="6%"
                     paddingTop="1rem"
                  />
               ))}
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
   padding: '2.88rem 0rem 2.88rem 2.5rem',
}))

const UserSide = styled('div')(() => ({
   width: '32%',
}))

const CardSide = styled('div')(() => ({
   width: '70%',
   paddingTop: '4.7rem',
}))

export default AdminUsersPage
