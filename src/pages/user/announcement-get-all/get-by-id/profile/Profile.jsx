import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../../../../layout/header/Header'
import { Footer } from '../../../../../layout/footer/Footer'
import { Profile } from '../../../../../components/UI/profile/Profile'
import { getAnnouncement } from '../../../../../store/user/profile/ProfileThunk'
import { authActions } from '../../../../../store/auth/authSlice'
import { Tabs } from '../../../../../components/UI/tabs/Tabs'

export function UserProfile() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { region } = useParams()

   const { data } = useSelector((state) => state.getannouncement)

   const logOut = () => {
      dispatch(authActions.logout())
      navigate('/')
   }

   const userDetailProfile = {
      photo: data.image,
      email: data.contact,
      fullName: data.name,
   }

   useEffect(() => {
      dispatch(getAnnouncement())
   }, [])

   return (
      <MainContainer>
         <Header profile="true" login="false" />
         <ContainerNavigate>
            <button type="button" onClick={() => navigate('/main')}>
               Main /
            </button>
            <button
               type="button"
               onClick={() => navigate(`/main/${region}/region`)}
            >
               {region} /
            </button>
            <button type="button" onClick={() => navigate(-1)}>
               Hotel
            </button>
            <p> / Profile</p>
         </ContainerNavigate>
         <p className="profile">Profile</p>
         <ProfileContainer>
            <ProfileContainerTabs>
               <Profile
                  width="100%"
                  height="30%"
                  data={userDetailProfile}
                  logOut={logOut}
               />
            </ProfileContainerTabs>
            <ContainerTabs>
               <Tabs
                  announcement={data.announcements}
                  bookings={data.bookings}
               />
            </ContainerTabs>
         </ProfileContainer>
         <Footer />
      </MainContainer>
   )
}

const ProfileContainer = styled('div')`
   background: #f7f7f7;
   display: flex;
   justify-content: center;
   width: 100%;
   gap: 3rem;
`

const ContainerTabs = styled('div')`
   width: 65%;
   flex-wrap: wrap;
   height: auto;
`
const ProfileContainerTabs = styled('div')`
   height: 1100px;
   width: 25%;
`

const MainContainer = styled('div')`
   background: #f7f7f7;
   width: 100%;
   height: 100px;
   .profile {
      background: #f7f7f7;
      padding: 0 0 1.37rem 3.3rem;
      color: var(--primary-black, #363636);
      font-family: Inter;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-transform: uppercase;
   }
`

const ContainerNavigate = styled('div')(() => ({
   display: 'flex',
   gap: '0.5rem',
   padding: '8rem 0 2.25rem 3.3rem ',
   background: '#F7F7F7',
   button: {
      background: 'rgba(0 , 0, 0, 0.0)',
      border: 'none',
      color: 'var(--tertiary-light-gray, #C4C4C4)',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      cursor: 'pointer',
   },
   p: {
      color: ' var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      cursor: 'pointer',
   },
}))
