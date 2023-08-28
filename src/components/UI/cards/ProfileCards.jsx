import React, { useEffect, useState } from 'react'
import { MenuItem, Tooltip, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
   AdminMenu,
   ArrowleftIcon,
   ArrowrightIcon,
   Location,
   Start1,
} from '../../../assets/icons/index'
import { Button } from '../button/Button'
import {
   deleteAnouncement,
   findAnnouncementById,
} from '../../../store/profile/ProfileThunk'
import ModalProfile from '../../Profile/ModalProfile'
import { toastSnackbar } from '../snackbar/Snackbar'
import { MeatBalls } from '../meat-balls/MeatBalls'

export function ProfileCards({ data, announcement, ...props }) {
   const dispatch = useDispatch()
   const { toastType } = toastSnackbar()
   const [modalVisible, setModalVisible] = useState(false)
   const [itemId, setItemId] = useState('')

   const [, setCurrentImages] = useState(
      Array.isArray(data) ? Array(data.length).fill(0) : []
   )
   const { idAnnouncement } = useSelector((state) => state.getannouncement)

   const [dataa, setData] = useState([])

   useEffect(() => {
      setData(
         data?.map((img) => {
            return img.images
         })
      )
   }, [setData])
   const handleNextImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === dataa.length - 1 ? 0 : newImages[index] + 1
         return newImages
      })
   }
   const truncateTitle = (title) => {
      const words = title.split(' ')
      if (words.length > 6) {
         return `${words.slice(0, 4).join(' ')}...`
      }
      return title
   }

   const handlePrevImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === 0 ? dataa.length - 1 : newImages[index] - 1
         return newImages
      })
   }

   const [anchorEl, setAnchorEl] = useState(null)

   const handleMenuOpen = (e, id) => {
      setAnchorEl(e.currentTarget)
      setItemId(id)
   }

   const handleMenuClose = () => {
      setAnchorEl(null)
   }

   const removeAnnouncements = (id) => {
      try {
         dispatch(deleteAnouncement(id))
         handleMenuClose()
         toastType(
            'success',
            'successfully removed your announcement',
            'success'
         )
      } catch (error) {
         toastType('error!!!', error)
      }
   }

   const openModal = () => {
      setModalVisible(true)
   }
   const open = Boolean(anchorEl)
   const idd = open ? 'simple-popover' : undefined

   useEffect(() => {
      dispatch(findAnnouncementById(itemId))
   }, [dispatch, modalVisible])

   return (
      <MainContainer>
         {modalVisible && (
            <ModalProfile
               setModalVisible={setModalVisible}
               itemId={itemId}
               data={idAnnouncement}
               handleMenuClose={handleMenuClose}
            />
         )}
         {data.length > 0 ? (
            data?.map((item, index) => (
               <MapContainer key={item.id} status={item.status}>
                  <div>
                     {item.images.length > 1 && (
                        <IconsContainer className="ImageNavigation">
                           <StyledButton onClick={() => handlePrevImage(index)}>
                              <ArrowleftIcon />
                           </StyledButton>
                           <StyledButton onClick={() => handleNextImage(index)}>
                              <ArrowrightIcon />
                           </StyledButton>
                        </IconsContainer>
                     )}
                     <ImageContainer>
                        <StyleImage src={item.images[0]} alt="home" />
                     </ImageContainer>
                  </div>
                  <DayStartContainer onClick={props.dd}>
                     <DayContainer>
                        ${item.price}/ <DayStyle>day</DayStyle>{' '}
                     </DayContainer>

                     <StartContainer>
                        <Start1 />
                        <p>{item.rating}.4</p>
                     </StartContainer>
                  </DayStartContainer>
                  <StyleTitle>
                     <Tooltip title={item.title}>
                        {truncateTitle(item.title || item.description)}
                     </Tooltip>
                  </StyleTitle>
                  <LocationCantainerStyle>
                     <Location />
                     <p>{item.address}</p>
                  </LocationCantainerStyle>
                  {announcement === 'true' && (
                     <StyledHorizIcon>
                        <GuestContainer>{item.maxGuests} guests</GuestContainer>

                        <AdminMenu
                           style={{ cursor: 'pointer' }}
                           onClick={(e) => handleMenuOpen(e, item.id)}
                        />
                        <MeatBalls
                           anchorEl={anchorEl}
                           open={open}
                           close={handleMenuClose}
                           id={idd}
                           propsVertical="top"
                           propsHorizontal="left"
                           onClick={(e) => handleMenuOpen(e, item.id)}
                           width="15%"
                           height="16%"
                        >
                           <MenuItem onClick={handleMenuClose}>Cencel</MenuItem>
                           <MenuItem onClick={() => openModal(item)}>
                              Edit
                           </MenuItem>
                           <MenuItem
                              onClick={() => removeAnnouncements(itemId)}
                           >
                              Delete
                           </MenuItem>
                        </MeatBalls>
                     </StyledHorizIcon>
                  )}{' '}
                  {announcement === 'false' && (
                     <ButtonsContainer>
                        <div>
                           <DayStyleTrue>2 guests</DayStyleTrue>
                           <CheckConainer>
                              <div>
                                 <Checkstyle>Check in</Checkstyle>
                                 <Datestyle>{item.checkIn}</Datestyle>
                              </div>
                              <div>
                                 <Checkstyle>Check out</Checkstyle>
                                 <Datestyle>{item.checkOut}</Datestyle>
                              </div>
                           </CheckConainer>
                           <Button
                              bgColor="#DD8A08"
                              color="#fff"
                              width="16.2rem"
                              variant="contained"
                           >
                              {' '}
                              change
                           </Button>
                        </div>
                     </ButtonsContainer>
                  )}
               </MapContainer>
            ))
         ) : (
            <h2>No cards yet...</h2>
         )}
      </MainContainer>
   )
}

const Checkstyle = styled('p')`
   color: var(--tertiary-dark-gray, #646464);
   font-size: 0.875rem;
   line-height: 2rem;
`
const ImageContainer = styled('div')``
const Datestyle = styled('p')`
   color: var(--primary-black, #363636);
   font-family: Roboto;
   padding-bottom: 1rem;
   line-height: normal;
`
const DayStyleTrue = styled('p')`
   color: #6c6c6c;
   font-size: 1rem;
   font-weight: 400;
   display: flex;
   padding-left: 2rem;
`
const GuestContainer = styled('p')`
   color: #6c6c6c;
   font-size: 1rem;
   font-weight: 400;
   margin-left: 1.2rem;
   width: 100px;
   height: auto;
`

const CheckConainer = styled('div')`
   display: flex;
   justify-content: center;
   gap: 3rem;
   line-height: 3rem;
`
const MainContainer = styled('div')`
   line-height: 2rem;
   width: 100%;
   height: 47%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   gap: 19px;
`
const IconsContainer = styled('div')``

const MapContainer = styled('div')(() => ({
   width: '16.25rem',
   height: '32.rem',
   borderRadius: '0.6rem 0.5rem 0 0 ',
   border: '1px solid  #C4C4C4',
   display: 'flex',
   flexDirection: 'column',

   '.ImageNavigation': {
      display: 'none',
   },

   '&:hover': {
      opacity: 1,
      boxShadow: '1px -2px 19px -5px rgba(34, 60, 80, 0.37)',

      '.ImageNavigation': {
         position: 'absolute',
         ziIdex: '9',
         display: 'flex',
         justifyContent: 'center',
         gap: ' 12.2rem',
         marginTop: '4.1rem',
      },
   },
}))

const StartContainer = styled('section')`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 0.125rem;
   background: var(--tertiary-middle-gray, #828282);
   width: 3.875rem;
   height: 1.5625rem;
   color: #ffff;
`

const DayContainer = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;
`

const DayStartContainer = styled('div')`
   padding-bottom: 1rem;
   display: flex;
   align-items: center;
   justify-content: space-around;
`

const DayStyle = styled('p')`
   color: #6c6c6c;
   font-family: Inter;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   display: flex;
   line-height: normal;
`

const LocationCantainerStyle = styled('section')`
   display: flex;
   align-items: center;
   margin-left: 2rem;
   color: var(--tertiary-middle-gray, #828282);
   font-size: 0.875rem;
   font-weight: 400;
`

const ButtonsContainer = styled('section')`
   display: flex;
   justify-content: center;
   gap: 2rem;
`

const StyledButton = styled('button')`
   width: 2rem;
   height: 2rem;
   border-radius: 50%;
   border: none;
   background: #828282;
   :hover {
      background: #bb7200;
   }

   :active {
      background: #f2b75b;
   }
`

const StyleImage = styled('img')`
   width: 16.2rem;
   height: 10rem;
   border-radius: '0.6rem 0.5rem 0 0 ';
`

const StyleTitle = styled('p')`
   width: 16.4375rem;
   display: flex;
   margin-left: 2.4rem;
`
// const IconButtonStyled = styled(IconButton)(() => ({
//    padding: '0px',
//    margin: '0px',
//    width: ' 40px',
//    height: ' 40px',
//    '&.MuiIconButton-root:hover': {
//       boxShadow: 'none',
//       backgroundColor: '#ffff',
//    },
//    '&.MuiIconButton-root:active': {
//       boxShadow: 'none',
//       backgroundColor: '#ffff',
//    },
// }))

// const StyledMenu = styled(Menu)(() => ({
//    '& .MuiPaper-root': {
//       width: '16%',
//       height: '22%',
//       display: 'flex',
//       alignItems: 'center',
//       borderRadius: '0.125rem',
//       background: ' #FFF',
//       border: ' 1px solid var(--tertiary-light-gray, #C4C4C4)',

//       boxShadow: 'none',
//    },
//    position: 'absolute',
//    top: '8.5rem',
//    left: ' 23rem',
//    transform: 'translate(-50%, -50%) ',
// }))

// const MoreHorizIconStyled = styled(MoreHorizIcon)(() => ({
//    '&.MuiSvgIcon-root': {
//       width: '50%',
//       height: '50%',
//       '& path:nth-of-type(1)': {
//          fill: '#C4C4C4',
//          width: '9rem',
//       },
//       '& path:nth-of-type(2)': {
//          fill: '#C4C4C4',
//       },
//       '& path:nth-of-type(3)': {
//          fill: '#C4C4C4',
//       },
//    },
// }))
const StyledHorizIcon = styled('div')`
   display: grid;
   grid-template-columns: auto 1fr;
   align-items: center;
   gap: 5rem;
   margin-left: 5%;
`
