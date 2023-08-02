import { styled } from '@mui/material'
import React from 'react'
import { Button } from '../UI/button/Button'
import { Google } from '../../assets/icons'

export function JoinUs({ loginHandler, moveToSigninAndSignUp }) {
   return (
      <Container>
         <StyledH3>JOIN US</StyledH3>
         <StyledPtag>
            Sign in with Google to start booking available listings!
         </StyledPtag>
         <Button onClick={loginHandler} width="100%">
            <Google /> Google
         </Button>
         <StyledAhref onClick={moveToSigninAndSignUp}>
            log in as admin
         </StyledAhref>
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
}))

const StyledH3 = styled('h3')(() => ({
   color: '#000',
   fontFamily: 'Inter',
   fontSize: '18px',
   fontWeight: '500',
   textTransform: ' uppercase',
   marginBottom: '1.5rem',
}))

const StyledPtag = styled('p')(() => ({
   color: '#828282',
   fontFamily: 'Inter',
   fontSize: '16px',
   fontWeight: ' 400',
   marginBottom: '1.25rem',
}))

const StyledAhref = styled('a')(() => ({
   color: '#266BD3',
   fontFamily: 'Inter',
   fontSize: '14px',
   fontWeight: ' 400',
   marginTop: '2.25rem',
   textDecoration: 'underline',
}))
