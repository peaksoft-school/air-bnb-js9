import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import { Tabs } from '../tabs/Tabs'
import Profile from '../UI/profile/Profile'

export function UserProfile() {
   const { data } = useSelector((state) => state.getannouncement)

   const logOut = () => {
      const navigate = ''
      console.log('navigate: ', navigate)
   }
   const userDetailProfile = {
      photo: data.image,
      contact: data.contact,
      name: data.name,
   }

   return (
      <div>
         <MainContainer>
            <Header />
            <NavContainer>
               <Navigation>
                  <p>Main /</p>
                  <p>Hotel /</p>
                  <p>Naryn /</p>
                  <p>Profile</p>
               </Navigation>

               <h3>Profile</h3>
            </NavContainer>
            <ProfileContainer>
               <ProfileContainerTabs>
                  <Profile data={userDetailProfile} logOut={logOut} />
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
      </div>
   )
}

const ProfileContainer = styled('div')`
   display: flex;
   justify-content: center;
   width: 100%;
   gap: 2rem;
`

const ContainerTabs = styled('div')`
   width: 80%;
   flex-wrap: wrap;
   height: auto;
`
const ProfileContainerTabs = styled('div')`
   height: 1100px;
`
const NavContainer = styled('div')`
   display: flex;
   flex-direction: column;
   padding: 22px 100px;
`
const Navigation = styled('div')`
   display: flex;
   padding: 40px 0;
`
const MainContainer = styled('div')`
   background: #f7f7f7;
   width: 100%;
   height: 100px;
`
