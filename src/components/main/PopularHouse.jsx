import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GeoIcon, Start1 } from '../../assets/icons'
import { axiosInstance } from '../../config/axiosInstance'

export function PopularHouse() {
   const [houseData, setHouseData] = useState([])

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
   return (
      <Container>
         <DescriptionDiv>
            <PopularHouseDiv>
               <h2>POPULAR HOUSE</h2>
               <DescriptionPtag>
                  Helping you make the best decisions in buying, selling, &
                  renting your last minute locations.
               </DescriptionPtag>
            </PopularHouseDiv>
            <StyledAhref href="view all">View all</StyledAhref>
         </DescriptionDiv>
         <ImageDiv>
            {houseData.map(({ image, rating, title, address, price }) => {
               return (
                  <HouseContainer>
                     <ImageStarDiv image={image}>
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

const Container = styled('div')(() => ({
   width: '100%',
   padding: '10.62rem 6rem 0 6.25rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '3rem',
   fontFamily: 'Inter',
}))

const HouseContainer = styled('div')(() => ({
   width: '100%',
}))

const DescriptionDiv = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))

const PopularHouseDiv = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   fontWeight: '500',
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

const StyledAhref = styled('a')(() => ({
   color: 'black',
   fontSize: '18px',
   fontWeight: '400',
   textDecoration: 'underline',
}))

const DescriptionPtag = styled('p')(() => ({
   color: '--primary-black, #363636',
}))

const ImageDiv = styled('div')(() => ({
   display: 'flex',
   width: '100%',
   gap: '1.2rem',
}))

const ImageStarDiv = styled('div')(({ image }) => ({
   width: '25rem',
   height: '30rem',
   display: 'flex',
   justifyContent: 'flex-end',
   background: `url(${image})`,
   padding: '27px 28px 0px 0px',
}))

const AboutHouseDiv = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '14px',
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
