import { styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Chui from '../../assets/images/chui.png'
import batken from '../../assets/images/batken.png'
import Jalalabat from '../../assets/images/jalalAbad.png'
import IssykKul from '../../assets/images/yssykKol.png'
import talas from '../../assets/images/talas.png'
import bishkek from '../../assets/images/bishkek.png'
import osh from '../../assets/images/osh.png'
import naryn from '../../assets/images/naryn.png'

export function MainRegion() {
   return (
      <GlobalConteiner>
         <MainContainer>
            <ContainerText>
               <h3>Regions in kyrgystan </h3>
               <p>
                  You can visit the site any day and be sure that you will find
                  everything for a great vacation.
               </p>
            </ContainerText>
            <ContainerRegion>
               <BlockRegion1>
                  <Link to="/">
                     <img src={Chui} alt="#" />
                     <StyleName>CHUI</StyleName>
                  </Link>

                  <div className="blockItemRegion">
                     <div>
                        <Link to="/">
                           <img src={batken} alt="#" />
                           <StyleName>batken</StyleName>
                        </Link>
                        <Link to="/">
                           <img src={Jalalabat} alt="#" />
                           <StyleName>Jalalabat</StyleName>
                        </Link>
                     </div>
                     <Link to="/">
                        <img src={naryn} alt="#" />
                        <StyleName>naryn</StyleName>
                     </Link>
                  </div>
               </BlockRegion1>

               <BlockRegion2>
                  <div className="blockItemRegion">
                     <div>
                        <Link to="/">
                           <img src={IssykKul} alt="#" />
                           <StyleName>Issyk-kul</StyleName>
                        </Link>
                        <Link to="/">
                           <img src={talas} alt="#" />
                           <StyleName>talas</StyleName>
                        </Link>
                     </div>
                     <Link to="/">
                        <img src={bishkek} alt="#" />
                        <StyleName>bishkek</StyleName>
                     </Link>
                  </div>
                  <Link to="/">
                     <img src={osh} alt="#" />
                     <StyleName>osh</StyleName>
                  </Link>
               </BlockRegion2>
            </ContainerRegion>
         </MainContainer>
      </GlobalConteiner>
   )
}
const GlobalConteiner = styled('div')(() => ({
   width: '100%',
   display: 'grid',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '10.62rem  0 0 0',
}))
const MainContainer = styled('div')(() => ({
   width: '100%',
   display: 'grid',
   flexDirection: 'column',
   gap: '3.75rem',
}))
const ContainerText = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.88rem',
   h3: {
      color: 'var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: ' 1.25rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      textTransform: 'uppercase',
   },
   p: {
      color: 'var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: ' 1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      textTransform: 'uppercase',
   },
}))
const ContainerRegion = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.25rem',
}))
const BlockRegion1 = styled('div')(() => ({
   display: 'flex',
   gap: '1.25rem',

   '.blockItemRegion': {
      display: 'flex',
      flexDirection: 'column',

      div: {
         display: 'flex',
         gap: '1.25rem',
      },
   },
}))

const BlockRegion2 = styled('div')(() => ({
   display: 'flex',
   gap: '1.25rem',

   '.blockItemRegion': {
      display: 'flex',
      flexDirection: 'column',

      div: {
         display: 'flex',
         gap: '1.25rem',
      },
   },
}))

const StyleName = styled('p')(() => ({
   color: '#fff',
   fontFamily: 'Inter',
   fontSize: ' 1rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
   textTransform: 'uppercase',
   position: 'relative',
   top: '-40px',
   left: '20px',
}))
