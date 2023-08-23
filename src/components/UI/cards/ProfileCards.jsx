import React, { useEffect, useState } from 'react'
import { IconButton, Menu, MenuItem, Tooltip, styled } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useDispatch } from 'react-redux'
import {
   ArrLeftIcon,
   ArrRightIcon,
   Location,
   Start1,
} from '../../../assets/icons/index'
import { Button } from '../button/Button'
import { deleteAnouncement } from '../../../store/profile/ProfileThunk'
import ModalProfile from '../../Profile/ModalProfile'

export function ProfileCards({ data, announcement, ...props }) {
   const dispatch = useDispatch()
   const [editData, setEditData] = useState()
   const [modalVisible, setModalVisible] = useState(false)
   const [itemId, setItemId] = useState('')

   const [, setCurrentImages] = useState(
      Array.isArray(data) ? Array(data.length).fill(0) : []
   )

   const [dataa, setData] = useState([])

   useEffect(() => {
      setData(data?.map((item) => ({ ...item, open: false })))
   }, [setData])

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
            newImages[index] === 0
               ? dataa[index].images.length - 1
               : newImages[index] - 1
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
      dispatch(deleteAnouncement(id))
      handleMenuClose()
   }

   const openModal = (data) => {
      setEditData(data)
      setModalVisible(true)
      handleMenuClose()
   }

   return (
      <MainContainer>
         {modalVisible && (
            <ModalProfile
               setModalVisible={setModalVisible}
               data={editData}
               itemId={itemId}
            />
         )}
         {data.length > 0
            ? data?.map((item, index) => (
                 <MapContainer key={item.id} status={item.status}>
                    <div>
                       {item.images.length > 1 && (
                          <IconsContainer className="ImageNavigation">
                             <StyledButton
                                onClick={() => handlePrevImage(index)}
                             >
                                <ArrLeftIcon />
                             </StyledButton>
                             <StyledButton
                                onClick={() => handleNextImage(index)}
                             >
                                <ArrRightIcon />
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
                          <p>4/{item.rating}</p>
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
                       <h4>{item.id}</h4>
                    </LocationCantainerStyle>
                    {announcement === 'true' ? (
                       <StyledHorizIcon>
                          <DayStyle>{item.maxGuests} guests</DayStyle>
                          <div>
                             <IconButtonStyled
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={(e) => handleMenuOpen(e, item.id)}
                             >
                                <MoreHorizIconStyled />
                             </IconButtonStyled>

                             <StyledMenu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                             >
                                <MenuItem onClick={() => openModal(item)}>
                                   Edit
                                </MenuItem>
                                <MenuItem
                                   onClick={() => removeAnnouncements(itemId)}
                                >
                                   Delete
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                   Cencel
                                </MenuItem>
                             </StyledMenu>
                          </div>
                       </StyledHorizIcon>
                    ) : (
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
                                width="100%"
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
            : null}
      </MainContainer>
   )
}

const Checkstyle = styled('p')`
   color: var(--tertiary-dark-gray, #646464);
   font-size: 0.875rem;
   line-height: 2rem;
`
const ImageContainer = styled('div')`
   min-width: 45%;
   width: 30%;
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
   gap: 5px;
`

const CheckConainer = styled('div')`
   display: flex;
   gap: 5rem;
   line-height: 3rem;
`
const MainContainer = styled('div')`
   line-height: 2rem;
   width: 100%;
   height: 47%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   gap: 20px;
`
const IconsContainer = styled('div')``

const MapContainer = styled('div')(({ status }) => ({
   width: '29.5%',
   height: '16%',
   borderRadius: '4px',
   outline: status === 'dates' ? '3px solid #ff0000' : 'none',
   border: status === 'dates' ? '4px solid pink' : '1px solid  #C4C4C4',
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
         gap: ' 13.5rem',
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
   width: 17.6rem;
   height: 9rem;
`

const StyleTitle = styled('p')`
   width: 16.4375rem;
   display: flex;
   margin-left: 2.4rem;
`
const IconButtonStyled = styled(IconButton)(() => ({
   padding: '0px',
   margin: '0px',
   width: ' 40px',
   height: ' 40px',
   '&.MuiIconButton-root:hover': {
      boxShadow: 'none',
      backgroundColor: '#ffff',
   },
   '&.MuiIconButton-root:active': {
      boxShadow: 'none',
      backgroundColor: '#ffff',
   },
}))

const StyledMenu = styled(Menu)(() => ({
   '& .MuiPaper-root': {
      width: '16%',
      height: '22%',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '0.125rem',
      background: ' #FFF',
      border: ' 1px solid var(--tertiary-light-gray, #C4C4C4)',

      boxShadow: 'none',
   },
   position: 'absolute',
   top: '8.5rem',
   left: ' 23rem',
   transform: 'translate(-50%, -50%) ',
}))

const MoreHorizIconStyled = styled(MoreHorizIcon)(() => ({
   '&.MuiSvgIcon-root': {
      width: '50%',
      height: '50%',
      '& path:nth-of-type(1)': {
         fill: '#C4C4C4',
         width: '9rem',
      },
      '& path:nth-of-type(2)': {
         fill: '#C4C4C4',
      },
      '& path:nth-of-type(3)': {
         fill: '#C4C4C4',
      },
   },
}))
const StyledHorizIcon = styled('div')`
   display: grid;
   grid-template-columns: auto 1fr;
   align-items: center;
   gap: 9rem;
   margin-left: 5%;
`
