import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { styled } from '@mui/material'
import houseSlide from '../../assets/images/popularapartment.png'
import houseSlides from '../../assets/images/apartments-slide.png'
import houseSlidee from '../../assets/images/apartments-slide1.png'
import {
   ArrowLeftDots,
   ArrowRightDots,
   ArrowrightBlack,
   ArrowLeftBlack,
} from '../../assets/icons'

export function MySlider({ background, state }) {
   const sliderRef = useRef(null)
   const [currentSlide, setCurrentSlide] = useState(0)

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      afterChange: (index) => setCurrentSlide(index),
   }

   const slideImages = [
      {
         image: houseSlides,
         alt: 'Photo 1',
         id: 1,
      },
      {
         image: houseSlide,
         alt: 'Photo 2',
         id: 2,
      },
      {
         image: houseSlidee,
         alt: 'Photo 3',
         id: 3,
      },
      {
         image: houseSlides,
         alt: 'Photo 4',
         id: 4,
      },
      {
         image: houseSlide,
         alt: 'Photo 5',
         id: 5,
      },
      {
         image: houseSlidee,
         alt: 'Photo 6',
         id: 6,
      },
      {
         image: houseSlides,
         alt: 'Photo 7',
         id: 7,
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

   return (
      <ContainerImg background={background}>
         <Slider {...settings} ref={sliderRef}>
            {slideImages.map((item) => (
               <ImgBlock>
                  <StyledImg src={item.image} alt={item.alt} />
               </ImgBlock>
            ))}
         </Slider>
         <Arrows>
            {state ? (
               <ArrowLeftBlack
                  onClick={goToPrevSlide}
                  disabled={currentSlide === 0}
                  color={
                     currentSlide === 0 || currentSlide === totalSlides - 1
                        ? '#97C69E'
                        : 'white'
                  }
               />
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

            <p style={state ? { color: '#000' } : { color: 'white' }}>
               {currentSlide + 1 < 10
                  ? `0${currentSlide + 1}`
                  : currentSlide + 1}
               /{totalSlides < 10 ? `0${totalSlides}` : totalSlides}
            </p>
            {state ? (
               <ArrowrightBlack
                  onClick={goToNextSlide}
                  disabled={currentSlide === totalSlides - 1}
               />
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
   marginLeft: '2rem',
})

const Arrows = styled('div')({
   display: 'flex',
   justifyContent: 'start',
   alignItems: 'center',
   marginTop: '5rem',
})

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
