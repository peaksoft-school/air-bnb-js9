import React, { useState } from 'react'
import { Button, InputAdornment, styled } from '@mui/material'
import BlackEmblema from '../../assets/icons/BlackEmblema.svg'
import Search from '../../assets/icons/Search.svg'
import Group from '../../assets/icons/Group.svg'
import { Input } from '../../components/UI/input/Input'

export function Header() {
   const [login, setLogin] = useState(false)

   function loginHandler() {
      setLogin((prev) => !prev)
   }
   return (
      <Container>
         <img src={BlackEmblema} alt="" />
         <InputDiv>
            <ChecboxStyled type="checkbox" id="search" />
            <StyledLabel htmlFor="search">Search nearby</StyledLabel>
            <SearchDiv>
               <Input
                  type="search"
                  width="25rem"
                  size="small"
                  placeholder="Search"
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <img src={Search} alt="" />
                        </InputAdornment>
                     ),
                  }}
               />
            </SearchDiv>
            <StyledButton variant="contained" onClick={() => loginHandler()}>
               {login ? 'SUBMIT AN AD' : 'JOIN US'}
            </StyledButton>
            {login ? (
               <FavoriteDiv>
                  <p style={{ fontWeight: '500' }}>FAVORITE(4)</p>
                  <img src={Group} alt="" />
               </FavoriteDiv>
            ) : null}
         </InputDiv>
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   width: '100%',
   border: '1px solid black',
   justifyContent: 'space-between',
   padding: '1.5rem 6rem 1.5rem 5rem',
}))

const InputDiv = styled('div')(() => ({
   display: 'flex',
   gap: '2rem',
   alignItems: 'center',
}))

const SearchDiv = styled('div')(() => ({
   display: 'flex',
}))

const StyledButton = styled(Button)(() => ({
   width: '13rem',
   backgroundColor: '#DD8A08',
   color: 'white',
   fontFamily: 'Inter',
   fontWeight: '500',
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
   marginLeft: '-1rem',
}))

const FavoriteDiv = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '1rem',
}))
