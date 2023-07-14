import { styled } from '@mui/material'
import React from 'react'
import chui from '../../assets/images/chui.png'
import batken from '../../assets/images/batken.png'
import jalalabat from '../../assets/images/jalalAbad.png'
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
                  <ChuiAndOshCard
                     style={{
                        background: `url(${chui})`,
                        backgroundSize: 'cover',
                     }}
                  >
                     <StyleName>CHUI</StyleName>
                  </ChuiAndOshCard>

                  <div className="blockItemRegion">
                     <div>
                        <ItemRegionCard
                           style={{
                              background: `url(${batken})`,
                              backgroundSize: 'cover',
                           }}
                        >
                           <StyleName>batken</StyleName>
                        </ItemRegionCard>
                        <ItemRegionCard
                           style={{
                              background: `url(${jalalabat})`,
                              backgroundSize: 'cover',
                           }}
                        >
                           <StyleName>Jalalabat</StyleName>
                        </ItemRegionCard>
                     </div>
                     <NarynAndBihkek
                        style={{
                           background: `url(${naryn})`,
                           backgroundSize: 'cover',
                        }}
                     >
                        <StyleName>naryn</StyleName>
                     </NarynAndBihkek>
                  </div>
               </BlockRegion1>

               <BlockRegion2>
                  <div className="blockItemRegion">
                     <div>
                        <ItemRegionCard
                           style={{
                              background: `url(${IssykKul})`,
                              backgroundSize: 'cover',
                           }}
                        >
                           <StyleName>Issyk-kul</StyleName>
                        </ItemRegionCard>
                        <ItemRegionCard
                           style={{
                              background: `url(${talas})`,
                              backgroundSize: 'cover',
                           }}
                        >
                           <StyleName>talas</StyleName>
                        </ItemRegionCard>
                     </div>
                     <NarynAndBihkek
                        style={{
                           background: `url(${bishkek})`,
                           backgroundSize: 'cover',
                        }}
                     >
                        <StyleName>bishkek</StyleName>
                     </NarynAndBihkek>
                  </div>
                  <ChuiAndOshCard
                     style={{
                        background: `url(${osh})`,
                        backgroundSize: 'cover',
                     }}
                  >
                     <StyleName>osh</StyleName>
                  </ChuiAndOshCard>
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
   display: 'flex',
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
      gap: '1.25rem',
      div: {
         display: 'flex',
         gap: '1.25rem',
      },
   },
}))

const BlockRegion2 = styled('div')(() => ({
   display: 'flex',
   gap: '1.25rem',
   padding: '0 0 10px 0',

   '.blockItemRegion': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
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
   cursor: 'pointer',
}))

const ChuiAndOshCard = styled('div')(() => ({
   width: '31.5625rem',
   height: ' 38.09rem',
   padding: '36rem 0 0 1.25rem',
   cursor: 'pointer',
}))
const ItemRegionCard = styled('div')(() => ({
   width: ' 21.6875rem',
   height: '18.875rem',
   padding: '16rem 0 0 1.25rem',
   cursor: 'pointer',
}))
const NarynAndBihkek = styled('div')(() => ({
   width: ' 44.6875rem',
   height: '18rem',
   background: `url(${bishkek})`,
   backgroundSize: 'cover',
   padding: '16rem 0 0 1.25rem',
   cursor: 'pointer',
}))
