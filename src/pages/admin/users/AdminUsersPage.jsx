import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Button } from '../../../components/UI/button/Button'
import { Profile } from '../../../components/UI/profile/Profile'
import { getAdminUsersCardsIdRequest } from '../../../api/adminUsersServise'
import {
   getAdminUsersCardsId,
   getBookings,
} from '../../../store/admin/users/UsersThunk'
import { AdminTabs } from '../../../components/UI/tabs/admin/AdminTabs'

export function AdminUsersPage({ setUserIdState }) {
   const [userData, setUserData] = useState({})
   const [showButton, setShowButton] = useState(false)

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
      setUserIdState(userId)
   }, [userId])

   return (
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
            <div className="profile">
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
                  >
                     block all announcement
                  </Button>
               ) : null}
            </div>
         </UserSide>
         <CardSide>
            <AdminTabs
               state="false"
               showButtonHandler={showButtonHandler}
               closeButtonHandler={closeButtonHandler}
            />
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
   '.profile': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2.25rem',
   },
}))

const CardSide = styled('div')(() => ({
   width: '70%',
   paddingTop: '4.7rem',
}))

const StyledNavlink = styled(NavLink)(() => ({
   color: '#C4C4C4',
}))
