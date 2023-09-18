import React, { useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { MenuItem, Popover, Tooltip, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AdminMenu, Location, Start1 } from '../../../assets/icons/index'
import { Button } from '../button/Button'
import { deleteAnouncement } from '../../../store/profile/ProfileThunk'
import { ModalProfile } from '../../Profile/ModalProfile'
import { toastSnackbar } from '../snackbar/Snackbar'
import { PhotoSlider } from '../imageSlide/ImageSlice'

export function ProfileCards({ data, announcement, index, message, ...props }) {
   const dispatch = useDispatch()
   const { toastType } = toastSnackbar()
   const [modalVisible, setModalVisible] = useState(false)
   const [dataEdit, setItemEdit] = useState('')

   const truncateTitle = (title) => {
      const words = title?.split(' ')
      if (words?.length > 4) {
         return `${words?.slice(0, 4).join(' ')}...`
      }
      return title
   }

   const truncateAddress = (address) => {
      const words = address?.split(' ')
      return words?.length > 3 ? `${words.slice(0, 4).join(' ')}...` : address
   }

   const [menuOpen, setMenuOpen] = useState(false)
   const [anchorEl, setAnchorEl] = useState(null)

   const handleMenuClick = (event, data) => {
      setItemEdit(data)
      setMenuOpen(true)
      setAnchorEl(event.currentTarget)
   }

   const handleMenuClose = () => {
      setMenuOpen(false)
      setAnchorEl(null)
   }
   const removeAnnouncements = (id) => {
      handleMenuClose()
      try {
         dispatch(deleteAnouncement(id))
         toastType(
            ' success',
            'successfully removed your announcement',
            'Deleted announcement from your announcement'
         )
      } catch (error) {
         toastType('error', error.message)
      }
   }
   const openModal = () => {
      setModalVisible(true)
   }

   return (
      <MainContainer>
         <MapContainer key={data.id} status={data.status}>
            <div>
               {data.images?.length > 1 ? (
                  <div className="ImageNavigation">
                     <PhotoSlider images={data.images.images} id={data.id} />
                  </div>
               ) : (
                  <ImageContainer to={`name/${data.id}`}>
                     <StyleImage src={data.images.images} alt="home" />
                  </ImageContainer>
               )}
            </div>
            <DayStartContainer onClick={props.dd}>
               <DayContainer>
                  ${data.price}/ <DayStyle>day</DayStyle>{' '}
               </DayContainer>

               <StartContainer>
                  <Start1 />
                  <p>{data.rating}.4</p>
               </StartContainer>
            </DayStartContainer>
            <StyleTitle>
               <Tooltip title={data.title}>
                  <span> {truncateTitle(data.title || data.description)}</span>
               </Tooltip>
            </StyleTitle>
            <LocationCantainerStyle>
               <Location />
               <Tooltip address={data.address}>
                  {truncateAddress(data.address)}
               </Tooltip>
            </LocationCantainerStyle>
            {announcement === 'true' && (
               <StyledHorizIcon>
                  <GuestContainer>{data.maxGuests} guests</GuestContainer>
                  {data.messagesFromAdmin === 'blocked' ? (
                     <Button
                        bgColor="rgba(212, 212, 212, 0.40)"
                        color="#fff"
                        width="13.2rem"
                        variant="contained"
                     >
                        BLOCKED
                     </Button>
                  ) : (
                     <div>
                        <AdminMenu onClick={(e) => handleMenuClick(e, data)} />
                        {menuOpen === true && (
                           <StyledPopover
                              open={menuOpen}
                              anchorEl={anchorEl}
                              onClose={handleMenuClose}
                              anchorOrigin={{
                                 vertical: 'top',
                                 horizontal: 'left',
                              }}
                           >
                              <StyledMenuItem onClick={() => openModal()}>
                                 Edit
                              </StyledMenuItem>
                              <StyledMenuItem
                                 onClick={() => removeAnnouncements(data.id)}
                              >
                                 Delete
                              </StyledMenuItem>
                           </StyledPopover>
                        )}
                     </div>
                  )}
               </StyledHorizIcon>
            )}{' '}
            {announcement === 'false' && (
               <ButtonsContainer>
                  <div>
                     <DayStyleTrue>2 guests</DayStyleTrue>
                     <CheckConainer>
                        <div>
                           <Checkstyle>Check in</Checkstyle>
                           <Datestyle>{data.checkIn}</Datestyle>
                        </div>
                        <div>
                           <Checkstyle>Check out</Checkstyle>
                           <Datestyle>{data.checkOut}</Datestyle>
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
         {modalVisible && (
            <ModalProfile
               setModalVisible={setModalVisible}
               data={dataEdit}
               handleMenuClose={handleMenuClose}
            />
         )}
      </MainContainer>
   )
}
const StyledPopover = styled(Popover)(() => ({
   '& .MuiPaper-root': {
      animation: 'fadeIn 0.3s ease-in-out',
      transformOrigin: 'top left',
      width: '5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: 'none',
   },
   '@keyframes fadeIn': {
      '0%': {
         opacity: 0,
         transform: 'scale(0.8)',
      },
      '100%': {
         opacity: 1,
         transform: 'scale(1)',
      },
   },
}))

const StyledMenuItem = styled(MenuItem)(() => ({
   padding: '8px',
}))
const Checkstyle = styled('p')`
   color: var(--tertiary-dark-gray, #646464);
   font-size: 0.875rem;
   line-height: 2rem;
`
const ImageContainer = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 17rem;
`
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
   width: auto;
   height: auto;
`

const MapContainer = styled('div')(({ message }) => ({
   width: '17rem',
   height: '20rem',
   display: 'flex',
   flexDirection: 'column',
   borderRadius: '15px',
   boxShadow: '1px -2px 19px -5px rgba(34, 60, 80, 0.37)',
   bgColor: message ? ' #6c6c6c' : null,
   '.ImageNavigation': {
      display: 'none',
   },

   '&:hover': {
      opacity: 1,

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

// const StyledButton = styled('button')`
//    width: 2rem;
//    height: 2rem;
//    border-radius: 50%;
//    border: none;
//    background: #828282;
//    :hover {
//       background: #bb7200;
//    }

//    :active {
//       background: #f2b75b;
//    }
// `

const StyleImage = styled('img')`
   width: 17rem;
   height: 9rem;
   border-top-right-radius: 15px;
   border-top-left-radius: 15px;
`

const StyleTitle = styled('p')`
   width: 16.4375rem;
   display: flex;
   margin-left: 1.7rem;
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
   gap: 4rem;
   margin-left: 5%;
`
