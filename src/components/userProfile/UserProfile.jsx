import { styled } from '@mui/material'
import { Link, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import Profile from '../UI/profile/Profile'
import { Tabs } from '../tabs/Tabs'
import { getAnnouncement } from '../../store/profile/ProfileThunk'
import { MainPages } from '../../pages/MainPages'

export function UserProfile() {
   const dispatch = useDispatch()
   //    const dataAn = useSelector((state) => state.announcement.data)
   //    const status = useSelector((state) => state.announcement.status)
   const data = [
      {
         photo: 'https://images.pexels.com/photos/17643753/pexels-photo-17643753/free-photo-of-summer-garden-grass-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         name: 'gul',
         contact: 'caknnjkn',
      },
   ]

   useEffect(() => {
      //   if (status === '') {
      dispatch(getAnnouncement())
      //   }
      //   if (status === 'loading') {
      //      return <div>Loading...</div>
      //   }
      //   if (status === 'failed') {
      //      return <div>Error: Unable to fetch posts...</div>
      //   }
      //   return {}
   }, [])
   return (
      <MainContainer>
         <Header />
         <Container>
            <ProfileContainer>
               <div>
                  <Routes>
                     <Route path="main" element={<MainPages />} />
                  </Routes>
                  <Link to="main">Main/</Link>
                  <Link to="naryn">Naryn/</Link>
                  <Link to="hotel">Hotel/</Link>
                  <Link to="naryn">PROFILE</Link>
               </div>
               <h2>Profile</h2>
               <Profile data={data} />
            </ProfileContainer>
            <Tabs />
         </Container>
         <Footer />
      </MainContainer>
   )
}
const Container = styled('div')`
   display: flex;
   justify-content: start;
   box-align: center;
   align-content: center;
   gap: 200px;
`
const MainContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 90px;
`
const ProfileContainer = styled('div')`
   width: 33rem;
   height: 600px;
`
