import React from 'react'
import { styled as MUistyled } from '@mui/material'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import popularHouseImage from '../../assets/images/popularapartment.png'
import houseSlide from '../../assets/images/apartments-slide.png'
import { ReactComponent as LocationOsh } from '../../assets/icons/location.svg'
import { MySlider } from './Slide'

export const popular = [
   {
      location: '723510 Osh Muzurbek Alimbekov 9/7',
      title: 'Aska Lara Resort & Spa Hotel',
      id: 1,
      img: popularHouseImage,
      img1: houseSlide,
      description:
         'The Aska Lara Resort & Spa Hotel, which operates on an all-inclusive system, occupies 2 plots separated by a road. The hotel is located in the Lara district, 500 meters from the sea...',
   },
]

export default function PopularApartments({
   width,
   height,
   background,
   color,
}) {
   const Container = MUistyled('div')({
      width: width || '100%',
      height: height || '55rem',
      backgroundColor: background || '#4F7755',
      color: color || '#fffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '170px 0px 170px 100px',
   })

   const StyledNavlink = MUistyled('p')(({ theme }) => ({
      margin: '0.46rem 0rem 2.16rem 0rem',
      color: color || theme.palette.tertiary.lightgreen,
      textDecoration: 'none',
   }))

   const StyledNavlinkView = MUistyled(NavLink)(({ theme }) => ({
      margin: '0.46rem 0rem 2.16rem 0rem',
      color: color || theme.palette.primary.more,
      //    textDecoration: 'none',
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
      color: color || theme.palette.primary.white,
      fontFamily: 'Inter',
   }))

   const SpaOtel = MUistyled('h2')(({ theme }) => ({
      color: color || theme.palette.primary.white,
      fontSize: '1.1rem',
      lineHeight: '1rem',
      fontWeight: '500',
      marginBottom: '1.75rem',
   }))

   const BlockHouse = MUistyled('div')({
      display: 'flex',
      justifyContent: 'space-around',
      gap: '20px',
   })

   const ImageHouse = MUistyled('img')({
      width: '32.8125rem',
      height: '28.5rem',
   })

   const BlockAskaLara = MUistyled('p')(({ theme }) => ({
      color: color || theme.palette.primary.white,
      fontSize: '16px',
      fontWeight: '400',
      width: '19.375rem',
      marginTop: '1. 5rem',
   }))

   return (
      <Router>
         <Container>
            <PopularApart>
               <Popular>Popular Apartments</Popular>
               <StyledNavlinkView style={{ marginRight: '7rem' }} to="/">
                  View all
               </StyledNavlinkView>
            </PopularApart>
            <>
               {popular.map((el) => (
                  <div key={el.id}>
                     <BlockHouse>
                        <ImageHouse src={el.img} alt={el.title} />
                        <BlockText>
                           <SpaOtel>{el.title}</SpaOtel>
                           <BlockAskaLara>{el.description}</BlockAskaLara>
                           <StyledNavlink>
                              <LocationOsh />
                              {el.location}
                           </StyledNavlink>
                           <StyledNavlinkView to="/">
                              Read more
                           </StyledNavlinkView>
                        </BlockText>
                        <div>
                           <MySlider />
                        </div>
                     </BlockHouse>
                  </div>
               ))}
            </>
         </Container>
      </Router>
   )
}
