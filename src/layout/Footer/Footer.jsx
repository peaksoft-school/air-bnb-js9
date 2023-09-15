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
   return (
      <Container state={state}>
         <StyledDiv state={state}>
            <SsylkaDiv>
               <Ssylka href="/">Regions </Ssylka>
               <Ssylka to="/AddAnouncementForm">leave an ad</Ssylka>
            </SsylkaDiv>

            <div>
               <AirBNBIcon style={{ width: '5rem', height: '5rem' }} />
            </div>

            <SocialDiv>
               <IconInstagram />
               <IconWhatsAppIcon />
               <IconTelegramIcon />
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

const IconInstagram = styled(InstagramIcon)(() => ({
   cursor: 'pointer',
}))
const IconWhatsAppIcon = styled(WhatsAppIcon)(() => ({
   cursor: 'pointer',
}))
const IconTelegramIcon = styled(TelegramIcon)(() => ({
   cursor: 'pointer',
}))
