import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import { Tabs } from '../tabs/Tabs'
import { Profile } from '../UI/profile/Profile'
import { getAnnouncement } from '../../store/profile/ProfileThunk'
import { authActions } from '../../store/auth/authSlice'

export function UserProfile() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

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
         <Header profile="true" />
         <NavContainer>
            <Navigation>
               <ButtonStyle type="button" onClick={() => navigate('/')}>
                  Main /
               </ButtonStyle>
               <ButtonStyle type="button" onClick={() => navigate('/hotel')}>
                  Hotel /
               </ButtonStyle>
               <ButtonStyle type="button" onClick={() => navigate('/naryn')}>
                  Naryn /
               </ButtonStyle>
               <ButtonStyle type="button" onClick={() => navigate(`/Profile`)}>
                  Profile
               </ButtonStyle>
            </Navigation>

            <h3>Profile</h3>
         </NavContainer>
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
const ButtonStyle = styled('button')`
   cursor: pointer;
   border: none;
   background-color: white;
`

const ProfileContainer = styled('div')`
   display: flex;
   justify-content: center;
   width: 204vh;
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
const NavContainer = styled('div')`
   display: flex;
   flex-direction: column;
   padding: 22px 100px;
`
const Navigation = styled('div')`
   display: flex;
   justify-content: space-around;
   padding: 40px 0;
   width: 200px;
   :nth-child(4) {
      color: black;
      font-size: bold;
      font-weight: 400;
   }
`

const MainContainer = styled('div')`
   background: #f7f7f7;
   width: 100%;
   height: 100px;
`
