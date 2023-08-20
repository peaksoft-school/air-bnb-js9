/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@mui/material'
import React from 'react'
import { signInWithPopup } from '@firebase/auth'
import { useDispatch } from 'react-redux'
import { Button } from '../UI/button/Button'
import { Google } from '../../assets/icons'
import { auth, provider } from '../../config/fireBaseConfig'
import { authWithGoogleRequest } from '../../store/auth/authThunk'
import { toastSnackbar } from '../UI/snackbar/Snackbar'

export function JoinUs({ moveToSigninAndSignUp }) {
   const dispatch = useDispatch()
   const { toastType } = toastSnackbar()
   const signInGoogleHandler = async () => {
      try {
         await signInWithPopup(auth, provider).then((data) => {
            console.log(data.user.accessToken)
            dispatch(authWithGoogleRequest(data.user.accessToken)).unwrap()
            toastType(
               'success',
               'Successfully logIn as USER',
               'Вы только что выполнили вход в наш сайт через google account'
            )
         })
      } catch (error) {
         toastType('error', 'Login error', 'Something went wrong')
      }
   }

   return (
      <Container>
         <StyledH3>JOIN US</StyledH3>
         <StyledPtag>
            Sign in with Google to start booking available listings!
         </StyledPtag>
         <Button onClick={signInGoogleHandler} width="100%">
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
   cursor: 'pointer',
}))
