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
import {
   getAnnouncementByIdHandler,
   // getAnnouncementFeedbacks,
} from '../../store/getAnnouncement/GetAnnouncementByIdThunk'

export function AnnouncementAdminPage({
   roles,
   pages,
   acceptHandler,
   // rejectedHandler,
}) {
   const [openModal, setOpenModal] = useState(false)
   const { dataById } = useSelector((state) => state.application)
   const { AdminAnnouncementById } = useSelector(
      (state) => state.AnnouncementById
   )
   const dispatch = useDispatch()
   const params = useParams()

   useEffect(() => {
      dispatch(getApplicationById(params.id))
      dispatch(getAnnouncementByIdHandler(params.id))
      // dispatch(getAnnouncementFeedbacks(params.id))
   }, [dispatch])

   const data = [
      {
         feedbackUserFullName: 'Barsbek Makhmatov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
         rating: 2,
         likeCount: 4,
         disLikeCount: 2,
         feedbackUserImage:
            'https://ca.slack-edge.com/T023L1WBFLH-U04553S5F4Y-b3857864c0e6-512',
         createdAt: '29-11-2023',
         id: '1',
      },
      {
         feedbackUserFullName: 'Beku Bekov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
         rating: 3,
         likeCount: 1,
         disLikeCount: 5,
         feedbackUserImage: '',
         createdAt: '29-11-2023',
         id: '2',
      },
      {
         feedbackUserFullName: 'Aziret Aziretov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
         rating: 4,
         likeCount: 5,
         disLikeCount: 3,
         feedbackUserImage:
            'https://ca.slack-edge.com/T023L1WBFLH-U03E00N1USF-0fc4b2f5d54e-512',
         images: [
            'https://www.diybunker.com/wp-content/uploads/2021/09/home-2-1024x751.jpg',
            'https://foyr.com/learn/wp-content/uploads/2022/05/family-room-in-a-house-1024x683.jpg',
            'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/3/2021/10/18115838/modern-house-design.jpg',
            'https://archello.s3.eu-central-1.amazonaws.com/images/2020/06/20/Contemporary-House-Interior-Design-1.1592613106.9601.jpg',
         ],
         createdAt: '29-11-2023',
         id: '3',
      },
      {
         feedbackUserFullName: 'Emir Duishonaliev',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
         rating: 5,
         likeCount: 4,
         disLikeCount: 1,
         feedbackUserImage: '',
         createdAt: '29-11-2023',
         id: '4',
      },
      {
         feedbackUserFullName: 'Aziret Aziretov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
         rating: 4,
         likeCount: 5,
         disLikeCount: 3,
         feedbackUserImage:
            'https://ca.slack-edge.com/T023L1WBFLH-U03E00N1USF-0fc4b2f5d54e-512',
         createdAt: '29-11-2023',
         id: '5',
      },
      {
         feedbackUserFullName: 'Bars Barsov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
         rating: 2,
         likeCount: 4,
         disLikeCount: 2,
         feedbackUserImage:
            'https://ca.slack-edge.com/T023L1WBFLH-U04553S5F4Y-b3857864c0e6-512',
         createdAt: '29-11-2023',
         id: '6',
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
                        <StyledNavlink
                           to={`/admin/users/${params.userId}/my-announcement`}
                        >
                           / {AdminAnnouncementById.fullName} /{' '}
                        </StyledNavlink>
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
                           dataById={AdminAnnouncementById}
                           openModal={openModal}
                           openModalHandler={openModalHandler}
                        />
                     </Main>
                  </BlockMain>
                  <h2>feedback</h2>
                  <ContainerFeetback>
                     <div>
                        {data?.map((el) => (
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
