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
import { getApplicationById } from '../../store/admin/application/ApplicationThunk'
import {
   getAnnouncementByIdHandler,
   getAnnouncementFeedbacks,
} from '../../store/admin/users/getAnnouncement/AnnouncementByIdThunk'
import {
   deleteAnnouncement,
   getByIdAnnouncement,
} from '../../store/innerPage/InnerPageThunk'
import { toastSnackbar } from '../../components/UI/snackbar/Snackbar'
import { Header } from '../../layout/header/Header'
import { Footer } from '../../layout/footer/Footer'
import { LeaveFeedback } from '../../components/leave-feedback/LeaveFeeadback'
import { RatingChart } from '../../components/UI/rating/RatingChart'

export function AnnouncementAdminPage({
   title,
   roles,
   pages,
   setTitle,
   acceptHandler,
   rejectedHandler,
   // AdminAnnouncementById,
   params,
}) {
   const [openModal, setOpenModal] = useState(false)
   const [openDelete, setOpenDelete] = useState(false)
   const [dataById, setDataById] = useState({})
   const {
      applicationById,
      // , users
   } = useSelector((state) => state.admin)
   const { announcement } = useSelector((state) => state.annByID)
   const {
      AdminAnnouncementById,
      // , feedbacks
   } = useSelector((state) => state.announcementById)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { announId } = useParams()
   const { toastType } = toastSnackbar()

   useEffect(() => {
      applicationById.map((item) => {
         return setDataById(item)
      })
   }, [applicationById])

   useEffect(() => {
      dispatch(getApplicationById(params.cardId))
   }, [dispatch])

   useEffect(() => {
      dispatch(getAnnouncementByIdHandler(params.id))
      dispatch(getAnnouncementFeedbacks(params.id))
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
   ]

   const openModalHandler = () => {
      setOpenDelete((prev) => !prev)
   }
   const rejectedCartd = () => {
      rejectedHandler(params.cardId)
      setOpenModal(false)
   }

   const changeHandler = (e) => {
      setTitle(e.target.value)
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

   // const toggleFeedback = () => {
   //    if(feedbackDataByid)
   // }

   const leaveFeedbackHandler = () => {
      setOpenModal((prev) => !prev)
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
                        onClick={() => navigate('/admin/application ')}
                        type="button"
                     >
                        Application
                     </button>
                     /{' '}
                     <p
                        className="name"
                        style={{
                           marginLeft: '3rem',
                        }}
                     >
                        Name
                     </p>
                  </Navigate>
                  <BlockMain>
                     <h2>Name</h2>
                     <Main>
                        <HouseSlidDetail images={images} />
                        <NameOfHotel
                           name="name"
                           buttons="yes"
                           title={title}
                           openModal={openModal}
                           dataById={dataById}
                           acceptHandler={acceptHandler}
                           rejectedCartd={rejectedCartd}
                           changeHandler={changeHandler}
                           openModalHandler={openModalHandler}
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
                           name="user"
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
                     {/* <RatingChart marginLeft="4rem" width="27rem" /> */}
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
                  <BreadcrumbsStyle aria-label="breadcrumb">
                     <StyledLink onClick={() => navigate('/')}>
                        Main{' '}
                     </StyledLink>
                     <StyledLink>Naryn</StyledLink>
                     <StyledLink>Hotel</StyledLink>
                     <StyledLink onClick={() => navigate(-1)}>
                        Profile
                     </StyledLink>
                     <Typography color="text.primary">Name</Typography>
                  </BreadcrumbsStyle>
               </div>
               <BlockMain>
                  <h2
                     style={{
                        marginLeft: '1.4rem',
                     }}
                  >
                     Name
                  </h2>
                  <Main>
                     <HouseSlidDetail images={images} />
                     <NameOfHotel
                        dataById={announcement}
                        remove={removeAnnouncement}
                        buttons="yes"
                        pages
                        roles="user"
                        hotel={Hotel}
                        openModal={openDelete}
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
                  <div
                     style={{
                        display: 'flex',
                     }}
                  >
                     <Feedback data={announcement} announcementBooked />
                     <RatingChart marginLeft="4rem" width="27rem" />
                  </div>
                  <LeaveStyle>
                     <ButtonForFeedback onClick={leaveFeedbackHandler}>
                        Leave Feedback
                     </ButtonForFeedback>
                  </LeaveStyle>

                  {openModal && (
                     <LeaveFeedback
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                     />
                  )}
               </ContainerFeetback>
            </MainContainer>
            <Footer />
         </Container>
      </div>
   )
}
const LeaveStyle = styled('div')`
   margin-top: 22rem;
   width: 100%;
   margin-left: -99rem;
`
const BreadcrumbsStyle = styled(Breadcrumbs)`
   margin-left: 1.3rem;
`
const Applications = styled('div')(() => ({
   width: '100%',
   height: '100%',
   padding: '5rem 0 4rem 0 ',
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
   width: '90%',
   paddingLeft: '2.5rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '2.5rem',
   paddingTop: '4rem',
   marginLeft: '3rem',
}))

const Main = styled('main')(() => ({
   width: '100%',
   display: 'flex',
   alignItems: 'start',
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

const ButtonForFeedback = styled('button')(() => ({
   padding: '0.5rem 1rem',
   width: '26.5rem',
   color: ' #828282',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: '500',
   textTransform: 'uppercase',
   border: '.0625rem solid#828282',
   background: 'none ',
   cursor: 'pointer',
}))
