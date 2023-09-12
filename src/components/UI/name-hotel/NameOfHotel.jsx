import React, { useState } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Button } from '../button/Button'
import { ModalNameHotel } from './ModalNameHotel'
import { axiosInstance } from '../../../config/axiosInstance'
import { toastSnackbar } from '../snackbar/Snackbar'
import { getAnnouncementByIdHandler } from '../../../store/getAnnouncement/GetAnnouncementByIdThunk'
import { ModalDelete } from './ModalDelete'

export function NameOfHotel({
   roles,
   pages,
   buttons,
   dataById,
   openModal,
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

   console.log('blockedArr: ', blockedArr)
   const blockAnnouncementById = async (id) => {
      try {
         const response = await axiosInstance.get(
            `/api/admin/blockedAnnouncementsById?announcementId=${id}`
         )
         setBlockedArr(response)
         toastType('success', response.data.message, response.data.httpStatus)
      } catch (error) {
         console.log('error: ', error)
      }
   }

   const deleteAnnouncementById = async (id) => {
      try {
         const response = await axiosInstance.delete(`/api/announcements/${id}`)
         getAnnouncementByIdHandler()
         console.log('response: ', response)
         navigate(-1)
         toastType('success', response.data.message)
         return response.data
      } catch (error) {
         return error.message
      }
   }

   return (
      <Container>
         <ModalNameHotel
            openModal={openModal}
            openModalHandler={openModalHandler}
            rejectedCartd={rejectedCartd}
         />
         <ModalDelete
            openModal={deleteModal}
            openModalHandler={openDeleteModal}
            dataById={dataById}
            deleteAnnouncement={deleteAnnouncementById}
         />
         <DescriptionContainer key={dataById.id}>
            <ButtonContainerOne>
               <div>{dataById.houseType}</div>
               <div>{dataById.maxGuests} Guests</div>
            </ButtonContainerOne>
            <NameHotel>
               <h2>Name Of hotel</h2>
               <p>
                  {dataById.address}, {dataById.province}
               </p>
            </NameHotel>

            <p className="description">{dataById.description}</p>

            <ProfileBlock>
               <div className="avatar" />
               {buttons === 'yes' ? (
                  <NameBlock>
                     <h4>{dataById.fullName}</h4>
                     <p>{dataById.email}</p>
                  </NameBlock>
               ) : (
                  <NameBlock>
                     <h4>{dataById.userFullName}</h4>
                     <p>{dataById.userEmail}</p>
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
                  hoverBgColor="#cfbf8e"
                  hoverColor="#6c470b"
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
                        pages
                           ? () => blockAnnouncementById(dataById.id)
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
const NameBlock = styled('div')(() => ({
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
