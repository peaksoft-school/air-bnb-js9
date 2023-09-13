import React, { useEffect, useState } from 'react'
import { IconButton, Menu, MenuItem, Tooltip, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import {
   ArrowleftIcon,
   ArrowrightIcon,
   Location,
   Start1,
} from '../../../assets/icons/index'
import { Button } from '../button/Button'
import { ButtonIcon } from '../IconButton/IconButton'
import { postLike } from '../../../store/favorite/FavoriteThunk'
import { toastSnackbar } from '../snackbar/Snackbar'

export function Cards({
   data,
   page,
   toggleHandler,
   removeCard,
   rejectedHandler,
   title,
   changeHandler,
   accerptHandler,
   ...props
}) {
   const [currentImages, setCurrentImages] = useState(
      Array.isArray(data) ? Array(data.length).fill(0) : []
   )
   const [dataa, setData] = useState([])
   const [anchorEl, setAnchorEl] = useState(null)
   const dispatch = useDispatch()
   const { toastType } = toastSnackbar()

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
            newImages[index] === dataa[index].images.length - 1
               ? 0
               : newImages[index] + 1
         return newImages
      })
   }

   const truncateTitle = (title) => {
      const words = title.split(' ')
      if (words.length > 7) {
         return `${words.slice(0, 4).join(' ')}`
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

   const toggle = ({ id }) => {
      const newData = data.map((item) => {
         if (item.id === id) {
            return { ...item, open: !item.open }
         }

         return item
      })
      try {
         setData(newData)
         dispatch(postLike(id))
         toastType(
            'success',
            'Announcement  was deleted from your favorite',
            'success'
         )
      } catch (error) {
         return toastType('error!!!', error)
      }
      return {}
   }

   const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleMenuClose = () => {
      setAnchorEl(null)
   }
   return (
      <Container>
         <MainContainer>
            {data?.map((item, index) => {
               return (
                  <MapContainer key={item.id} status={item.status} state={page}>
                     <ImageStyleContainer>
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
                        <div className="images">
                           <StyleImage
                              src={item.images[currentImages[index]]}
                              alt="home"
                           />
                        </div>
                     </ImageStyleContainer>
                     <ContainerDescription>
                        <ContainerPrice>
                           <p className="price">
                              ${item.price}/ <p className="day">day</p>{' '}
                           </p>
                           <p onClick={props.dd} className="rating">
                              <StartContainer>
                                 <Start1 />
                                 <p>{item.rating}.4</p>
                              </StartContainer>
                           </p>
                        </ContainerPrice>
                        <ContainerInformation>
                           <div className="title">
                              <Tooltip title={item.title}>
                                 {truncateTitle(item.title)}
                              </Tooltip>
                           </div>
                           <div className="location">
                              <Location />
                              <p>{item.location}</p>
                           </div>
                           {item.status === 'dates' ? (
                              <ContainerGuests>
                                 <StyledHorizIcon>
                                    <DayStyle>{item.guest} guest</DayStyle>
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
                                          open={anchorEl}
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
                              </ContainerGuests>
                           ) : (
                              <ButtonsContainer>
                                 <DayStyle>{item.guest} guest</DayStyle>
                                 <Link to={`/announcement/${item.id}`}>
                                    <Button
                                       variant="contained"
                                       height="20%"
                                       bgColor="#DD8A08"
                                       color="white"
                                       width="6.4375rem"
                                    >
                                       Book
                                    </Button>
                                 </Link>
                                 <div>
                                    <ButtonIcon
                                       width="10%"
                                       open={item.favorite}
                                       onClick={() => toggle({ id: item.id })}
                                       favorite={item.favorite}
                                    />
                                 </div>
                              </ButtonsContainer>
                           )}
                        </ContainerInformation>
                     </ContainerDescription>
                  </MapContainer>
               )
            })}
         </MainContainer>
      </Container>
   )
}
const ContainerGuests = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))
const ContainerInformation = styled('div')(() => ({
   width: '100%',
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
const ButtonsContainer = styled('section')`
   width: 100%;
   padding-bottom: 20px;
   display: flex;
   align-items: center;
   gap: 1.6rem;
`
const ContainerDescription = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   padding: '0.75rem',
   gap: '1rem',
}))
const Container = styled('div')`
   padding-left: 6%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   flex-wrap: wrap;
`
const ImageStyleContainer = styled('div')`
   display: 'inline-block';
   width: ' 100%';
   height: ' 8.5rem';
   .images {
      width: 18.4375rem;
      height: 11.9375rem;
      border-radius: 0.25rem 0.25rem 0rem 0rem;
   }
`

const MainContainer = styled('div')`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: start;
   align-items: center;
   gap: 55px;
   margin-top: 2.5rem;
   width: 100%;
`
const StyleImage = styled('img')`
   width: 100%;
   height: 100%;
   border-radius: 0.25rem 0.25rem 0rem 0rem;
`

const MapContainer = styled('div')(({ status }) => ({
   width: '18.4375rem',
   height: status === 'dates' ? '16%' : '16%',
   borderRadius: '4px',
   outline: status === 'dates' ? '3px solid #ff0000' : 'none',
   border: status === 'dates' ? '4px solid pink' : ' none',
   flexWrap: 'wrap',
   display: 'flex',
   position: 'relative',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   lineHeight: '2rem',

   boxShadow: '1px -2px 19px -5px rgba(34, 60, 80, 0.37)',

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
         justifyContent: 'start',
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

const DayStyle = styled('p')`
   color: #6c6c6c;
   font-family: Inter;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   gap: 5px;
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

const IconButtonStyled = styled(IconButton)(() => ({
   padding: '0px',
   margin: '0px',
   // marginLeft: '5rem',
   width: '70%',

   '&.MuiIconButton-root:hover': {
      boxShadow: 'none',
      backgroundColor: 'rgba(0,0,0,0.0)',
   },
   '&.MuiIconButton-root:active': {
      boxShadow: 'none',
      backgroundColor: 'rgba(0,0,0,0.0)',
   },
}))

const StyledMenu = styled(Menu)(() => ({
   '& .MuiPaper-root': {
      width: '13%',
      height: '20%',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '0.125rem',
      background: ' #FFF',
      border: ' 1px solid var(--tertiary-light-gray, #C4C4C4)',
      boxShadow: 'none',
      li: {
         width: '250%',
      },
   },
}))

const MoreHorizIconStyled = styled(MoreHorizIcon)(() => ({
   '&.MuiSvgIcon-root': {
      width: '23%',
      height: '23%',
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
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-left: 1rem;
`
