import React from 'react'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import {
   AirBNBIcon,
   InstagramIcon,
   TelegramIcon,
   WhatsAppIcon,
} from '../../assets/icons'

export function Footer({ state }) {
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }
   const scrollToTopToRegions = () => {
      window.scrollTo({
         top: 780,
         behavior: 'smooth',
      })
   }
   const goToInstagram = () => {
      window.location.href = 'https://www.instagram.com/makhmat0v/'
   }
   const goToWhatsapp = () => {
      window.location.href = ' https://web.whatsapp.com/'
   }
   const goToTelegramm = () => {
      window.location.href = 'https://t.me/+H8Nly-afXOIzYWMy'
   }
   return (
      <Container state={state}>
         <StyledDiv state={state}>
            <SsylkaDiv>
               <Ssylka href="***" onClick={scrollToTopToRegions}>
                  Regions{' '}
               </Ssylka>
               <Ssylka to="/main/AddAnouncementForm">leave an ad</Ssylka>
            </SsylkaDiv>
            <div>
               <AirBNBIcon
                  style={{ width: '5rem', height: '5rem' }}
                  onClick={scrollToTop}
               />
            </div>
            <SocialDiv>
               <InstagramIconStyled onClick={goToInstagram} />
               <WhatsAppIconStyled onClick={goToWhatsapp} />
               <TelegramIconStyled onClick={goToTelegramm} />
            </SocialDiv>
         </StyledDiv>
         <PTag>© Copyright PeakSoft. All Rights Reserved</PTag>
      </Container>
   )
}
const Container = styled('div')((props) => ({
   background: '#1C2E20',
   width: '100%',
   padding: props.state ? '1rem 1rem 1rem 1rem' : '4rem 6rem 1rem 6rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}))
const StyledDiv = styled('div')((props) => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: props.state ? '0' : '3rem',
}))
const SocialDiv = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
}))
const PTag = styled('p')(() => ({
   color: '#859589',
   fontFamily: ' Inter',
   fontSize: '1rem',
   fontWeight: '400',
}))
const SsylkaDiv = styled('div')(() => ({
   display: 'flex',
   gap: '2rem',
}))
const Ssylka = styled(Link)(() => ({
   fontFamily: 'Inter',
   fontSize: '1.2 rem',
   fontWeight: '500',
   color: 'white',
   '&:hover': {
      color: '#FFBE58',
   },
}))
const InstagramIconStyled = styled(InstagramIcon)(() => ({
   '&:hover': {
      width: '28%',
      height: '28%',
   },
}))
const WhatsAppIconStyled = styled(WhatsAppIcon)(() => ({
   '&:hover': {
      width: '28%',
      height: '28%',
   },
}))
const TelegramIconStyled = styled(TelegramIcon)(() => ({
   '&:hover': {
      width: '28%',
      height: '28%',
   },
}))
