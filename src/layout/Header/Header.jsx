import React from 'react'
import { Button, InputAdornment, styled } from '@mui/material'
import { Input } from '../../components/UI/input/Input'
import {
   BlackAirBNBIcon,
   GroupIcon,
   SearchIcon,
   AirBNBIcon,
} from '../../assets/icons/index'

export function Header({ userLogin, openModalHandler, login, setLogin }) {
   // const [login, setLogin] = useState(true)

   function headerLoginHandler() {
      setLogin((prev) => !prev)
   }
   return (
      <Container>
         {login ? (
            <StyleHeader login={login}>
               {userLogin ? (
                  <AirBNBIcon />
               ) : (
                  <StateBlock>
                     <AirBNBIcon />
                     <div>
                        <StyleLink>leave an ad</StyleLink>
                        <StyledButton
                           variant="contained"
                           onClick={openModalHandler}
                        >
                           {userLogin ? 'SUBMIT AN AD' : 'JOIN US'}
                        </StyledButton>
                     </div>
                  </StateBlock>
               )}
               <InputDiv>
                  {userLogin ? (
                     <FavoriteDiv>
                        <StyleLink>leave an ad</StyleLink>
                        <GroupIcon />
                     </FavoriteDiv>
                  ) : null}
               </InputDiv>
            </StyleHeader>
         ) : (
            <StyleHeader background="#fff">
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
   gap: '3rem',
}))

const StyleHeader = styled('header')((props) => ({
   width: '100%',
   height: ' 5.5rem',
   backgroundColor: props.background || '',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '1rem 7.25rem',

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
