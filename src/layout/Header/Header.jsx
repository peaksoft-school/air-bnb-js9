import React, { useState } from 'react'
import { Avatar, InputAdornment, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/UI/button/Button'
import { Input } from '../../components/UI/input/Input'
import {
   BlackAirBNBIcon,
   SearchIcon,
   AirBNBIcon,
} from '../../assets/icons/index'
import { userRoles } from '../../utils/constants'
import { MenuEditAndDelete } from '../../components/UI/menu/MenuEditAndDelete'

import { authActions } from '../../store/auth/authSlice'

export function Header({ userLogin, openModalHandler }) {
   const [login, setLogin] = useState(true)
   const [meatBalls, setMeatBalls] = useState(false)
   const { isAuthorization, email } = useSelector((state) => state.auth)

   const dispatch = useDispatch()

   const toggleMeatBalls = () => {
      setMeatBalls(!meatBalls)
   }
   function headerLoginHandler() {
      setLogin((prev) => !prev)
   }

   const logoutHnadler = () => {
      dispatch(authActions.logout())
   }
   return (
      <Container>
         {login ? (
            <StyleHeader login={login}>
               {isAuthorization ? (
                  <AirBNBIcon />
               ) : (
                  <StateBlock>
                     <AirBNBIcon />
                     <div>
                        <StyleLink>leave an ad</StyleLink>
                        <StyledButton
                           variant="contained"
                           onClick={openModalHandler}
                           width="13rem"
                           bgColor="#DD8A08"
                           color="white"
                           fontFamily="Inter"
                           fontWeight="500"
                        >
                           {userLogin ? 'SUBMIT AN AD' : 'JOIN US'}
                        </StyledButton>
                     </div>
                  </StateBlock>
               )}
               <InputDiv>
                  {isAuthorization ? (
                     <FavoriteDiv>
                        <StyleLink>leave an ad</StyleLink>
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
                           <MenuEditAndDelete
                              open={meatBalls}
                              openHandler={toggleMeatBalls}
                              state="true"
                              right="6.5vw"
                              top="10vh"
                              padding="0.4rem 0.3rem"
                              minHeight="0%"
                              minWidth="0%"
                           >
                              <Button
                                 onClick={logoutHnadler}
                                 variant="outlined"
                              >
                                 log out
                              </Button>
                           </MenuEditAndDelete>
                        </div>
                     </FavoriteDiv>
                  ) : null}
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
                     <ChecboxStyled
                        type="checkbox"
                        id="search"
                        onClick={() => headerLoginHandler()}
                     />
                     <StyledLabel htmlFor="search">Search nearby</StyledLabel>
                  </div>
                  <Input
                     type="search"
                     width="25rem"
                     size="small"
                     placeholder="Search"
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <SearchIcon />
                           </InputAdornment>
                        ),
                     }}
                  />
                  <StyledButton variant="contained">
                     {userLogin ? 'SUBMIT AN AD' : 'JOIN US'}
                  </StyledButton>
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
const StyleLink = styled('a')(() => ({
   textDecoration: 'none',
   color: 'var(--primary-white, #FFF)',
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
   cursor: 'pointer',
}))

const StyledButton = styled(Button)(() => ({
   width: '13rem',
   backgroundColor: '#DD8A08',
   color: 'white',
   fontFamily: 'Inter',
   fontWeight: '500',
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
      width: '10vw',
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
