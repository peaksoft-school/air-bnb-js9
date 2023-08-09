import React, { useState } from 'react'
import { IconButton, Menu, MenuItem, Tooltip, styled } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import {
   ArrowleftIcon,
   ArrowrightIcon,
   Location,
   Start1,
} from '../../../assets/icons/index'
import { Button } from '../button/Button'
import { ButtonIcon } from '../IconButton/IconButton'

export function Cards({ data, ...props }) {
   const [currentImages, setCurrentImages] = useState(
      data ? data.map(() => 0) : []
   )
   const [dataa, setData] = useState(
      data?.map((item) => ({ ...item, open: false }))
   )
   console.log(data, 'data')
   console.log(dataa, 'dataa')

   const handleNextImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === dataa[index].urls.length - 1
               ? 0
               : newImages[index] + 1
         return newImages
      })
   }
   const truncateTitle = (title) => {
      const words = title.split(' ')
      if (words.length > 7) {
         return `${words.slice(0, 4).join(' ')}...`
      }
      return title
   }

   const handlePrevImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === 0
               ? dataa[index].urls.length - 1
               : newImages[index] - 1
         return newImages
      })
   }

   const toggle = (index) => {
      setData((prevData) => {
         const newData = [...prevData]
         newData[index] = { ...newData[index], open: !newData[index].open }
         return newData
      })
   }
   const [anchorEl, setAnchorEl] = useState(null)

   const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleMenuClose = () => {
      setAnchorEl(null)
   }
   return (
      <MainContainer>
         {dataa?.map((item, index) => {
            return (
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
                     <StyleImage
                        src={item.images[currentImages[index]]}
                        alt="home"
                     />
                  </div>
                  <DayStartContainer onClick={props.dd}>
                     <DayContainer>
                        ${item.price}/ <DayStyle>day</DayStyle>{' '}
                     </DayContainer>

                     <StartContainer>
                        <Start1 />
                        <p>{item.rating}</p>
                     </StartContainer>
                  </DayStartContainer>
                  <StyleTitle>
                     <Tooltip title={item.description}>
                        {truncateTitle(item.description)}
                     </Tooltip>
                  </StyleTitle>
                  <LocationCantainerStyle>
                     <Location />
                     <p>
                        {item.address},{item.province}
                     </p>
                  </LocationCantainerStyle>
                  {item.status === 'dates' ? (
                     <StyledHorizIcon>
                        <DayStyle>{item.maxGuests} guests</DayStyle>
                        <div>
                           <IconButtonStyled
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              onClick={handleMenuOpen}
                           >
                              <MoreHorizIconStyled />
                           </IconButtonStyled>

                           <StyledMenu
                              anchorEl={anchorEl}
                              open={Boolean(anchorEl)}
                              onClose={handleMenuClose}
                           >
                              <MenuItem onClick={handleMenuClose}>
                                 Accept
                              </MenuItem>
                              <MenuItem onClick={handleMenuClose}>
                                 Reject
                              </MenuItem>
                              <MenuItem onClick={handleMenuClose}>
                                 Delete
                              </MenuItem>
                           </StyledMenu>
                        </div>
                     </StyledHorizIcon>
                  ) : (
                     <ButtonsContainer>
                        <DayStyle>{item.maxGuests} guests</DayStyle>
                        <Button
                           variant="contained"
                           height="20%"
                           bgColor="#DD8A08"
                           color="white"
                           width="6.4375rem"
                        >
                           Book
                        </Button>
                        <ButtonIcon
                           width="10%"
                           open={item.open}
                           toggle={() => toggle(index)}
                        />
                     </ButtonsContainer>
                  )}
               </MapContainer>
            )
         })}
      </MainContainer>
   )
}

const MainContainer = styled('div')`
   line-height: 2rem;
   background: white;
   margin-left: 2%;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   flex-wrap: wrap;
   margin-top: 2.5rem;
`
const IconsContainer = styled('div')``

const MapContainer = styled('div')(({ status }) => ({
   width: '20.2%',
   height: '16%',
   borderRadius: '4px',
   outline: status === 'dates' ? '3px solid #ff0000' : 'none',
   border: status === 'dates' ? '4px solid pink' : 'none',
   display: 'flex',
   position: 'relative',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   lineHeight: '2rem',

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
         gap: ' 15rem',
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
   gap: 7.4rem;
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
   align-items: start;
   justify-content: start;
   margin-right: 8.5rem;
   color: var(--tertiary-middle-gray, #828282);
   padding-bottom: 2rem;
   font-family: Inter;
   font-size: 0.875rem;
   font-weight: 400;
   line-height: normal;
`

const ButtonsContainer = styled('section')`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 2rem;
   margin-bottom: 20px;
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
   width: 19rem;
   height: 11.5rem;
`

const StyleTitle = styled('p')`
   width: 16.4375rem;
`
const IconButtonStyled = styled(IconButton)(() => ({
   padding: '0px',
   margin: '0px',
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
      width: '22%',
      height: '25%',
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
