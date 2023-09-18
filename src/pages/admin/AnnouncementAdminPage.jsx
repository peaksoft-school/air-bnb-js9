import React, { useEffect, useState } from 'react'
import { Breadcrumbs, styled, Typography } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HouseSlidDetail } from '../../components/UI/house-detail/HouseSlidDetail'
import { NameOfHotel } from '../../components/UI/name-hotel/NameOfHotel'
import { house, Hotel } from '../../utils/helpers'
import Feedback from '../../components/UI/feedback/Feedback'
import { Booked } from '../../components/UI/booked/Booked'
import { Favorites } from '../../components/UI/favorites/Favorites'
import {
   deleteAnnouncement,
   getByIdAnnouncement,
} from '../../store/innerPage/InnerPageThunk'
import { toastSnackbar } from '../../components/UI/snackbar/Snackbar'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'

export function AnnouncementAdminPage({
   roles,
   pages,
   acceptHandler,
   AdminAnnouncementById,
   params,
}) {
   const [openModal, setOpenModal] = useState(false)
   const dispatch = useDispatch()
   const { announId } = useParams()
   const { announcement } = useSelector((state) => state.annByID)

   const { toastType } = toastSnackbar()
   useEffect(() => {
      dispatch(getByIdAnnouncement(announId))
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
   const removeAnnouncement = () => {
      const data = {
         id: announId,
         toastType,
         navigate,
      }
      dispatch(deleteAnnouncement(data))

      openModalHandler()
   }
   const rejectedCartd = () => {
      setOpenModal(false)
   }

   const applicationByIdImages = announcement.images?.map((item) => item.images)
   const images = Array.isArray(applicationByIdImages)
      ? announcement.images?.map((image, index) => ({
           id: index + 1,
           original: image,
           thumbnail: image,
        }))
      : []
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
                     <StyledLink to="/admin/users/">
                        Users
                        <StyledLink
                           to={`/admin/users/${params.userId}/my-announcement`}
                        >
                           / {AdminAnnouncementById.fullName} /{' '}
                        </StyledLink>
                        <span
                           style={{
                              fontWeight: '700',
                              color: '#363636',
                           }}
                        >
                           Name
                        </span>
                     </StyledLink>
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
                           <Feedback data={el} key={el.id} />
                        ))}
                     </div>
                     <RatingChart marginLeft="4rem" width="27rem" />
                  </ContainerFeetback>
               </MainContainer>
            </Container>
         )}
      </div>
   ) : (
      <div>
         <Header />
         <Container>
            <MainContainer>
               <div role="presentation">
                  <Breadcrumbs aria-label="breadcrumb">
                     <StyledLink onClick={() => navigate('/')}>
                        Main{' '}
                     </StyledLink>
                     <StyledLink>Naryn</StyledLink>
                     <StyledLink>Hotel</StyledLink>
                     <StyledLink onClick={() => navigate(-1)}>
                        Profile
                     </StyledLink>
                     <Typography color="text.primary">Name</Typography>
                  </Breadcrumbs>
               </div>
               <BlockMain>
                  <h2>Name</h2>
                  <Main>
                     <HouseSlidDetail images={images} />
                     <NameOfHotel
                        dataById={announcement}
                        remove={removeAnnouncement}
                        buttons="yes"
                        pages
                        roles="user"
                        hotel={Hotel}
                        openModal={openModal}
                        openModalHandler={openModalHandler}
                     />
                  </Main>
               </BlockMain>
               <h2>Booked</h2>
               <BookedContainer>
                  <Booked item={announcement} />
               </BookedContainer>
               <h2>In favorites</h2>
               <FavoritesContainer>
                  <Favorites item={announcement} />
               </FavoritesContainer>
               <h2>feedback</h2>
               <ContainerFeetback>
                  <div>
                     <Feedback data={announcement} announcementBooked />
                  </div>
                  <RatingChart />
               </ContainerFeetback>
            </MainContainer>
            <Footer />
         </Container>
      </div>
   )
}
const RatingChart = styled('div')``
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
   marginTop: '6rem',
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

const StyledLink = styled(Link)(() => ({
   color: ' var(--tertiary-light-gray, #C4C4C4)',
   fontFamily: 'Inter',
   fontSize: ' 0.875rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: 'normal',
}))
