import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { styled } from '@mui/material'
import houseSlide from '../../assets/images/house-slide.png'
import houseSlides from '../../assets/images/popular-Slide.png'
import { ReactComponent as ArrowRightDots } from '../../assets/icons/arrowright.svg'
import { ReactComponent as ArrowLeftDots } from '../../assets/icons/Group 238.svg'

export function MySlider() {
   const sliderRef = useRef(null)
   const [currentSlide, setCurrentSlide] = useState(1)

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      afterChange: (index) => setCurrentSlide(index + 1),
   }

   const slideImages = [
      //   {
      //      img1: houseSlide,
      //      img2: houseSlides,
      //      img3: houseSlide,
      //      img4: houseSlides,
      //   },
      houseSlides,
      houseSlide,
      houseSlides,
      houseSlide,
      houseSlides,
   ]

   const totalSlides = slideImages.length

   const goToPrevSlide = () => {
      sliderRef.current.slickPrev()
   }

   const goToNextSlide = () => {
      sliderRef.current.slickNext()
   }

   return (
      <div style={{ width: '25rem', height: '300px' }}>
         <Slider {...settings} ref={sliderRef}>
            {slideImages.map((image) => (
               <ImgBlock>
                  <StyledImg src={image} alt="/photos" />
               </ImgBlock>
            ))}
         </Slider>
         <Arrows>
            <ArrowLeftDots onClick={goToPrevSlide} />
            <p style={{ color: 'white' }}>
               {currentSlide < 10 ? `0${currentSlide}` : currentSlide}/
               {totalSlides < 10 ? `0${totalSlides}` : totalSlides}
            </p>
            <ArrowRightDots onClick={goToNextSlide} />
         </Arrows>
      </div>
   )
}
const Arrows = styled('div')({
   display: 'flex',
   justifyContent: 'start',
   alignItems: 'center',
   marginTop: '5rem',
})
const ImgBlock = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
})

const StyledImg = styled('img')({
   height: '19rem',
   width: '14rem',
})
