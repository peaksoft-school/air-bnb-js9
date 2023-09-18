import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { styled } from '@mui/material'

const ImgStyle = styled('img')`
   width: 18rem;
   height: 12rem;
`

const SliderContainer = styled('div')`
   position: relative;
   width: 18rem;
   height: 12rem;
`

const Arrow = styled('div')`
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   width: 20px;
   height: 20px;
   background-color: #333;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   opacity: 0.7;
   transition: opacity 0.3s ease;

   &:hover {
      opacity: 1;
   }
`

const PrevArrow = styled(Arrow)`
   left: 0;
`

const NextArrow = styled(Arrow)`
   right: 0;
`

export function PhotoSlider({ id, images }) {
   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,

      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow>&#8249;</PrevArrow>,
      nextArrow: <NextArrow>&#8250;</NextArrow>,
   }

   return (
      <SliderContainer>
         <Slider {...settings}>
            {images.map((image, index) => (
               <div key={id}>
                  <ImgStyle src={image} alt={`Slide ${index}`} />
               </div>
            ))}
         </Slider>
      </SliderContainer>
   )
}

export default PhotoSlider
