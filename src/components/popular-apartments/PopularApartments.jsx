/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react'
import { styled as MUistyled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Location } from '../../assets/icons'
import { MySlider } from './Slide'
import { axiosInstance } from '../../config/axiosInstance'

export default function PopularApartments({ state, func }) {
   const [apartmentData, setApartmentData] = useState({})
   const [lastestData, setLastestData] = useState({})
   const { darkMode } = useSelector((state) => state.darkMode)

   const getPopularApartment = async () => {
      try {
         const response = await axiosInstance.get(
            '/api/announcements/getPopularApartment'
         )
         setApartmentData(response.data)
      } catch (error) {
         console.log('error: ', error)
      }
   }

   const getLastest = async () => {
      try {
         const response = await axiosInstance.get(
            '/api/announcements/latestAnnouncement'
         )

         setLastestData(response.data)
      } catch (error) {
         console.log('error: ', error)
      }
   }

   useEffect(() => {
      getPopularApartment()
      getLastest()
   }, [])

   useEffect(() => {
      AOS.init({
         duration: 1500,
         easing: 'ease-in-out',
         once: false,
      })
   }, [])

   const conditionDarkMode = darkMode
      ? 'linear-gradient(262deg, rgba(152,152,152,1) 15%, rgba(0,0,0,1) 100%)'
      : '#fff'

   const dark = darkMode ? '#fff' : '#000'

   const firstImage =
      apartmentData.images && apartmentData.images.length > 0
         ? apartmentData.images[0]
         : null

   const latestImage =
      lastestData.images && lastestData.images.length > 0
         ? lastestData.images[0]
         : null

   return (
      <Container state={state} conditionDarkMode={conditionDarkMode}>
         <PopularApart>
            <Popular dark={dark} state={state} data-aos="fade-right">
               {state ? 'THE LASTEST' : 'POPULAR APARTMENTS'}
            </Popular>
            <StyledNavlinkView
               dark={dark}
               state={state}
               style={{ marginRight: '7rem', marginBottom: '2rem' }}
               to={state === 'true' ? '/main/desc/region' : '/main/asc/region'}
               onClick={func}
               data-aos="fade-left"
            >
               View all
            </StyledNavlinkView>
         </PopularApart>
         <div>
            <BlockHouse>
               <ImageHouse
                  src={state ? latestImage : firstImage}
                  alt={apartmentData.title}
                  data-aos="flip-left"
               />
               <BlockText>
                  <SpaOtel dark={dark} state={state} data-aos="fade-down-right">
                     {state ? lastestData.title : apartmentData.title}
                  </SpaOtel>
                  <BlockAskaLara dark={dark} state={state} data-aos="fade-down">
                     {state
                        ? lastestData.description
                        : apartmentData.description}
                  </BlockAskaLara>
                  <StyledNavlink
                     dark={dark}
                     state={state}
                     data-aos="fade-up-right"
                  >
                     <Location />
                     {state ? lastestData.address : apartmentData.address}
                  </StyledNavlink>
                  <StyledNavlinkView
                     to={
                        state === 'true'
                           ? `/main/${lastestData.id}/the-lastest`
                           : `/main/${apartmentData.id}/popular-apartment`
                     }
                     dark={dark}
                     state={state}
                     data-aos="fade-down-left"
                  >
                     Read more
                  </StyledNavlinkView>
               </BlockText>
               <div style={{ marginTop: '-5rem' }}>
                  <MySlider
                     state={state}
                     lastestData={lastestData}
                     apartmentData={apartmentData}
                  />
               </div>
            </BlockHouse>
         </div>
      </Container>
   )
}
const Container = MUistyled('div')(({ state, conditionDarkMode }) => ({
   width: '100%',
   height: '55rem',
   background: state ? conditionDarkMode : '#4F7755',
   color: state ? '#000' : '#fff',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '170px 0px 170px 100px',
   '@media (max-width: 768px)': {
      padding: '100px',
   },
}))

const StyledNavlink = MUistyled('p')(({ theme, dark, state }) => ({
   margin: '0.46rem 0rem 2.16rem 0rem',
   color: state ? dark : theme.palette.tertiary.lightgreen,
   textDecoration: 'none',
}))

const StyledNavlinkView = MUistyled(NavLink)(({ theme, dark, state }) => ({
   margin: '0.46rem 0rem 2.16rem 0rem',
   color: state ? dark : theme.palette.primary.more,
   textDecoration: 'none',
   '&:hover': {
      textDecoration: 'underline',
      color: theme.palette.primary.more,
   },
}))

const PopularApart = MUistyled('div')({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   padding: '0rem 0 ',
})

const BlockText = MUistyled('div')({
   marginTop: '6rem',
   display: 'flex',
   flexDirection: 'column',
})

const Popular = MUistyled('p')(({ theme, dark, state }) => ({
   color: state ? dark : theme.palette.primary.white,
   fontFamily: 'Inter',
   fontWeight: 500,
   fontSize: '1.25rem',
}))

const SpaOtel = MUistyled('h2')(({ theme, dark, state }) => ({
   color: state ? dark : theme.palette.primary.white,
   fontSize: '1.1rem',
   lineHeight: '1rem',
   fontWeight: '500',
   marginBottom: '1.75rem',
}))

const BlockHouse = MUistyled('div')({
   display: 'flex',
   justifyContent: 'space-around',
   gap: '20px',
   flexDirection: 'column',
   '@media (min-width: 48rem)': {
      flexDirection: 'row',
      alignItems: 'center',
   },
})

const ImageHouse = MUistyled('img')({
   width: '100%',
   maxWidth: '32.8rem',
   height: '26rem',
   display: 'flex',

   '@media (min-width:48rem)': {
      flexDirection: 'row',
      alignItems: 'center',
   },
})
const BlockAskaLara = MUistyled('p')(({ theme, dark, state }) => ({
   color: state ? dark : theme.palette.primary.white,
   fontSize: '16px',
   fontWeight: '400',
   width: '100%',
   maxWidth: '100%',
   marginTop: '1.5rem',
   '@media (min-width: 48rem)': {
      width: '19.3rem',
   },
}))
