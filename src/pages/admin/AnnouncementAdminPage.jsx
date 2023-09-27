import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HouseSlidDetail } from '../../components/UI/house-detail/HouseSlidDetail'
import { NameOfHotel } from '../../components/UI/name-hotel/NameOfHotel'
// import { Hotel } from '../../utils/helpers'
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
}) {
   const [openModal, setOpenModal] = useState(false)
   const [openDelete, setOpenDelete] = useState(false)
   const [dataById, setDataById] = useState({})
   const {
      applicationById,
      // , users
   } = useSelector((state) => state.admin)
   const { announcement } = useSelector((state) => state.annByID)
   const { AdminAnnouncementById, feedbacks } = useSelector(
      (state) => state.announcementById
   )
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { announId, region, cardId, userId, houseId } = useParams()
   const { toastType } = toastSnackbar()

   useEffect(() => {
      applicationById.map((item) => {
         return setDataById(item)
      })
   }, [applicationById])

   useEffect(() => {
      dispatch(getApplicationById(cardId))
   }, [dispatch])

   useEffect(() => {
      dispatch(getAnnouncementByIdHandler(userId))
      dispatch(getAnnouncementFeedbacks(userId))
      dispatch(getByIdAnnouncement(announId))
   }, [dispatch])

   const openModalHandler = () => {
      setOpenDelete((prev) => !prev)
   }

   const rejectedCartd = () => {
      rejectedHandler(cardId)
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

   const images = Array.isArray(dataById.images?.images)
      ? dataById.images.images?.map((image, index) => ({
           id: index + 1,
           original: image,
           thumbnail: image,
        }))
      : []

   const imgaesUsers = Array.isArray(AdminAnnouncementById?.images)
      ? AdminAnnouncementById.images?.map((image, index) => ({
           id: index + 1,
           original: image,
           thumbnail: image,
        }))
      : []
   console.log(imgaesUsers, 'imgaesUsers')
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
                     <p className="name">/ Name</p>
                  </Navigate>
                  <BlockMain>
                     <h2>Name</h2>
                     <Main>
                        <HouseSlidDetail images={images} />
                        <NameOfHotel
                           name="name"
                           buttons="yes"
                           pages={pages}
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
                           to={`/admin/users/${userId}/my-announcement`}
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
                        <HouseSlidDetail images={imgaesUsers} />
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
                        {feedbacks?.map((el) => (
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
               <Navigate role="presentation">
                  <button
                     className="application"
                     onClick={() => navigate('/main ')}
                     type="button"
                  >
                     Main
                  </button>
                  <button
                     className="application"
                     onClick={() => navigate(`/main/${region}/region`)}
                     type="button"
                  >
                     / {region}
                  </button>
                  <button
                     className="application"
                     onClick={() =>
                        navigate(`/main/${region}/region/${houseId}`)
                     }
                     type="button"
                  >
                     / Hotel
                  </button>
                  <button
                     className="application"
                     onClick={() =>
                        navigate(`/main/${region}/region/${houseId}/profile`)
                     }
                     type="button"
                  >
                     / Profile
                  </button>
                  <p className="name">/ Name</p>
               </Navigate>
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
                        // hotel={Hotel}
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

const Applications = styled('div')(() => ({
   width: '100%',
   height: '88.8vh',
   padding: '3rem 0 4rem 0 ',
   display: 'flex',
   flexDirection: 'column',
   background: ' #F7F7F7',
   marginTop: '5.1rem',
}))

const Container = styled('div')(() => ({
   width: '100%',
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',
   gap: '1.87rem',
   background: ' #F7F7F7',
   marginTop: '5rem',
   padding: '2.88rem 0 0 0',
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
