import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../layout/footer/Footer'
import { Header } from '../../layout/header/Header'
import { authActions } from '../../store/auth/authSlice'
import { getAnnouncement } from '../../store/user/profile/ProfileThunk'
import { Profile } from '../UI/profile/Profile'
import { MyProfileTabs } from './MyProfileTabs'

export function MyProfile() {
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

         <ProfileContainer>
            <Navigation>
               <NavStyle onClick={() => navigate('/main')}>Main </NavStyle>
               <ProfileStyle>/ My Profile</ProfileStyle>
            </Navigation>
            <div className="tabs">
               {/* <ProfileContainerTabs> */}
               <Profile roles="user" data={userDetailProfile} logOut={logOut} />
               {/* </ProfileContainerTabs> */}
               <ContainerTabs>
                  <MyProfileTabs state="true" />
               </ContainerTabs>
            </div>
         </ProfileContainer>
         <Footer />
      </MainContainer>
   )
}

const ProfileContainer = styled('div')`
   width: 100%;
   min-height: 100vh;
   padding-top: 2rem;
   gap: 3rem;
   display: flex;
   flex-direction: column;
   background: #f7f7f7;
   .tabs {
      display: flex;
      justify-content: space-between;
      aligin-items: flex-start;
      padding: 0 0 0 6rem;
   }
`

const ContainerTabs = styled('div')`
   width: 65%;
   height: auto;
`

const Navigation = styled('div')`
   width: 200px;
   margin-top: 5rem;
   margin-left: 6rem;
   display: flex;
   gap: 0.38rem;
`

const MainContainer = styled('div')`
   background: #f7f7f7;
   width: 100%;
   height: 100px;
`
const ProfileStyle = styled('p')`
   color: var(--primary-black, #363636);
   font-size: 0.875rem;
   font-weight: 400;
`
const NavStyle = styled('p')`
   color: var(--tertiary-light-gray, #c4c4c4);
   font-family: Inter;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   cursor: pointer;
`
