import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import { Profile } from '../UI/profile/Profile'
import { getAnnouncement } from '../../store/profile/ProfileThunk'
import { authActions } from '../../store/auth/authSlice'
import { Tabs } from '../UI/tabs/Tabs'

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
   }, [dispatch])

   return (
      <MainContainer>
         <Header profile="true" />

         <ProfileContainer>
            <Navigation>
               <NavStyle onClick={() => navigate('/')}>Main /</NavStyle>
               <NavStyle onClick={() => navigate('/hotel')}>Hotel /</NavStyle>
               <NavStyle onClick={() => navigate('/naryn')}>Naryn /</NavStyle>
               <ProfileStyle onClick={() => navigate(`/Profile`)}>
                  Profile
               </ProfileStyle>
            </Navigation>
            <div className="tabs">
               <ProfileContainerTabs>
                  <Profile
                     width="100%"
                     height="30%"
                     data={userDetailProfile}
                     logOut={logOut}
                  />
               </ProfileContainerTabs>
               <ContainerTabs>
                  <Tabs state="true" />
               </ContainerTabs>
            </div>
         </ProfileContainer>
         <Footer />
      </MainContainer>
   )
}

const ProfileContainer = styled('div')`
   padding-top: 2rem;
   width: 100%;
   gap: 3rem;
   display: flex;
   flex-direction: column;
   justify-content: center;

   .tabs {
      display: flex;
      justify-content: space-between;
   }
`

const ContainerTabs = styled('div')`
   width: 65%;
   height: auto;
`
const ProfileContainerTabs = styled('div')`
   height: 1100px;
   width: 25%;
   margin-left: 6rem;
`

const Navigation = styled('div')`
   width: 200px;
   margin-top: 5rem;
   display: flex;
   margin-left: 6rem;
   justify-content: space-around;
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
const NavStyle = styled(Link)`
   color: var(--tertiary-light-gray, #c4c4c4);
   font-family: Inter;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
`
