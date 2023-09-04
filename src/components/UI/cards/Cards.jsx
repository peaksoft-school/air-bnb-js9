import React, { useEffect, useState } from 'react'
import { IconButton, Menu, MenuItem, Tooltip, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
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

      setData(newData)
      dispatch(postLike(id))
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
                     <div>
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
                           <p>{item.rating}.4</p>
                           <h2>{item.id}</h2>
                        </StartContainer>
                     </DayStartContainer>
                     <StyleTitle>
                        <Tooltip title={item.title}>
                           {truncateTitle(item.title)}
                        </Tooltip>
                     </StyleTitle>
                     <LocationCantainerStyle>
                        <Location />
                        <p>{item.location}</p>
                     </LocationCantainerStyle>
                     {item.status === 'dates' ? (
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
                     ) : (
                        <ButtonsContainer>
                           <DayStyle>{item.guest} guest</DayStyle>
                           <Button
                              variant="contained"
                              height="20%"
                              bgColor="#DD8A08"
                              s
                              color="white"
                              width="6.4375rem"
                           >
                              Book
                           </Button>
                           <ButtonIcon
                              width="10%"
                              open={item.favorite}
                              onClick={() => toggle({ id: item.id })}
                              favorite={item.favorite}
                           />
                        </ButtonsContainer>
                     )}
                  </MapContainer>
               )
            })}
         </MainContainer>
      </Container>
   )
}
const Container = styled('div')`
   padding-left: 6.5%;
`

const MainContainer = styled('div')`
   line-height: 2rem;
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: start;
   align-items: center;
   align-items: start;
   gap: 60px;
   flex-wrap: wrap;
   margin-top: 2.5rem;
`

const MapContainer = styled('div')(({ status }) => ({
   width: '19.8%',
   height: status === 'dates' ? '16%' : '16%',
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
   width: 100%;
   padding: 0rem 1rem 0.5rem 1rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const DayStyle = styled('p')`
   color: #6c6c6c;
   font-family: Inter;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   display: flex;
   line-height: normal;
   display: flex;
   gap: 5px;
`

const LocationCantainerStyle = styled('section')`
   display: flex;
   align-items: center;
   color: var(--tertiary-middle-gray, #828282);
   font-family: Inter;
   font-size: 0.875rem;
   font-weight: 400;
   line-height: normal;

   margin: 0.5rem 9rem 1rem 0rem;
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
   width: 17.6rem;
   height: 11.5rem;
`

const StyleTitle = styled('p')`
   width: 16.4375rem;
`
const IconButtonStyled = styled(IconButton)(() => ({
   padding: '0px',
   margin: '0px',
   marginLeft: '5rem',
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
