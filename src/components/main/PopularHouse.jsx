import { styled } from '@mui/material'
import React from 'react'
import { popularHouse } from '../../utils/helpers'
import { GeoIcon, Start1 } from '../../assets/icons'

export function PopularHouse() {
   return (
      <Container>
         <DescriptionDiv>
            <div
               style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
               <h2 style={{ fontFamily: 'Inter', fontWeight: '500' }}>
                  POPULAR HOUSE
               </h2>
               <p
                  style={{
                     fontFamily: 'Inter',
                     fontWeight: '500',
                     color: '--primary-black, #363636',
                  }}
               >
                  Helping you make the best decisions in buying, selling, &
                  renting your last minute locations.
               </p>
            </div>
            <a
               style={{
                  color: 'black',
                  fontSize: '18px',
                  fontWeight: '400',
                  fontFamily: 'Inter',
                  textDecoration: 'underline',
               }}
               href="view all"
            >
               View all
            </a>
         </DescriptionDiv>
         <div
            style={{
               display: 'flex',
               width: '100%',
               gap: '1.2rem',
            }}
         >
            {popularHouse.map((item) => {
               return (
                  <HouseContainer>
                     <div
                        style={{
                           width: '24.6rem',
                           height: '30.20rem',
                           display: 'flex',
                           justifyContent: 'flex-end',
                           background: `url(${item.img})`,
                           padding: '27px 28px 0px 0px',
                        }}
                     >
                        <StarDiv>
                           <Start1 />
                           {item.rating}
                        </StarDiv>
                     </div>
                     <div
                        style={{
                           display: 'flex',
                           flexDirection: 'column',
                           marginTop: '14px',
                           gap: '10px',
                        }}
                     >
                        <p
                           style={{
                              fontFamily: 'Inter',
                              fontWeight: '400',
                              fontSize: '18px',
                           }}
                        >
                           {item.title}
                        </p>
                        <p
                           style={{
                              fontFamily: 'Inter',
                              fontWeight: '400',
                              color: '#757575',
                              fontSize: '14px',
                           }}
                        >
                           <GeoIcon /> {item.address}
                        </p>
                        <p
                           style={{
                              fontFamily: 'Inter',
                              fontWeight: '500',
                              color: '--primary-black, #363636',
                              fontSize: '16px',
                           }}
                        >
                           {item.price} /
                           <span
                              style={{
                                 fontFamily: 'Inter',
                                 fontWeight: '500',
                                 color: '#757575',
                                 fontSize: '16px',
                              }}
                           >
                              day
                           </span>
                        </p>
                     </div>
                  </HouseContainer>
               )
            })}
         </div>
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
   padding: '10.62rem 6.25rem 0 6.25rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '3rem',
}))

const HouseContainer = styled('div')(() => ({
   width: '100%',
}))

const DescriptionDiv = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
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
