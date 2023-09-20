import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { styled } from '@mui/material'

const ImgStyle = styled('img')`
   width: 17rem;
   height: 9rem;
   border-top-right-radius: 15px;
   border-top-left-radius: 15px;
`

const SliderContainer = styled('div')`
   position: relative;
   width: 17rem;
   height: 9rem;
   padding: 0rem;
`

const Arrow = styled('div')`
   position: absolute;
   top: 50%;
   transform: translateY(-40%);
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
   .slick-dots li button {
      background-color: #333;
      width: 10px;
      height: 10px;
      border-radius: 50%;
   }
   .slick-dots li.slick-active button {
      background-color: red; /* Здесь установите желаемый цвет фона для активной точки */
   }
`

const PrevArrow = styled(Arrow)`
   left: 0;
   border: 4px solid red;
`

const NextArrow = styled(Arrow)`
   right: 0;
   border: 2px solid green;
`

export function PhotoSlider({ id, images }) {
   console.log('images: ', images)

   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,

      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow>&#8249;</PrevArrow>,
      nextArrow: <NextArrow>&#824;</NextArrow>,
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
