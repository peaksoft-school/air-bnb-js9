import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
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
         console.log(response.data, 'response popular house')
         setHouseData(response.data)
      } catch (error) {
         console.log('error: ', error)
      }
   }

   useEffect(() => {
      getPopularHouse()
   }, [])

   return (
      <Container darkMode={darkMode}>
         <DescriptionDiv>
            <PopularHouseDiv darkMode={darkMode}>
               <h2>POPULAR HOUSE</h2>
               <DescriptionPtag darkMode={darkMode}>
                  Helping you make the best decisions in buying, selling, &
                  renting your last minute locations.
               </DescriptionPtag>
            </PopularHouseDiv>
            <StyledAhref href="view all">View all</StyledAhref>
         </DescriptionDiv>
         <ImageDiv>
            {houseData.map(({ address, images, rating, title, price }) => {
               return (
                  <HouseContainer darkMode={darkMode}>
                     <ImageStarDiv image={images}>
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

const Container = styled('div')(({ darkMode }) => ({
   width: '100%',
   padding: '10.62rem 6rem 0 6.25rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '3rem',
   fontFamily: 'Inter',
   background: darkMode
      ? 'linear-gradient(277deg, rgba(152,152,152,1) 15%, rgba(0,0,0,1) 100%);'
      : '#fff',
}))

const HouseContainer = styled('div')(({ darkMode }) => ({
   width: '26rem',
   background: darkMode ? '#fff' : '#fff',
}))

const DescriptionDiv = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))

const PopularHouseDiv = styled('div')(({ darkMode }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   fontWeight: '500',
   color: darkMode ? '#fff' : '#000',
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

const DescriptionPtag = styled('p')(({ darkMode }) => ({
   color: darkMode ? '#fff' : '--primary-black, #363636',
}))

const ImageDiv = styled('div')(() => ({
   display: 'flex',
   width: '100%',
   gap: '1.2rem',
   padding: '1rem',
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
