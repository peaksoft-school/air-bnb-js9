import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Footer } from '../../../layout/footer/Footer'
import { Header } from '../../../layout/header/Header'

export function NotFound() {
   const { darkMode } = useSelector((state) => state.darkMode)
   const role = useSelector((state) => state.auth.role)

   return (
      <GlobalContainer state={darkMode}>
         <Header login="true" notFound="404" />

         <Container404 state={darkMode}>
            <div className="not">
               <h1>404</h1>
               <h2>The page is not available</h2>
            </div>
            <div>
               <p>The page is unavailable, you can go to</p>
               <StyleLink to={role === 'USER' || 'GUEST' ? '/' : '/admin'}>
                  Home
               </StyleLink>
            </div>
         </Container404>

         <Footer state="not-fount" />
      </GlobalContainer>
   )
}
const GlobalContainer = styled('div')((props) => ({
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   backgroundColor: props.state ? '#000' : '#fff',
}))

const Container404 = styled('div')((props) => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '1.2rem',

   '.not': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.3rem',
      h1: {
         color: '#DD8A08',
         fontSize: '5rem',
      },
      h2: {
         color: props.state ? '#fff' : '#000',
         fontSize: '2.5rem',
      },
   },

   div: {
      display: 'flex',
      alignItems: 'center',
      gap: '1vw',
      p: {
         color: 'gray',
         fontSize: '1.3rem',
      },
   },
}))
const StyleLink = styled(Link)(() => ({
   color: '#DD8A08',
   fontSize: '1.2rem',
   fontWeight: '400',
   '&:hover': {
      textDecoration: 'underline',
   },
}))
