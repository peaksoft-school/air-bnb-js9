/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { styled } from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useSelector } from 'react-redux'
import {
   ArrowLeftDots,
   ArrowRightDots,
   ArrowrightBlack,
   ArrowLeftBlack,
} from '../../assets/icons'

export function MySlider({ background, state, lastestData, apartmentData }) {
   const sliderRef = useRef(null)
   const [currentSlide, setCurrentSlide] = useState(0)
   const { darkMode } = useSelector((state) => state.darkMode)

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      afterChange: (index) => setCurrentSlide(index),
   }

   const firstImage =
      apartmentData.images && apartmentData.images.length > 0
         ? apartmentData.images[0]
         : null
   const secontImage =
      apartmentData.images && apartmentData.images.length > 0
         ? apartmentData.images[1]
         : null
   const threeImage =
      apartmentData.images && apartmentData.images.length > 0
         ? apartmentData.images[2]
         : null
   const fhoImage =
      apartmentData.images && apartmentData.images.length > 0
         ? apartmentData.images[3]
         : null

   const latestImageOne =
      lastestData.images && lastestData.images.length > 0
         ? lastestData.images[0]
         : null
   const latestImageTwo =
      lastestData.images && lastestData.images.length > 0
         ? lastestData.images[1]
         : null
   const latestImageThee =
      lastestData.images && lastestData.images.length > 0
         ? lastestData.images[2]
         : null
   const latestImageFho =
      lastestData.images && lastestData.images.length > 0
         ? lastestData.images[3]
         : null

   const slideImages = [
      {
         image: state ? latestImageOne : firstImage,
         alt: 'Photo 1',
         id: 1,
      },
      {
         image: state ? latestImageTwo : secontImage,
         alt: 'Photo 2',
         id: 2,
      },
      {
         image: state ? latestImageThee : threeImage,
         alt: 'Photo 3',
         id: 3,
      },
      {
         image: state ? latestImageFho : fhoImage,
         alt: 'Photo 4',
         id: 4,
      },
   ]
   const totalSlides = slideImages.length

   const goToPrevSlide = () => {
      if (currentSlide > 0) {
         sliderRef.current.slickPrev()
         setCurrentSlide(currentSlide - 1)
      }
   }

   const goToNextSlide = () => {
      if (currentSlide < totalSlides - 1) {
         sliderRef.current.slickNext()
         setCurrentSlide(currentSlide + 1)
      }
   }
   useEffect(() => {
      AOS.init({
         duration: 1500,
         easing: 'ease-in-out',
         once: false,
      })
   }, [])
   return (
      <ContainerImg background={background}>
         <Slider {...settings} ref={sliderRef}>
            {slideImages?.map((item) => (
               <ImgBlock
                  key={item.id}
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
               >
                  <StyledImg src={item.image} />
               </ImgBlock>
            ))}
         </Slider>
         <Arrows state={state} darkMode={darkMode}>
            {state ? (
               <div>
                  {darkMode ? (
                     <CustomArrowLeftDots
                        onClick={goToPrevSlide}
                        disabled={currentSlide === 0}
                        color={
                           currentSlide === 0 ||
                           currentSlide === totalSlides - 1
                              ? '#97C69E'
                              : 'white'
                        }
                     />
                  ) : (
                     <ArrowLeftBlack
                        onClick={goToPrevSlide}
                        disabled={currentSlide === 0}
                        color={
                           currentSlide === 0 ||
                           currentSlide === totalSlides - 1
                              ? '#97C69E'
                              : 'white'
                        }
                     />
                  )}
               </div>
            ) : (
               <CustomArrowLeftDots
                  onClick={goToPrevSlide}
                  disabled={currentSlide === 0}
                  color={
                     currentSlide === 0 || currentSlide === totalSlides - 1
                        ? '#97C69E'
                        : 'white'
                  }
               />
            )}

            <p
               style={
                  state
                     ? { color: darkMode ? '#fff' : '#000' }
                     : { color: 'white' }
               }
            >
               {currentSlide + 1 < 10
                  ? `0${currentSlide + 1}`
                  : currentSlide + 1}
               /{totalSlides < 10 ? `0${totalSlides}` : totalSlides}
            </p>
            {state ? (
               <div>
                  {darkMode ? (
                     <CustomArrowRightDots
                        onClick={goToNextSlide}
                        disabled={currentSlide === totalSlides - 1}
                     />
                  ) : (
                     <ArrowrightBlack
                        onClick={goToNextSlide}
                        disabled={currentSlide === totalSlides - 1}
                     />
                  )}
               </div>
            ) : (
               <CustomArrowRightDots
                  onClick={goToNextSlide}
                  disabled={currentSlide === totalSlides - 1}
               />
            )}
         </Arrows>
      </ContainerImg>
   )
}

const ContainerImg = styled('div')({
   width: '32rem',
   height: '18.75rem',
   // marginLeft: '2rem',
})

const Arrows = styled('div')(({ state, darkMode }) => ({
   display: 'flex',
   justifyContent: 'start',
   alignItems: 'center',
   marginTop: '5rem',
   p: {
      color: state ? (darkMode ? '#fff' : '#000') : 'white',
   },
}))

const ImgBlock = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-right: 2.5rem;
   gap: 20px;
`

const StyledImg = styled('img')({
   height: '19rem',
   width: '14rem',
   flexShrink: 0,
   marginRight: '2.5rem',
})

const CustomArrowLeftDots = styled(ArrowLeftDots)(({ disabled }) => ({
   cursor: disabled ? 'default' : 'pointer',
   opacity: disabled ? 0.5 : 1,
}))

const CustomArrowRightDots = styled(ArrowRightDots)(({ disabled }) => ({
   cursor: disabled ? 'default' : 'pointer',
   opacity: disabled ? 0.5 : 1,
}))
