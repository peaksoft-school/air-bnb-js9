/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react'
import { styled as MUistyled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
         console.log(response, 'response popular')
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

   const conditionDarkMode = darkMode
      ? 'linear-gradient(262deg, rgba(152,152,152,1) 15%, rgba(0,0,0,1) 100%)'
      : '#fff'

   const Container = MUistyled('div')(({ state, conditionDarkMode }) => ({
      width: '100%',
      height: '55rem',
      background: state ? conditionDarkMode : '#4F7755',
      color: state ? '#000' : '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '170px 0 170px 100px',
      '@media (max-width: 768px)': {
         padding: '100px',
      },
   }))

   const StyledNavlink = MUistyled('p')(({ theme, darkMode }) => ({
      margin: '0.46rem 0rem 2.16rem 0rem',
      color: state
         ? darkMode
            ? '#fff'
            : '#000'
         : theme.palette.tertiary.lightgreen,
      textDecoration: 'none',
   }))

   const StyledNavlinkView = MUistyled(NavLink)(({ theme, darkMode }) => ({
      margin: '0.46rem 0rem 2.16rem 0rem',
      color: state ? (darkMode ? '#fff' : '#000') : theme.palette.primary.more,
      textDecoration: 'underline',
      '&:hover': {
         textDecoration: 'none',
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

   const Popular = MUistyled('p')(({ theme, darkMode }) => ({
      color: state ? (darkMode ? '#fff' : '#000') : theme.palette.primary.white,
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '1.25rem',
   }))

   const SpaOtel = MUistyled('h2')(({ theme, darkMode }) => ({
      color: state ? (darkMode ? '#fff' : '#000') : theme.palette.primary.white,
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
      maxWidth: '32.8125rem',
      height: '28.5rem',
      display: 'flex',

      '@media (min-width:48rem)': {
         flexDirection: 'row',
         alignItems: 'center',
      },
   })
   const BlockAskaLara = MUistyled('p')(({ theme, darkMode }) => ({
      color: state ? (darkMode ? '#fff' : '#000') : theme.palette.primary.white,
      fontSize: '16px',
      fontWeight: '400',
      width: '100%',
      maxWidth: '100%',
      marginTop: '1.5rem',
      '@media (min-width: 48rem)': {
         width: '19.3rem',
      },
   }))

   return (
      <Container state={state} conditionDarkMode={conditionDarkMode}>
         <PopularApart>
            <Popular darkMode={darkMode}>
               {state ? 'THE LASTEST' : 'POPULAR APARTMENTS'}
            </Popular>
            <StyledNavlinkView
               darkMode={darkMode}
               style={{ marginRight: '7rem', marginBottom: '2rem' }}
               to="/"
               onClick={func}
            >
               View all
            </StyledNavlinkView>
         </PopularApart>
         <div>
            <BlockHouse>
               <ImageHouse
                  src={
                     state
                        ? lastestData.images
                           ? lastestData.images[0]
                           : ''
                        : apartmentData.images
                  }
                  alt={apartmentData.title}
               />
               <BlockText>
                  <SpaOtel darkMode={darkMode}>
                     {state ? lastestData.title : apartmentData.title}
                  </SpaOtel>
                  <BlockAskaLara darkMode={darkMode}>
                     {state
                        ? lastestData.description
                        : apartmentData.description}
                  </BlockAskaLara>
                  <StyledNavlink darkMode={darkMode}>
                     <Location />
                     {state ? lastestData.address : apartmentData.address}
                  </StyledNavlink>
                  <StyledNavlinkView to="/" darkMode={darkMode}>
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
