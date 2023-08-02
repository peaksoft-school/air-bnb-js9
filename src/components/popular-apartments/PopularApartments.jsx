import React from 'react'
import { styled as MUistyled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import popularHouseImage from '../../assets/images/popularapartment.png'
import houseSlide from '../../assets/images/apartments-slide.png'
import { Location } from '../../assets/icons'
import { MySlider } from './Slide'

export const popular = [
   {
      location: '723510 Osh Muzurbek Alimbekov 9/7',
      title: 'Aska Lara Resort & Spa Hotel',
      id: 1,
      img: popularHouseImage,
      img1: houseSlide,
      description:
         'The Aska Lara Resort & Spa Hotel, which operates  on an all-inclusive system, occupies 2 plots separated by a road. The hotel is located in the Lara district, 500 meters from the sea...',
   },
]

export default function PopularApartments({ state, func }) {
   const Container = MUistyled('div')(({ state }) => ({
      width: '100%',
      height: '55rem',
      backgroundColor: state ? '#fff' : '#4F7755',
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

   const StyledNavlink = MUistyled('p')(({ theme }) => ({
      margin: '0.46rem 0rem 2.16rem 0rem',
      color: state ? '#000' : theme.palette.tertiary.lightgreen,
      textDecoration: 'none',
   }))

   const StyledNavlinkView = MUistyled(NavLink)(({ theme }) => ({
      margin: '0.46rem 0rem 2.16rem 0rem',
      color: state ? '#000' : theme.palette.primary.more,
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

   const Popular = MUistyled('p')(({ theme }) => ({
      color: state ? '#000' : theme.palette.primary.white,
      fontFamily: 'Inter',
      fontWeight: 500,
   }))

   const SpaOtel = MUistyled('h2')(({ theme }) => ({
      color: state ? '#000' : theme.palette.primary.white,
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
      height: 'auto',
      display: 'flex',

      '@media (min-width:48rem)': {
         flexDirection: 'row',
         alignItems: 'center',
      },
   })

   const BlockAskaLara = MUistyled('p')(({ theme }) => ({
      color: state ? '#000' : theme.palette.primary.white,
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
      <Container state={state}>
         <PopularApart>
            <Popular>Popular Apartments</Popular>
            <StyledNavlinkView
               style={{ marginRight: '7rem' }}
               to="/"
               onClick={func}
            >
               View all
            </StyledNavlinkView>
         </PopularApart>
         <>
            {popular.map((el) => (
               <div>
                  <BlockHouse>
                     <ImageHouse src={el.img} alt={el.title} />
                     <BlockText>
                        <SpaOtel>{el.title}</SpaOtel>
                        <BlockAskaLara>{el.description}</BlockAskaLara>
                        <StyledNavlink>
                           <Location />
                           {el.location}
                        </StyledNavlink>
                        <StyledNavlinkView to="/">Read more</StyledNavlinkView>
                     </BlockText>
                     <div>
                        <MySlider state={state} />
                     </div>
                  </BlockHouse>
               </div>
            ))}
         </>
      </Container>
   )
}
