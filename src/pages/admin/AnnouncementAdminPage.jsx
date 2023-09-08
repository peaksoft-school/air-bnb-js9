import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Link, styled, Typography } from '@mui/material'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HouseSlidDetail } from '../../components/UI/house-detail/HouseSlidDetail'
import { NameOfHotel } from '../../components/UI/name-hotel/NameOfHotel'
import { house, Hotel, booked } from '../../utils/helpers'
import Feedback from '../../components/UI/feedback/Feedback'
import { Booked } from '../../components/UI/booked/Booked'
import { Favorites } from '../../components/UI/favorites/Favorites'
import { RatingChart } from '../../components/UI/rating/RatingChart'
import { getApplicationById } from '../../store/admin-application/ApplicationThunk'
import { axiosInstance } from '../../config/axiosInstance'

export function AnnouncementAdminPage({
   roles,
   pages,
   acceptHandler,
   // rejectedHandler,
}) {
   const [openModal, setOpenModal] = useState(false)
   const [announcement, setAnnouncement] = useState({})
   const { dataById } = useSelector((state) => state.application)
   const dispatch = useDispatch()
   const params = useParams()

   console.log('announcement-images: ', announcement.images)
   console.log('announcement: ', announcement)

   const getAnnouncementById = async (id) => {
      try {
         const response = await axiosInstance.get(
            `/api/admin/getByIdAnnouncements?announcementId=${id}`
         )

         setAnnouncement(response.data)
      } catch (error) {
         console.log('error: ', error)
      }
   }
   useEffect(() => {
      dispatch(getApplicationById(params.id))
      getAnnouncementById(params.id)
   }, [])
   const data = [
      {
         name: 'Bars Barsov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
         starRating: 2,
         like: 4,
         dislike: 2,
         avatar:
            'https://ca.slack-edge.com/T023L1WBFLH-U04553S5F4Y-b3857864c0e6-512',
      },
      {
         name: 'Beku Bekov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
         starRating: 3,
         like: 1,
         dislike: 5,
         avatar: '',
      },
      {
         name: 'Aziret Aziretov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
         starRating: 4,
         like: 5,
         dislike: 3,
         avatar:
            'https://ca.slack-edge.com/T023L1WBFLH-U03E00N1USF-0fc4b2f5d54e-512',
      },
      {
         name: 'Emir Emirov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
         starRating: 5,
         like: 4,
         dislike: 1,
         avatar: '',
      },
   ]
   const navigate = useNavigate()

   function backNavigation() {
      navigate(-1)
   }

   const openModalHandler = () => {
      setOpenModal((prev) => !prev)
   }

   const rejectedCartd = () => {
      // rejectedHandler(dataById.id)
      setOpenModal(false)
   }

   return roles === 'admin' ? (
      <div>
         {pages === 'application' ? (
            <Applications>
               <MainContainer>
                  <Navigate role="presentation">
                     <button
                        className="application"
                        onClick={() => backNavigation()}
                        type="button"
                     >
                        Application
                     </button>
                     / <p className="name">Name</p>
                  </Navigate>
                  <BlockMain>
                     <h2>Name</h2>
                     <Main>
                        <HouseSlidDetail images={house} />
                        <NameOfHotel
                           dataById={dataById}
                           openModal={openModal}
                           openModalHandler={openModalHandler}
                           acceptHandler={acceptHandler}
                           rejectedCartd={rejectedCartd}
                        />
                     </Main>
                  </BlockMain>
               </MainContainer>
            </Applications>
         ) : (
            <Container>
               <MainContainer>
                  <div role="presentation">
                     <StyledNavlink to="/admin/users/">
                        Users
                        <span> / {announcement.fullName} / </span>
                        <span
                           style={{
                              fontWeight: '700',
                              color: '#363636',
                           }}
                        >
                           Name
                        </span>
                     </StyledNavlink>
                  </div>
                  <BlockMain>
                     <h2>Name</h2>
                     <Main>
                        <HouseSlidDetail images={house} />
                        <NameOfHotel
                           pages={pages}
                           buttons="yes"
                           dataById={announcement}
                           openModal={openModal}
                           openModalHandler={openModalHandler}
                        />
                     </Main>
                  </BlockMain>
                  <h2>feedback</h2>
                  <ContainerFeetback>
                     <div>
                        {data.map((el) => (
                           <Feedback data={el} />
                        ))}
                     </div>
                     <RatingChart marginLeft="4rem" width="27rem" />
                  </ContainerFeetback>
               </MainContainer>
            </Container>
         )}
      </div>
   ) : (
      <Container>
         <MainContainer>
            <div role="presentation">
               <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="application">
                     Main
                  </Link>
                  <Link underline="hover" color="inherit" href="application">
                     Naryn
                  </Link>
                  <Link underline="hover" color="inherit" href="application">
                     Hotel
                  </Link>
                  <Link underline="hover" color="inherit" href="application">
                     Profile
                  </Link>
                  <Typography color="text.primary">Name</Typography>
               </Breadcrumbs>
            </div>
            <BlockMain>
               <h2>Name</h2>
               <Main>
                  <HouseSlidDetail images={house} />
                  <NameOfHotel
                     pages="users"
                     roles={roles}
                     dataById={Hotel}
                     openModal={openModal}
                     openModalHandler={openModalHandler}
                  />
               </Main>
            </BlockMain>
            <h2>Booked</h2>
            <BookedContainer>
               <Booked item={booked} />
            </BookedContainer>
            <h2>In favorites</h2>
            <FavoritesContainer>
               <Favorites item={booked} />
            </FavoritesContainer>
            <h2>feedback</h2>
            <ContainerFeetback>
               <div>
                  {data.map((el) => (
                     <Feedback data={el} />
                  ))}
               </div>
               <RatingChart />
            </ContainerFeetback>
         </MainContainer>
      </Container>
   )
}
const Applications = styled('div')(() => ({
   width: '100%',
   height: '80vh',
   display: 'flex',
   flexDirection: 'column',
   gap: '1.87rem',
   background: ' #F7F7F7',
   marginTop: '5.1rem',
}))
const Container = styled('div')(() => ({
   width: '100%',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '1.87rem',
   background: ' #F7F7F7',
   marginTop: '5.1rem',
   paddingTop: '3.1rem',
   h2: {
      color: ' #000',
      fontFamily: 'Inter',
      fontSize: ' 1.25rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      textTransform: 'uppercase',
   },
}))

const MainContainer = styled('div')(() => ({
   width: '100%',
   paddingLeft: '2.5rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '2.5rem',
}))
const Main = styled('main')(() => ({
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   gap: '4.26rem',
}))
const BlockMain = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.88rem',
}))

const ContainerFeetback = styled('div')(() => ({
   width: '78%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'flex-start',
}))
const BookedContainer = styled('div')(() => ({
   // width: '100%',
   display: 'flex',
   justifyContent: 'flex-start',
   alignItems: 'center',
   gap: '1.25rem',
}))

const FavoritesContainer = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '1.87rem',
}))
const Navigate = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '0.5rem',
   '.application': {
      color: ' var(--tertiary-light-gray, #C4C4C4)',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      background: '#F7F7F7',
      border: 'none',
   },
   '.name': {
      color: ' var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
   },
}))

const StyledNavlink = styled(NavLink)(() => ({
   color: '#C4C4C4',
}))
