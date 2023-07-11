import React from 'react'
import { styled } from '@mui/material'
import Emblema from '../../assets/icons/Emblema.svg'
import Insta from '../../assets/icons/Insta.svg'
import Telega from '../../assets/icons/Telega.svg'
import Whatsapp from '../../assets/icons/Whatsapp.svg'

export function Footer() {
   return (
      <Container>
         <StyledDiv>
            <SsylkaDiv>
               <Ssylka href="***">Regions </Ssylka>
               <Ssylka href="***">leave an ad</Ssylka>
            </SsylkaDiv>

            <div>
               <img src={Emblema} alt="emblema" />
            </div>

            <SocialDiv>
               <img src={Insta} alt="" />
               <img src={Telega} alt="" />
               <img src={Whatsapp} alt="" />
            </SocialDiv>
         </StyledDiv>

         <PTag>© Copyright PeakSoft. All Rights Reserved</PTag>
      </Container>
   )
}
const Container = styled('div')(() => ({
   background: '#1C2E20',
   width: '100%',
   padding: '4rem 6rem 1rem 6rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}))

const StyledDiv = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '3rem',
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
const Ssylka = styled('a')(() => ({
   fontFamily: 'Inter',
   fontSize: '1.2 rem',
   fontWeight: '500',
   color: 'white',
   '&:hover': {
      color: '#FFBE58',
   },
}))
