import { MenuItem, styled, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
   AdminLocation,
   AdminMenu,
   ArrowleftIcon,
   ArrowrightIcon,
   Start1,
} from '../../../assets/icons'
import ModalProfile from '../../Profile/ModalProfile'
import { MeatBalls } from '../meat-balls/MeatBalls'
import { ModalNameHotel } from '../name-hotel/ModalNameHotel'
import { toastSnackbar } from '../snackbar/Snackbar'

export function AdminCards({
   data,
   title,
   image,
   meatballs,
   removeCard,
   changeHandler,
   toggleHandler,
   acceptHandler,
   rejectedHandler,
   removeAllHousing,
}) {
   const [currentImages, setCurrentImages] = useState([])
   const [openModal, setOpenModal] = useState(false)
   const [currentEl, setCurrentEl] = useState(null)
   const [itemId, setItemId] = useState('')
   const [dataa, setData] = useState([])
   const [id, setId] = useState(null)
   const { toastType } = toastSnackbar()

   const [idAllHousing, setIdAllHousing] = useState('')
   const [openAllHouseModal, setOpenAllHouseModal] = useState(false)

   console.log(data)

   useEffect(() => {
      setData(data?.map((item) => ({ ...item, open: false })))
      setCurrentImages(data?.map(() => 0))
   }, [data])

   const truncateText = (text, maxLength) => {
      if (text?.length > maxLength) {
         return `${text.slice(0, maxLength)}...`
      }
      return text
   }

   const handlePrevImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === 0
               ? dataa[index].images.length - 1
               : newImages[index] - 1
         return newImages
      })
   }
   const handleNextImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === dataa[index].images.length - 1
               ? 0
               : newImages[index] + 1
         return newImages
      })
   }
   const handleMenuOpen = (e, id) => {
      setCurrentEl(e.currentTarget)
      setItemId(id)
   }

   const closeMeatBallsHeandler = () => {
      setCurrentEl(null)
   }

   const openModalHandler = (id) => {
      setOpenModal((prev) => !prev)
      setCurrentEl(null)
      setId(id)
   }

   const rejectedCartd = async () => {
      try {
         rejectedHandler(id)
         setOpenModal(false)
         toastType('success', 'Successfully sent :)')
      } catch (error) {
         toastType('error', error)
      }
   }
   const openModalAllHousing = (itemId) => {
      data.map((item) => {
         if (item.id === itemId) {
            setIdAllHousing(item)
            return item
         }
         return item
      })
      setOpenAllHouseModal(true)
   }
   const open = Boolean(currentEl)
   const idd = open ? 'simple-popover' : undefined

   return (
      <Container>
         <div className="block">
            {openAllHouseModal ? (
               <ModalProfile
                  data={idAllHousing}
                  itemId={idAllHousing.id}
                  setModalVisible={setOpenAllHouseModal}
                  handleMenuClose={closeMeatBallsHeandler}
               />
            ) : null}
            <ModalNameHotel
               openModal={openModal}
               openModalHandler={openModalHandler}
               rejectedCartd={rejectedCartd}
               title={title}
               changeHandler={changeHandler}
            />
            {data.length > 0 ? (
               data.map((item, index) => (
                  <MapContainer status="dat" key={item.id}>
                     {image === 'click' ? (
                        <ImageContainer
                           to="/admin/application/name"
                           onClick={() => toggleHandler(item.id)}
                        >
                           {item.images.length > 1 && (
                              <div className="ImageNavigation">
                                 <StyledButton
                                    onClick={() => handlePrevImage(index)}
                                 >
                                    <ArrowleftIcon />
                                 </StyledButton>
                                 <StyledButton
                                    onClick={() => handleNextImage(index)}
                                 >
                                    <ArrowrightIcon />
                                 </StyledButton>
                              </div>
                           )}
                           <img
                              src={item.images[currentImages[index]]}
                              alt={item.title}
                           />
                        </ImageContainer>
                     ) : (
                        <ImageContainer>
                           {item.images.length > 1 && (
                              <div className="ImageNavigation">
                                 <StyledButton
                                    onClick={() => handlePrevImage(index)}
                                 >
                                    <ArrowleftIcon />
                                 </StyledButton>
                                 <StyledButton
                                    onClick={() => handleNextImage(index)}
                                 >
                                    <ArrowrightIcon />
                                 </StyledButton>
                              </div>
                           )}
                           <img
                              src={item.images[currentImages[index]]}
                              alt={item.title}
                           />
                        </ImageContainer>
                     )}

                     <ContainerDescription>
                        <ContainerPrice>
                           <h4 className="price">
                              ${item.price}/ <p className="day">day</p>
                           </h4>
                           <div className="rating">
                              <Start1 />
                              <p>{item.rating}</p>
                           </div>
                        </ContainerPrice>
                        <ContainerInformation>
                           <div className="title">
                              <Tooltip title={item.description}>
                                 {truncateText(item.description, 25)}
                              </Tooltip>
                           </div>
                           <div className="location">
                              <AdminLocation />
                              <div>
                                 <Tooltip title={item.address}>
                                    {item.address.length > 7
                                       ? truncateText(item.address, 7)
                                       : item.address}
                                    ,{' '}
                                 </Tooltip>
                                 <Tooltip title={item.province}>
                                    {item.province?.length > 7
                                       ? truncateText(item.province, 7)
                                       : item.province}
                                 </Tooltip>
                              </div>
                           </div>
                           <ContainerGuests>
                              <p>{item.maxGuests} guests</p>

                              <AdminMenu
                                 style={{ cursor: 'pointer' }}
                                 onClick={(e) => handleMenuOpen(e, item.id)}
                              />
                              <MeatBalls
                                 anchorEl={currentEl}
                                 open={open}
                                 close={closeMeatBallsHeandler}
                                 id={idd}
                                 propsVertical="top"
                                 propsHorizontal="left"
                                 width={
                                    meatballs === 'application' ? '15%' : '10%'
                                 }
                                 height={
                                    meatballs === 'application' ? '16%' : '12%'
                                 }
                              >
                                 {meatballs === 'application' ? (
                                    <>
                                       <MenuItem
                                          onClick={() => acceptHandler(itemId)}
                                       >
                                          Accept
                                       </MenuItem>
                                       <MenuItem
                                          onClick={() =>
                                             openModalHandler(itemId)
                                          }
                                       >
                                          Reject
                                       </MenuItem>
                                       <MenuItem
                                          onClick={() => removeCard(itemId)}
                                       >
                                          Delete
                                       </MenuItem>
                                    </>
                                 ) : (
                                    <>
                                       {' '}
                                       <MenuItem
                                          onClick={() =>
                                             removeAllHousing(itemId)
                                          }
                                       >
                                          Delete
                                       </MenuItem>
                                       <MenuItem
                                          onClick={() =>
                                             openModalAllHousing(itemId)
                                          }
                                       >
                                          Update
                                       </MenuItem>
                                    </>
                                 )}
                              </MeatBalls>
                           </ContainerGuests>
                        </ContainerInformation>
                     </ContainerDescription>
                  </MapContainer>
               ))
            ) : (
               <h2>No cards yet...</h2>
            )}
         </div>
      </Container>
   )
}
const Container = styled('div')(() => ({
   width: '100%',
   padding: '1.81rem 2.25rem ',

   '.block': {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      gap: '1.25rem',
   },
}))

const MapContainer = styled('div')((props) => ({
   width: '14rem',
   height: ' 17.8125rem',
   borderRadius: '0.6rem 0.5rem 0 0 ',
   border: props.status === 'dates' ? '3px solid #ff0000' : 'none',
   boxShadow: '  0px 0px 8px 7px rgba(135, 132, 129, 0.2)',

   '&:hover': {
      opacity: 1,
      boxShadow: ' 0px 0px 8px 7px rgba(0, 0, 0, 0.2)',
   },
}))

const ImageContainer = styled(Link)(() => ({
   display: 'inline-block',
   width: '100%',
   height: ' 8.5rem',
   img: {
      width: '100%',
      height: ' 8.5rem',
      borderRadius: '0.6rem 0.5rem 0 0 ',
   },
}))

const ContainerDescription = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   padding: '0.75rem',
   gap: '1rem',
}))

const ContainerPrice = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   '.price': {
      color: ' var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: ' 1.125rem',
      fontStyle: 'normal',
      fontweight: 400,
      lineHeight: 'normal',
      display: 'flex',
      alignItems: 'center',
      gap: '0.19rem',

      '.day': {
         color: '  #6C6C6C',
         fontFamily: 'Inter',
         fontSize: ' 1rem',
         fontStyle: 'normal',
         fontweight: 400,
         lineHeight: 'normal',
      },
   },
   '.rating': {
      width: ' 3.875rem',
      height: '1.5625rem',
      borderRadius: '0.125rem',
      background: ' var(--tertiary-middle-gray, #828282)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.25rem',
      p: {
         color: '#fff',
      },
   },
}))

const ContainerInformation = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.5rem',
   '.title': {
      width: '11.625rem',
      color: '#2B2B2B',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
   },
   '.location': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.38rem',
      p: {
         width: '100%',
         color: ' var(--tertiary-middle-gray, #828282)',
         fontFamily: 'Inter',
         fontSize: '0.875rem',
         fontStyle: 'normal',
         fontWeight: 400,
         lineHeight: 'normal',
      },
   },
}))

const ContainerGuests = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const StyledButton = styled('button')(() => ({
   width: '2rem',
   height: '2rem',
   borderRadius: '50%',
   border: 'none',
   background: ' #828282',
   '& :hover': {
      background: '#bb7200',
   },
   '& :active': {
      background: '#f2b75b',
   },
}))
