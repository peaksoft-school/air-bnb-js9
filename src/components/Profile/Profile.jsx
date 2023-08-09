import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import { Tabs } from '../tabs/Tabs'
import Profile from '../UI/profile/Profile'
import { getAnnouncement } from '../../store/profile/ProfileThunk'

const data = [
   {
      photo: 'https://images.pexels.com/photos/16419036/pexels-photo-16419036/free-photo-of-directional-signs-with-distance-on-post.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Gulzat',
      contact: 'gmail.com',
   },
]
export function UserProfile() {
   const logOut = () => {
      const navigate = ''
      console.log('navigate: ', navigate)
   }
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAnnouncement())
   }, [dispatch])
   return (
      <MainContainer>
         <Header />
         <NavContainer>
            <Navigation>
               {/* <Routes>
                  <Route path="/" element={<UserLayout />} />
               </Routes> */}
               <p>Main /</p>
               <p>Hotel /</p>
               <p>Naryn /</p>
               <p>Profile</p>
            </Navigation>
            <h3>Profile</h3>
         </NavContainer>
         <ProfileContainer>
            {data.map((item) => {
               return <Profile data={item} logOut={logOut} />
            })}
            <Tabs />
         </ProfileContainer>

         <Footer />
      </MainContainer>
   )
}
const ProfileContainer = styled('div')`
   display: flex;
   justify-content: center;
   gap: 180px;
   padding-bottom: 146px;
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
   height: 900px;
`
