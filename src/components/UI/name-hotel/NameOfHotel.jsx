import React, { useState } from 'react'
import { styled } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '../button/Button'
import { ModalNameHotel } from './ModalNameHotel'
import { axiosInstance } from '../../../config/axiosInstance'
import { toastSnackbar } from '../snackbar/Snackbar'
import { getAnnouncementByIdHandler } from '../../../store/admin/users/getAnnouncement/AnnouncementByIdThunk'
import { ModalDelete } from './ModalDelete'

export function NameOfHotel({
   name,
   roles,
   title,
   pages,
   buttons,
   dataById,
   openModal,
   changeHandler,
   acceptHandler,
   rejectedCartd,
   openModalHandler,
}) {
   const [blockedArr, setBlockedArr] = useState({})
   const { toastType } = toastSnackbar()
   const navigate = useNavigate()
   const [deleteModal, setDeleteModal] = useState(false)
   const openDeleteModal = () => {
      setDeleteModal((prev) => !prev)
   }
   const { region, houseId } = useParams()
   console.log('blockedArr:', blockedArr)

   const blockAnnouncementById = async (id) => {
      try {
         const response = await axiosInstance.get(
            `/api/admin/blockedAnnouncementsById?announcementId=${id}`
         )
         navigate(-1)
         setBlockedArr(response)
         toastType('success', response.data.message, response.data.httpStatus)
      } catch (error) {
         toastType('error', error.message)
      }
   }

   // eslint-disable-next-line consistent-return
   const deleteAnnouncementById = async (id) => {
      try {
         const response = await axiosInstance.delete(`/api/announcements/${id}`)
         getAnnouncementByIdHandler()
         navigate(-1)
         toastType('success', response.data.message)
         return response.data
      } catch (error) {
         toastType('error', error.message)
      }
   }

   return (
      <Container>
         <ModalNameHotel
            title={title}
            openModal={openModal}
            changeHandler={changeHandler}
            rejectedCartd={rejectedCartd}
            openModalHandler={openModalHandler}
         />
         <ModalDelete
            openModal={deleteModal}
            openModalHandler={openDeleteModal}
            dataById={dataById}
            deleteAnnouncement={deleteAnnouncementById}
         />
         <DescriptionContainer key={dataById?.id}>
            <ButtonContainerOne>
               <div>{dataById?.houseType} </div>
               <div>{dataById?.maxGuests} Guests</div>
            </ButtonContainerOne>
            <NameHotel>
               <h2>Name Of hotel</h2>
               <p>
                  {dataById?.address}, {dataById?.province}
               </p>
            </NameHotel>

            <p className="description">{dataById?.description}</p>

            <ProfileBlock>
               <div className="avatar" />
               {name === 'name' ? (
                  <NameBlock>
                     <h4>{dataById.user?.fullName}</h4>
                     <p>{dataById.user?.email}</p>
                  </NameBlock>
               ) : (
                  <NameBlock to={`/main/${region}/region/${houseId}/profile`}>
                     <h4>{dataById?.fullName}</h4>
                     <p>{dataById?.email}</p>
                  </NameBlock>
               )}
            </ProfileBlock>
         </DescriptionContainer>
         {buttons === 'yes' ? (
            <ContainerButtonTwo>
               <Button
                  onClick={
                     pages ? () => openDeleteModal() : () => openModalHandler()
                  }
                  variant="contained"
                  width="13.25rem"
                  border-radius=" 0.125rem"
                  border=" 1px solid #DD8A08"
                  bgColor="#fff"
                  padding=" 0.625rem 1rem"
                  color="#DD8A08"
                  font-size="0.875rem"
                  font-weight="500"
               >
                  {pages === 'user' ? 'delete' : 'reject'}
               </Button>
               {roles === 'user' ? (
                  <Button
                     variant="contained"
                     width="13.25rem"
                     border-radius=" 0.125rem"
                     border=" 1px solid #DD8A08"
                     bgColor="#DD8A08"
                     padding=" 0.625rem 1rem"
                     color="#fff"
                     font-size="0.875rem"
                     font-weight="500"
                  >
                     edit
                  </Button>
               ) : (
                  <Button
                     onClick={
                        pages === 'user'
                           ? () => blockAnnouncementById(dataById?.id)
                           : () => acceptHandler(dataById.id)
                     }
                     variant="contained"
                     width="13.25rem"
                     border-radius=" 0.125rem"
                     border=" 1px solid #DD8A08"
                     bgColor="#DD8A08"
                     padding=" 0.625rem 1rem"
                     color="#fff"
                     font-size="0.875rem"
                     font-weight="500"
                  >
                     {pages === 'user' ? 'block' : 'accept'}
                  </Button>
               )}
            </ContainerButtonTwo>
         ) : null}
      </Container>
   )
}
const Container = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '-10.5rem',
}))
const ButtonContainerOne = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '0.88rem',
   marginBottom: '1.25rem',
   div: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: ' 0.375rem 0.5rem',
      border: ' 1px solid #FFCBE0',
      background: '#FFF0F6',
      color: ' #000',
      fontFamily: 'Inter',
      fontSize: ' 0.875rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
   },
}))
const DescriptionContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   margin: '5.8rem 0 0 0 ',
   '.description': {
      width: '33.875rem',
      color: 'var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '130%',
      marginBottom: '1.87rem',
   },
}))
const NameHotel = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.5rem',
   marginBottom: '1.25rem',
   h3: {
      color: ' #000',
      fontFamily: 'Inter',
      fontSize: '1.25rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
   p: {
      color: ' var(--tertiary-middle-gray, #828282)',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
   },
}))
const ProfileBlock = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
   marginBottom: '3.56rem',
   '.avatar': {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background:
         ' linear-gradient(194deg, rgba(157,157,157,1) 48%, rgba(0,0,0,1) 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      h5: {
         color: '#fff',
         fontSize: 20,
      },
   },
}))
const NameBlock = styled(Link)(() => ({
   display: 'flex',
   flexDirection: 'column',
   h4: {
      color: ' #000',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
   p: {
      color: ' var(--tertiary-middle-gray, #828282)',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      textTransform: 'lowercase',
   },
}))
const ContainerButtonTwo = styled('div')(() => ({
   display: 'flex',
   gap: '1.25rem',
}))
