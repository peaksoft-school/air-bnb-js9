import { styled } from '@mui/material'
import { useEffect, React } from 'react'
import AOS from 'aos'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import chui from '../../assets/images/chui.png'
import batken from '../../assets/images/batken.png'
import jalalabat from '../../assets/images/jalalAbad.png'
import IssykKul from '../../assets/images/yssykKol.png'
import talas from '../../assets/images/talas.png'
import bishkek from '../../assets/images/bishkek.png'
import osh from '../../assets/images/osh.png'
import naryn from '../../assets/images/naryn.png'
import 'aos/dist/aos.css'
import { ActionToggleHandelr } from '../../store/toggle/ToggleSlice'

export function MainRegion() {
   const dispatch = useDispatch()
   useEffect(() => {
      AOS.init({
         duration: 1000,
         easing: 'ease-in-out',
         once: false,
      })
   }, [])

   const toggleRegion = (path) => {
      dispatch(ActionToggleHandelr.togglePathHandler(path))
   }

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
                     data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                     to="Chui"
                     style={{
                        background: `url(${chui})`,
                        backgroundSize: 'cover',
                     }}
                     onClick={() => toggleRegion('Chui')}
                  >
                     <StyleName>CHUI</StyleName>
                  </ChuiAndOshCard>

                  <div className="blockItemRegion">
                     <div>
                        <ItemRegionCard
                           data-aos="fade-down"
                           data-aos-easing="linear"
                           data-aos-duration="1000"
                           to="Batken"
                           style={{
                              background: `url(${batken})`,
                              backgroundSize: 'cover',
                           }}
                           onClick={() => toggleRegion('Batken')}
                        >
                           <StyleName>batken</StyleName>
                        </ItemRegionCard>
                        <ItemRegionCard
                           data-aos="fade-left"
                           data-aos-easing="linear"
                           data-aos-duration="1000"
                           to="Jalal-Abad"
                           style={{
                              background: `url(${jalalabat})`,
                              backgroundSize: 'cover',
                           }}
                           onClick={() => toggleRegion('Jalal-Abad')}
                        >
                           <StyleName>Jalalabat</StyleName>
                        </ItemRegionCard>
                     </div>
                     <NarynAndBihkek
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="1000"
                        data-aos-duration="1000"
                        to="Naryn"
                        style={{
                           background: `url(${naryn})`,
                           backgroundSize: 'cover',
                        }}
                        onClick={() => toggleRegion('Naryn')}
                     >
                        <StyleName>naryn</StyleName>
                     </NarynAndBihkek>
                  </div>
               </BlockRegion1>

               <BlockRegion2>
                  <div className="blockItemRegion">
                     <div>
                        <ItemRegionCard
                           data-aos="flip-left"
                           data-aos-duration="1000"
                           to="Issyk-Kul"
                           style={{
                              background: `url(${IssykKul})`,
                              backgroundSize: 'cover',
                           }}
                           onClick={() => toggleRegion('Issyk-Kul')}
                        >
                           <StyleName>Issyk-kul</StyleName>
                        </ItemRegionCard>
                        <ItemRegionCard
                           data-aos="flip-up"
                           to="Talas"
                           style={{
                              background: `url(${talas})`,
                              backgroundSize: 'cover',
                           }}
                           onClick={() => toggleRegion('Talas')}
                        >
                           <StyleName>talas</StyleName>
                        </ItemRegionCard>
                     </div>
                     <NarynAndBihkek
                        data-aos="flip-left"
                        data-aos-duration="1500"
                        to="Bishkek"
                        style={{
                           background: `url(${bishkek})`,
                           backgroundSize: 'cover',
                        }}
                        onClick={() => toggleRegion('Bishkek')}
                     >
                        <StyleName>bishkek</StyleName>
                     </NarynAndBihkek>
                  </div>
                  <ChuiAndOshCard
                     data-aos="fade-down-left"
                     to="Osh"
                     style={{
                        background: `url(${osh})`,
                        backgroundSize: 'cover',
                     }}
                     onClick={() => toggleRegion('Osh')}
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
   padding: '10.62rem  0 10.62rem 0',
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
