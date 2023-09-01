import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, InputAdornment, MenuItem, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
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
import { userRoles } from '../../utils/constants'
import { MeatBalls } from '../../components/UI/meat-balls/MeatBalls'

import { authActions } from '../../store/auth/authSlice'
import Modal from '../../components/UI/modal/Modal'

export function Header({ login, profile }) {
   // const [meatBalls, setMeatBalls] = useState(false)
   const { isAuthorization, email } = useSelector((state) => state.auth)

   const [userLogin, setUserLogin] = useState(false)
   const [openModal, setOpenModal] = useState(false)
   const [signIn, setSignIn] = useState(false)
   const [currentEl, setCurrentEl] = useState(null)

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

   const dispatch = useDispatch()

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
   const navigate = useNavigate()

   const open = Boolean(currentEl)
   const idd = open ? 'simple-popover' : undefined

   return (
      <Container>
         {openModal ? (
            <Modal
               open={openModal}
               onClose={openModalHandler}
               borderRadius="0.125rem"
               border="none"
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
            <StyleHeader login={login}>
               <StateBlock>
                  <AirBNBIcon />
               </StateBlock>
               <InputDiv>
                  {isAuthorization ? (
                     <FavoriteDiv>
                        <StyleLink to="/AddAnouncementForm">
                           leave an ad
                        </StyleLink>
                        <div
                           style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.7rem',
                           }}
                        >
                           <Avatar
                              sx={{
                                 bgcolor: '#0298D9',
                                 paddingLeft: '12px',
                              }}
                           >
                              {userRoles.ADMIN ? email[0].toUpperCase() : 'A'}
                           </Avatar>
                           <MeatBalls
                              anchorEl={currentEl}
                              open={open}
                              close={closeMeatBallsHeandler}
                              id={idd}
                              propsVertical="top"
                              propsHorizontal="left"
                              width="15%"
                              height="16%"
                           >
                              <Button
                                 onClick={logoutHnadler}
                                 variant="outlined"
                              >
                                 log out
                              </Button>
                           </MeatBalls>
                        </div>
                     </FavoriteDiv>
                  ) : (
                     <div>
                        <StyleLink to="/AddAnouncementForm">
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
                  <BlackAirBNBIcon />
                  <LeaveAnAd>leave an ad</LeaveAnAd>
               </div>

               <SearchDiv>
                  <div className="blockCheckbox">
                     <ChecboxStyled type="checkbox" id="search" />
                     <StyledLabel htmlFor="search">Search nearby</StyledLabel>
                  </div>
                  <Input
                     type="search"
                     width="30rem"
                     size="small"
                     placeholder="Search"
                     barsbek="krash"
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
                  {isAuthorization ? (
                     <FavoriteDiv>
                        {/* <StyleLink>leave an ad</StyleLink> */}
                        <div
                           style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.7rem',
                           }}
                        >
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
                                       My prifile
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
                        </div>
                     </FavoriteDiv>
                  ) : null}
               </SearchDiv>
            </StyleHeader>
         )}
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   width: '100%',
   justifyContent: 'space-between',
}))

const InputDiv = styled('div')(() => ({
   display: 'flex',
   gap: '2rem',
   alignItems: 'center',
   div: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '3.75rem',
   },
}))

const StateBlock = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   div: {
      display: 'flex',
      alignItems: 'center',
      gap: '3.75rem',
   },
}))
const StyleLink = styled(Link)(() => ({
   width: '100px',
   textDecoration: 'none',
   color: 'var(--primary-white, #FFF)',
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
   cursor: 'pointer',
}))

const FavoriteDiv = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '4rem',
}))

const StyleHeader = styled('header')((props) => ({
   width: '100%',
   height: ' 5.5rem',
   backgroundColor: props.background || '',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '1rem 6.25rem',

   '.headerIcon': {
      display: 'flex',
      alignItems: 'center',
      gap: '3.75rem',
   },
}))
const LeaveAnAd = styled('p')(() => ({
   color: '#FFBE58',
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
   cursor: 'pointer',
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
