/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { InputAdornment, styled, Avatar, MenuItem } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { Button } from '../../components/UI/button/Button'
import { JoinUs } from '../../components/signIn/JoinUs'
import { SignIn } from '../../components/signIn/SignIn'
import { Input } from '../../components/UI/input/Input'
import {
   BlackAirBNBIcon,
   SearchIcon,
   AirBNBIcon,
   SelectionIcon,
} from '../../assets/icons/index'
import { getGlobalSearch } from '../../store/search/searchThunk'
import { userRoles } from '../../utils/constants'
import { MeatBalls } from '../../components/UI/meat-balls/MeatBalls'
import { authActions } from '../../store/auth/authSlice'
import Modal from '../../components/UI/modal/Modal'
import { DarkModeActions } from '../../store/dark-mode/DarkModeSlice'

export function Header({ login, profile, notFound, favoriteLenght, favorite }) {
   // const [meatBalls, setMeatBalls] = useState(false)
   const { isAuthorization, email } = useSelector((state) => state.auth)

   const [userLogin, setUserLogin] = useState(false)
   const [openModal, setOpenModal] = useState(false)
   const [signIn, setSignIn] = useState(false)
   const [currentEl, setCurrentEl] = useState(null)
   const [isChecked, setIsChecked] = useState(false)
   const [searchText, setSearchText] = useState('')
   const [searchedValue] = useDebounce(searchText, 1000)
   const [location, setLocation] = useState(null)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const onChangeRegions = (e) => {
      setSearchText(e.target.value)
   }

   function getUserLocation() {
      if ('geolocation' in navigator) {
         navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            setLocation({ latitude, longitude })
         })
      } else {
         console.error('Браузер не поддерживает геолокацию.')
      }
   }

   useEffect(() => {
      getUserLocation()
   }, [])

   useEffect(() => {
      if (location) {
         const params = {
            word: searchedValue,
            isNearby: isChecked,
            latitude: location.latitude,
            longitude: location.longitude,
         }

         if (searchedValue.trim().length > 0) {
            dispatch(getGlobalSearch(params))
         }
      }
   }, [location, searchedValue, isChecked])
   const { darkMode } = useSelector((state) => state.darkMode)
   const [scrollPosition, setScrollPosition] = useState(0)
   const [showFavorite, setShowFavorite] = useState(false)
   const headerHeight = 5.5
   const threshold = 100

   useEffect(() => {
      const handleScroll = () => {
         const currentPosition = window.scrollY
         setScrollPosition(currentPosition)
         setShowFavorite(currentPosition > threshold)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   const loginHandler = () => {
      setUserLogin((prev) => !prev)
   }

   const openModalHandler = () => {
      setOpenModal((prev) => !prev)
   }

   const moveToSigninAndSignUp = () => {
      setSignIn((prev) => !prev)
   }

   useEffect(() => {
      if (isAuthorization) {
         setOpenModal(false)
      }
   }, [isAuthorization])

   // const toggleMeatBalls = () => {
   //    setMeatBalls(!meatBalls)
   // }

   const logoutHnadler = () => {
      dispatch(authActions.logout())
   }

   const handleMenuOpen = (e) => {
      setCurrentEl(e.currentTarget)
   }

   const closeMeatBallsHeandler = () => {
      setCurrentEl(null)
   }

   const toggleHandler = () => {
      dispatch(DarkModeActions.darkModeHandler())
   }

   const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked)
   }
   const navProfile = () => {
      navigate('/Profile/my-announcement')
   }
   const open = Boolean(currentEl)
   const idd = open ? 'simple-popover' : undefined

   return (
      <Container>
         {openModal ? (
            <Modal
               open={openModal}
               onClose={openModalHandler}
               width="29.625rem"
               border="none"
               borderRadius="0.125rem"
            >
               {signIn ? (
                  <SignIn moveToSigninAndSignUp={moveToSigninAndSignUp} />
               ) : (
                  <JoinUs
                     loginHandler={loginHandler}
                     moveToSigninAndSignUp={moveToSigninAndSignUp}
                  />
               )}
            </Modal>
         ) : null}
         {login === 'true' ? (
            <StyleHeader
               login={login}
               notFound={notFound}
               darkMode={darkMode}
               headerHeight={headerHeight}
               scrollPosition={scrollPosition}
               threshold={threshold}
            >
               <StateBlock>
                  <StyledAirBNBIcon onClick={() => navigate('/')} />
                  <StyledButtons
                     onClick={toggleHandler}
                     type="button"
                     color="white"
                  >
                     {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                  </StyledButtons>
               </StateBlock>
               <InputDiv>
                  {isAuthorization ? (
                     <FavoriteDiv>
                        <StyleLink to="/main/AddAnouncementForm">
                           leave an ad
                        </StyleLink>
                        {showFavorite && (
                           <StyledFavorite>FAVORITE(5)</StyledFavorite>
                        )}
                        <LogOut>
                           <Avatar
                              sx={{
                                 bgcolor: '#0298D9',
                              }}
                           >
                              {userRoles.ADMIN ? email[0].toUpperCase() : 'A'}
                           </Avatar>
                           <SelectionIcon onClick={handleMenuOpen} />
                           <MeatBalls
                              anchorEl={currentEl}
                              open={open}
                              close={closeMeatBallsHeandler}
                              id={idd}
                              propsVertical="bottom"
                              propsHorizontal="left"
                              width=" 10rem"
                              height=" 6rem"
                              margin="0.7rem 10rem -10rem 0"
                           >
                              <MenuItem onClick={logoutHnadler}>
                                 log out
                              </MenuItem>
                              <MenuItem onClick={navProfile}>
                                 My profile
                              </MenuItem>
                           </MeatBalls>
                        </LogOut>
                     </FavoriteDiv>
                  ) : (
                     <div className="leave">
                        <StyleLink to="/main/AddAnouncementForm">
                           leave an ad
                        </StyleLink>
                        <Button
                           variant="contained"
                           onClick={openModalHandler}
                           width="13rem"
                           bgColor="#DD8A08"
                           color="white"
                           fontFamily="Inter"
                           fontWeight="500"
                        >
                           {userLogin ? 'SUBMIT AN AD' : 'JOIN US'}
                        </Button>
                     </div>
                  )}
               </InputDiv>
            </StyleHeader>
         ) : (
            <StyleHeader background="#ffffff">
               <div className="headerIcon">
                  <BlackAirBNBIcon
                     onClick={() => navigate('/main')}
                     style={{ cursor: 'pointer' }}
                  />
                  <StyledButtons
                     onClick={toggleHandler}
                     type="button"
                     color="black"
                  >
                     {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                  </StyledButtons>
               </div>

               <SearchDiv>
                  {login === 'true' ? (
                     <StyleLink to="/main/AddAnouncementForm">
                        leave an ad
                     </StyleLink>
                  ) : null}
                  <div className="blockCheckbox">
                     <ChecboxStyled
                        type="checkbox"
                        id="search"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                     />
                     <StyledLabel htmlFor="search">Search nearby</StyledLabel>
                  </div>
                  <Input
                     type="search"
                     width="30rem"
                     size="small"
                     value={searchText}
                     placeholder="Search"
                     onChange={onChangeRegions}
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <SearchIcon />
                           </InputAdornment>
                        ),
                     }}
                  />
                  <Button
                     onClick={openModalHandler}
                     variant="contained"
                     width="296px"
                     padding="10px 16px"
                     borderRadius="2px"
                     bgColor="#DD8A08"
                     color="white"
                     fontSize=" 14px"
                     fontWeight=" 500"
                  >
                     {isAuthorization ? 'SUBMIT AN AD' : 'JOIN US'}
                  </Button>
                  {favorite === 'true' && (
                     <FavoriteStyle>Favorite({favoriteLenght})</FavoriteStyle>
                  )}
                  {isAuthorization ? (
                     <FavoriteDiv>
                        {/* <StyleLink>leave an ad</StyleLink> */}
                        <LogOut>
                           <Avatar sx={{ bgcolor: '#0298D9' }}>
                              {userRoles.ADMIN ? email[0].toUpperCase() : 'A'}
                           </Avatar>
                           <SelectionIcon onClick={handleMenuOpen} />
                           <MeatBalls
                              anchorEl={currentEl}
                              open={open}
                              close={closeMeatBallsHeandler}
                              id={idd}
                              propsVertical="bottom"
                              propsHorizontal="left"
                              width="11.25rem"
                              height=" 5.5rem"
                           >
                              {profile === 'true' ? (
                                 <>
                                    <MenuItem
                                       onClick={() => navigate('/Prifile')}
                                    >
                                       My profile
                                    </MenuItem>
                                    <MenuItem onClick={logoutHnadler}>
                                       log out{' '}
                                    </MenuItem>
                                 </>
                              ) : (
                                 <Button
                                    onClick={logoutHnadler}
                                    variant="outlined"
                                 >
                                    log out
                                 </Button>
                              )}
                           </MeatBalls>
                        </LogOut>
                     </FavoriteDiv>
                  ) : null}
               </SearchDiv>
            </StyleHeader>
         )}
      </Container>
   )
}
const FavoriteStyle = styled('p')`
   color: #000;
   font-family: Inter;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   text-transform: uppercase;
   cursor: pointer;
`

const Container = styled('div')(() => ({
   display: 'flex',
   width: '100%',
   justifyContent: 'space-between',
}))

const StyleHeader = styled('header')((props) => ({
   width: '100%',
   height: `${props.headerHeight}rem`,
   backgroundColor: props.notFound === '404' ? '#27432d' : props.background,
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '1rem 6.25rem',
   backdropFilter: props.darkMode ? 'blur(3px)' : '',
   // background: props.darkMode ? 'rgba(0,0,0,0.3)' : '',
   background:
      props.scrollPosition > props.threshold ? 'rgba(0,0,0,0.6)' : null,
   position: 'fixed',
   zIndex: '55',

   '.headerIcon': {
      display: 'flex',
      alignItems: 'center',
      gap: '3.75rem',
   },
}))

const InputDiv = styled('div')(() => ({
   display: 'flex',
   gap: '2rem',
   alignItems: 'center',
   '.leave': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '3.75rem',
   },
}))

const StateBlock = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   gap: '1.5rem',
}))
const StyleLink = styled(Link)(({ login }) => ({
   width: '100px',
   textDecoration: 'none',
   color: login === 'false' ? '#FFBE58' : 'var(--primary-white, #FFF)',
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
   cursor: 'pointer',
   '&:hover': {
      color: '#FFBE58',
      textDecoration: 'underline',
   },
}))

const FavoriteDiv = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '4rem',
}))

const SearchDiv = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '1.87rem',
   '.blockCheckbox': {
      width: '18vw',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
   },
}))
const ChecboxStyled = styled('input')(() => ({
   width: '22px',
   height: '22px',
}))
const StyledLabel = styled('label')(() => ({
   color: '#525252',
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '1rem',
}))
const StyledAirBNBIcon = styled(AirBNBIcon)(() => ({
   cursor: 'pointer',
}))
const LogOut = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '0.7rem',
}))

const StyledFavorite = styled('p')(() => ({
   width: '100px',
   textDecoration: 'none',
   color: 'var(--primary-white, #FFF)',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: '400',
   cursor: 'pointer',
   '&:hover': {
      textDecoration: 'underline',
   },
}))

const StyledButtons = styled('button')(({ color }) => ({
   border: 'none',
   backgroundColor: 'rgba(0,0,0,0.0)',
   svg: {
      color: color === 'black' ? '#000' : '#fff',
      fontSize: '2rem',
   },
}))
