import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GeoIcon, Start1 } from '../../assets/icons'
import { axiosInstance } from '../../config/axiosInstance'

export function PopularHouse() {
   const [houseData, setHouseData] = useState([])
   const { darkMode } = useSelector((state) => state.darkMode)

   const getPopularHouse = async () => {
      try {
         const response = await axiosInstance.get(
            '/api/announcements/getPopularHouses'
         )
         setHouseData(response.data)
      } catch (error) {
         console.log('error: ', error)
      }
   }

   useEffect(() => {
      getPopularHouse()
   }, [])
   useEffect(() => {
      AOS.init({
         duration: 1500,
         easing: 'ease-in-out',
         once: false,
      })
   }, [])

   console.log(houseData, 'houseData')
   const styledark = {
      color00: darkMode ? '#fff' : '#000',
      color36: darkMode ? '#fff' : '--primary-black, #363636',
      background: darkMode
         ? 'linear-gradient(277deg, rgba(152,152,152,1) 15%, rgba(0,0,0,1) 100%);'
         : '#fff',
   }
   return (
      <Container styledark={styledark}>
         <DescriptionDiv>
            <PopularHouseDiv styledark={styledark}>
               <h2 data-aos="fade-right">POPULAR HOUSE</h2>
               <DescriptionPtag styledark={styledark} data-aos="fade-right">
                  Helping you make the best decisions in buying, selling, &
                  renting your last minute locations.
               </DescriptionPtag>
            </PopularHouseDiv>
            <StyledAhref
               styledark={styledark}
               to="/main/HOUSE/region"
               data-aos="fade-left"
            >
               View all
            </StyledAhref>
         </DescriptionDiv>
         <ImageDiv>
            {houseData.map(({ address, images, rating, title, price, id }) => {
               return (
                  <HouseContainer key={id} data-aos="flip-right">
                     <ImageStarDiv
                        image={images}
                        to={`/main/${id}/popular-house`}
                     >
                        <StarDiv>
                           <Start1 />
                           {rating}
                        </StarDiv>
                     </ImageStarDiv>
                     <AboutHouseDiv>
                        <Title>{title}</Title>
                        <Address>
                           <GeoIcon /> {address}
                        </Address>
                        <Price>
                           {price} /<SpanPrice>day</SpanPrice>
                        </Price>
                     </AboutHouseDiv>
                  </HouseContainer>
               )
            })}
         </ImageDiv>
      </Container>
   )
}

const Container = styled('div')(({ styledark }) => ({
   width: '100%',
   padding: '10.62rem 6rem 0 6.25rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '3rem',
   fontFamily: 'Inter',
   background: styledark.background,
}))

const HouseContainer = styled('div')(() => ({
   width: '26rem',
   background: '#fff',
}))

const DescriptionDiv = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))

const PopularHouseDiv = styled('div')(({ styledark }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   fontWeight: '500',
   color: styledark.color00,
}))

const StarDiv = styled('div')(() => ({
   width: '62px',
   height: '25px',
   backgroundColor: 'rgba(52, 52, 52, 0.50)',
   borderRadius: '2px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   color: 'white',
   gap: '5px',
}))

const StyledAhref = styled(Link)(({ theme, styledark }) => ({
   color: styledark.color00,
   fontSize: '18px',
   fontWeight: '400',
   textDecoration: 'underline',
   '&:hover': {
      textDecoration: 'underline',
      color: theme.palette.primary.more,
   },
}))

const DescriptionPtag = styled('p')(({ styledark }) => ({
   color: styledark.color36,
}))

const ImageDiv = styled('div')(() => ({
   display: 'flex',
   width: '100%',
   gap: '1.2rem',
   padding: '1rem',
}))

const ImageStarDiv = styled(Link)(({ image }) => ({
   width: '25rem',
   height: '30rem',
   display: 'flex',
   justifyContent: 'flex-end',
   background: `url(${image[0]})`,
   padding: '27px 28px 0px 0px',
}))

const AboutHouseDiv = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '14px',
   padding: '0 0 1rem 1rem',
   gap: '10px',
}))

const Title = styled('p')(() => ({
   fontWeight: '400',
   fontSize: '18px',
}))

const Address = styled('p')(() => ({
   fontWeight: '400',
   color: '#757575',
   fontSize: '14px',
}))

const Price = styled('p')(() => ({
   fontWeight: '500',
   color: '--primary-black, #363636',
   fontSize: '16px',
}))

const SpanPrice = styled('span')(() => ({
   fontWeight: '500',
   color: '#757575',
   fontSize: '16px',
}))
