/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@mui/material'
import { useEffect, React } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import chui from '../../assets/images/chui.png'
import batken from '../../assets/images/batken.png'
import jalalabat from '../../assets/images/jalalAbad.png'
import IssykKul from '../../assets/images/yssykKol.png'
import talas from '../../assets/images/talas.png'
import bishkek from '../../assets/images/bishkek.png'
import osh from '../../assets/images/osh.png'
import naryn from '../../assets/images/naryn.png'

export function MainRegion() {
   const { darkMode } = useSelector((state) => state.darkMode)
   useEffect(() => {
      AOS.init({
         duration: 1500,
         easing: 'ease-in-out',
         once: false,
      })
   }, [])

   return (
      <GlobalConteiner darkMode={darkMode}>
         <MainContainer>
            <ContainerText darkMode={darkMode}>
               <h3 data-aos="fade-right">Regions in kyrgystan </h3>
               <p data-aos="fade-right">
                  You can visit the site any day and be sure that you will find
                  everything for a great vacation.
               </p>
            </ContainerText>
            <ContainerRegion>
               <BlockRegion1>
                  <ChuiAndOshCard
                     data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                     to="CHUI/region"
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
                           data-aos="fade-down"
                           data-aos-easing="linear"
                           data-aos-duration="1000"
                           to="BATKEN/region"
                           style={{
                              background: `url(${batken})`,
                              backgroundSize: 'cover',
                           }}
                        >
                           <StyleName>Batken</StyleName>
                        </ItemRegionCard>
                        <ItemRegionCard
                           data-aos="fade-left"
                           data-aos-easing="linear"
                           data-aos-duration="1000"
                           to="JALAL_ABAD/region"
                           style={{
                              background: `url(${jalalabat})`,
                              backgroundSize: 'cover',
                           }}
                        >
                           <StyleName>Jalal-Abad</StyleName>
                        </ItemRegionCard>
                     </div>
                     <NarynAndBihkek
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="1000"
                        data-aos-duration="1000"
                        to="NARYN/region"
                        style={{
                           background: `url(${naryn})`,
                           backgroundSize: 'cover',
                        }}
                     >
                        <StyleName>Naryn</StyleName>
                     </NarynAndBihkek>
                  </div>
               </BlockRegion1>

               <BlockRegion2>
                  <div className="blockItemRegion">
                     <div>
                        <ItemRegionCard
                           data-aos="flip-left"
                           data-aos-duration="1000"
                           to="ISSYK_KUL/region"
                           style={{
                              background: `url(${IssykKul})`,
                              backgroundSize: 'cover',
                           }}
                        >
                           <StyleName>Issyk-kul</StyleName>
                        </ItemRegionCard>
                        <ItemRegionCard
                           data-aos="flip-up"
                           to="TALAS/region"
                           style={{
                              background: `url(${talas})`,
                              backgroundSize: 'cover',
                           }}
                        >
                           <StyleName>Talas</StyleName>
                        </ItemRegionCard>
                     </div>
                     <NarynAndBihkek
                        data-aos="flip-left"
                        data-aos-duration="1500"
                        to="BISHKEK/region"
                        style={{
                           background: `url(${bishkek})`,
                           backgroundSize: 'cover',
                        }}
                     >
                        <StyleName>Bishkek</StyleName>
                     </NarynAndBihkek>
                  </div>
                  <ChuiAndOshCard
                     data-aos="fade-down-left"
                     to="OSH/region"
                     style={{
                        background: `url(${osh})`,
                        backgroundSize: 'cover',
                     }}
                  >
                     <StyleName>Osh</StyleName>
                  </ChuiAndOshCard>
               </BlockRegion2>
            </ContainerRegion>
         </MainContainer>
      </GlobalConteiner>
   )
}
const GlobalConteiner = styled('div')(({ darkMode }) => ({
   width: '100%',
   display: 'grid',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '10.62rem  0 10.62rem 0',
   background: darkMode
      ? 'linear-gradient(262deg, rgba(152,152,152,1) 15%, rgba(0,0,0,1) 100%)'
      : '#fff',
}))
const MainContainer = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '3.75rem',
}))
const ContainerText = styled('div')(({ darkMode }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.88rem',
   h3: {
      color: darkMode ? '#fff' : 'var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: ' 1.25rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      textTransform: 'uppercase',
   },
   p: {
      color: darkMode ? '#fff' : 'var(--primary-black, #363636)',
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

const ChuiAndOshCard = styled(Link)(() => ({
   width: '31.5625rem',
   height: ' 38.09rem',
   padding: '36rem 0 0 1.25rem',
   cursor: 'pointer',
}))
const ItemRegionCard = styled(Link)(() => ({
   width: ' 21.6875rem',
   height: '18.875rem',
   padding: '16rem 0 0 1.25rem',
   cursor: 'pointer',
}))
const NarynAndBihkek = styled(Link)(() => ({
   width: ' 44.6875rem',
   height: '18rem',
   background: `url(${bishkek})`,
   backgroundSize: 'cover',
   padding: '16rem 0 0 1.25rem',
   cursor: 'pointer',
}))
