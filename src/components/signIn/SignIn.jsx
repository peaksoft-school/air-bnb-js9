import { styled } from '@mui/material'
import React from 'react'
import { Input } from '../UI/input/Input'
import { Button } from '../UI/Button'

export function SignIn({ func }) {
   const validateLogin = (value) => {
      if (value.includes('@')) {
         return ''
      }
      return 'Login should have "@"'
   }

   const validatePassword = (value) => {
      if (value.length < 8) {
         return 'Password must be more than 8 symbols'
      }
      return ''
   }

   return (
      <Container>
         <StyledH3>SIGN IN</StyledH3>
         <InputDiv>
            <Input
               validate={validateLogin}
               barsbek="krash"
               size="small"
               placeholder="Login"
            />
            <Input
               validate={validatePassword}
               barsbek="krash"
               size="small"
               placeholder="Password"
            />
         </InputDiv>

         <Button variant="contained" width="100%" color="white">
            SIGN IN
         </Button>
         <StyledAhref onClick={func}>sign in with google</StyledAhref>
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   border: '1px solid gray',
   width: '29.625rem',
   padding: '1.56rem 1.87rem 1.56rem 1.87rem',
   backgroundColor: 'white',
   borderRadius: '10px',
}))

const InputDiv = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '100%',
   marginBottom: '2rem',
}))

const StyledH3 = styled('h3')(() => ({
   color: '#000',
   fontFamily: 'Inter',
   fontSize: '18px',
   fontWeight: '500',
   textTransform: ' uppercase',
   marginBottom: '1.5rem',
}))

const StyledAhref = styled('a')(() => ({
   color: '#266BD3',
   fontFamily: 'Inter',
   fontSize: '14px',
   fontWeight: ' 400',
   marginTop: '1.8rem',
   textDecoration: 'underline',
}))
