import React from 'react'
import { styled as MUistyled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import popularHouseImage from '../../assets/images/popular-house.png'
import houseSlide from '../../assets/images/house-slide.png'
import { ReactComponent as ArrowRightDots } from '../../assets/icons/arrowright.svg'
import { ReactComponent as ArrowLefttDots } from '../../assets/icons/Group 238.svg'
import { ReactComponent as LocationOsh } from '../../assets/icons/location.svg'

export const popular = [
   {
      location: '723510 Osh Muzurbek Alimbekov 9/7',
      title: 'Aska Lara Resort & Spa Hotel',
      id: 1,
      img: popularHouseImage,
      img1: houseSlide,
      all: 'Read more',
      description:
         'The Aska Lara Resort & Spa Hotel, which operates on an all-inclusive system, occupies 2 plots separated by a road. The hotel is located in the Lara district, 500 meters from the sea...',
   },
]

export default function PopularHouse() {
   return (
      <Container>
         <PopularApart>
            <Popular>Popular Apartaments</Popular>
            <NavLink to="/">View all</NavLink>
         </PopularApart>
         <>
            {popular.map((el) => (
               <div key={el.id}>
                  <BlockHouse>
                     <ImageHouse src={el.img} alt={el.title} />
                     <BlockText>
                        <SpaOtel>{el.title}</SpaOtel>
                        <BlockAskaLara>{el.description}</BlockAskaLara>
                        <StyledNavlink to="/">
                           <LocationOsh />
                           {el.location}
                        </StyledNavlink>

                        <NavLink to="/">{el.all}</NavLink>
                     </BlockText>
                     <div>
                        <Slideimg src={el.img1} alt="phote" />
                        <Slideimg src={el.img1} alt="phote" />
                        <div
                           style={{
                              display: 'flex',
                              justifyContent: 'start',
                              alignItems: 'center',
                              margin: '5rem 2rem',
                           }}
                        >
                           <ArrowLefttDots />
                           01/07
                           <ArrowRightDots />
                        </div>
                     </div>
                  </BlockHouse>
               </div>
            ))}
         </>
      </Container>
   )
}

const Container = MUistyled('div')({
   width: '100%',
   height: '55rem',
   backgroundColor: '#4F7755',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '170px 0px 170px 100px',
})
const StyledNavlink = MUistyled(NavLink)(({ theme }) => ({
   margin: '0.46rem 0rem 2.16rem 0rem',
   color: theme.palette.tertiary.lightgreen,
   textDecoration: 'none',
}))

const PopularApart = MUistyled('div')({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   padding: '3.75rem 5rem',
})
const BlockText = MUistyled('div')({
   marginTop: '6rem',
   display: 'flex',
   flexDirection: 'column',
})
const Popular = MUistyled('p')(({ theme }) => ({
   color: theme.palette.primary.white,
   fontFamily: 'Inter',
}))
const SpaOtel = MUistyled('h2')(({ theme }) => ({
   color: theme.palette.primary.white,
   fontSize: '1.1rem',
   lineHeight: '1rem',
   fontWeight: '500',
   marginBottom: '1.75rem',
}))
const BlockHouse = MUistyled('div')({
   display: 'flex',
   justifyContent: 'space-around',
   gap: '20px',
   // marginTop: '60px',
   // div: {
   //    display: 'flex',
   // },
})
const ImageHouse = MUistyled('img')({
   width: '32.8125rem',
   height: '28.5rem',
})

const BlockAskaLara = MUistyled('p')(({ theme }) => ({
   color: theme.palette.primary.white,
   fontSize: '16px',
   fontWeight: '400',
   width: '19.375rem',
   marginTop: '1. 5rem',
}))

const Slideimg = MUistyled('img')({
   width: '224px',
   height: '317px',
   marginLeft: '30px',
})
