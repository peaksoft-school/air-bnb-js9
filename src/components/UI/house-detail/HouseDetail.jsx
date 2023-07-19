/* eslint-disable import/no-extraneous-dependencies */
// // // import { styled } from '@mui/material'
// // // import Slider from 'react-slick'
// // // import 'slick-carousel/slick/slick.css'
// // // import 'slick-carousel/slick/slick-theme.css'
// // // import React from 'react'

// // // export function HouseDetail() {
// // //    return (
// // //       <Container>
// // //          {house.map((item) => {
// // //             return (
// // //                <ContainerImage key={item.id}>
// // //                   <img src={item.imgHouse1} alt="#" />
// // //                   <Slider className="block">
// // //                      <img src={item.imgHouse2} alt="#" />
// // //                      <img src={item.imgHouse3} alt="#" />
// // //                      <img src={item.imgHouse4} alt="#" />
// // //                      {/* <img src={item.imgHouse5} alt="#" />
// // //                      <img src={item.imgHouse6} alt="#" /> */}
// // //                   </Slider>
// // //                </ContainerImage>
// // //             )
// // //          })}
// // //       </Container>
// // //    )
// // // }

// // const Container = styled('div')(() => ({
// //    width: '39.375rem',
// // }))
// // const ContainerImage = styled('div')(() => ({
// //    display: 'flex',
// //    flexDirection: 'column',
// //    gap: '1.25rem',
// //    '.block': {
// //       display: 'flex',
// //       gap: '1.25rem',
// //    },
// // }))

// import { styled } from '@mui/material'
// import Slider from 'react-slick'

// export function FeedbackSlider({ house }) {
//    const settings = {
//       dots: false,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//    }
//    return (
//       <>
//          {house.map((item) => {
//             return (
//                <Container key={item.id}>
//                   <img src={item.imgHouse1} alt="" />
//                   <StyledSlider {...settings}>
//                      <Image>
//                         <img src={item.imgHouse2} alt="#" />
//                      </Image>
//                      <Image>
//                         <img src={item.imgHouse3} alt="#" />
//                      </Image>
//                      <Image>
//                         <img src={item.imgHouse4} alt="#" />
//                      </Image>
//                      <Image>
//                         <img src={item.imgHouse5} alt="#" />
//                      </Image>
//                      <Image>
//                         <img src={item.imgHouse6} alt="#" />
//                      </Image>
//                   </StyledSlider>
//                </Container>
//             )
//          })}
//       </>
//    )
// }

// const Container = styled('div')({
//    width: ' 39rem',
//    display: 'flex',
//    flexDirection: 'column',
//    marginLeft: '500px',
//    gap: '0.75rem',
// })
// const Image = styled('div')(() => ({
//    // width: '8.25rem',
//    height: ' 8.5625rem',
// }))

// const StyledSlider = styled(Slider)({
//    // width: '10rem',
//    // height: ' 8.5625rem',
//    // display: 'flex',
//    // justifyContent: 'space-around',
//    // marginRight: '365px',
//    // marginTrim: '1.25rem',

//    '& .slick-track': {
//       display: 'flex',
//       gap: '1.10rem',
//    },

//    '& .slick-next': {
//       position: 'relative',
//       zIndex: '88',
//       top: '-75px',
//       left: '589px',
//    },
//    '& .slick-prev': {
//       position: 'relative',
//       zIndex: '99',
//       top: '79px',
//       // left: '20px',
//    },
// })

// import houseSlide from '../../assets/images/popularapartment.png'
// import houseSlides from '../../assets/images/apartments-slide.png'
// import houseSlidee from '../../assets/images/apartments-slide1.png'
// import { ReactComponent as ArrowRightDots } from '../../assets/icons/arrowright.svg'
// import { ReactComponent as ArrowLeftDots } from '../../assets/icons/Group 238.svg'
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { styled } from '@mui/material'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import detailHouse1 from '../../../assets/images/houseDeteil1.png'
import detailHouse2 from '../../../assets/images/houseDeteil2.png'
import detailHouse3 from '../../../assets/images/houseDeteil3.png'
import detailHouse4 from '../../../assets/images/houseDeteil4.png'
import { Vector, Delete } from '../../../assets/icons'

export function MySliders() {
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
         image: detailHouse2,
         id: 2,
      },
      {
         image: detailHouse3,
         id: 3,
      },
      {
         image: detailHouse4,
         id: 4,
      },
      {
         image: detailHouse2,
         id: 5,
      },
      {
         image: detailHouse4,
         id: 6,
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
      <>
         <h1>hellow world</h1>
         <img src={detailHouse1} alt="#" />
         {slideImages.map((item) => (
            <StyledSlider {...settings} ref={sliderRef}>
               <ImgBlock>
                  <img src={item.image} alt="#" />
               </ImgBlock>
            </StyledSlider>
         ))}
         <Arrows>
            <CustomArrowLeftDots
               onClick={goToPrevSlide}
               disabled={currentSlide === 0}
               color={
                  currentSlide === 0 || currentSlide === totalSlides - 1
                     ? '#97C69E'
                     : 'white'
               }
            />
            <p style={{ color: 'white' }}>
               {currentSlide + 1 < 10
                  ? `0${currentSlide + 1}`
                  : currentSlide + 1}
               /{totalSlides < 10 ? `0${totalSlides}` : totalSlides}
            </p>
            <CustomArrowRightDots
               onClick={goToNextSlide}
               disabled={currentSlide === totalSlides - 1}
            />
         </Arrows>
      </>
   )
}

// const ContainerImg = styled('div')({
//    width: '100%',
//    height: '100vh',
//    marginLeft: '2rem',
// })

const Arrows = styled('div')({
   display: 'flex',
   justifyContent: 'start',
   alignItems: 'center',
   marginTop: '5rem',
})

const ImgBlock = styled('div')(() => ({
   display: 'flex',
   img: {
      width: ' 12.25rem',
      height: '8.52656rem',
   },
}))

const StyledSlider = styled(Slider)({
   // display: 'flex',

   '& .slick-list': {
      display: 'flex',
   },
   '& .slick-track': {
      position: 'statick',
      display: 'flex',
      marginLeft: '0px',
   },
   '&.slick-slide ': {
      display: 'inline-block',
   },
   '&. slick-active ': {
      display: 'felx',
   },
   '&.slick-current': {
      display: 'felx',
   },
   // '& .slick-slider ': {
   //    display: 'inline-block',
   // },
   // '& .slick-next': {
   //    position: 'relative',
   //    zIndex: '88',
   //    top: '-75px',
   //    left: '589px',
   // },
   // '& .slick-prev': {
   //    position: 'relative',
   //    zIndex: '99',
   //    top: '79px',
   //    left: '20px',
   // },
})

const CustomArrowLeftDots = styled(Delete)(({ disabled }) => ({
   cursor: disabled ? 'default' : 'pointer',
   opacity: disabled ? 0.5 : 1,
}))

const CustomArrowRightDots = styled(Vector)(({ disabled }) => ({
   cursor: disabled ? 'default' : 'pointer',
   opacity: disabled ? 0.5 : 1,
}))
