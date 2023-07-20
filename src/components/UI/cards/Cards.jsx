import React, { useState } from 'react'
import { Tooltip, styled } from '@mui/material'
import {
   ArrowRight,
   Arrowleft,
   Location,
   Start1,
} from '../../../assets/icons/index'
import { Button } from '../button/Button'
import { ButtonIcon } from '../IconButton/IconButton'

export function Cards({ data, ...props }) {
   const [currentImages, setCurrentImages] = useState(data.map(() => 0))
   const [dataa, setData] = useState(
      data?.map((item) => ({ ...item, open: false }))
   )

   const handleNextImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === dataa[index].urls.length - 1
               ? 0
               : newImages[index] + 1
         return newImages
      })
   }
   const truncateTitle = (title) => {
      const words = title.split(' ')
      if (words.length > 7) {
         return `${words.slice(0, 4).join(' ')}...`
      }
      return title
   }

   const handlePrevImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === 0
               ? dataa[index].urls.length - 1
               : newImages[index] - 1
         return newImages
      })
   }

   const toggle = (index) => {
      setData((prevData) => {
         const newData = [...prevData]
         newData[index] = { ...newData[index], open: !newData[index].open }
         return newData
      })
   }

   return (
      <MainContainer>
         {dataa.map((item, index) => (
            <MapContainer key={item.id} status={item.status}>
               <div>
                  {item.urls.length > 1 && (
                     <IconsContainer className="ImageNavigation">
                        <StyledButton onClick={() => handlePrevImage(index)}>
                           <Arrowleft />
                        </StyledButton>
                        <StyledButton onClick={() => handleNextImage(index)}>
                           <ArrowRight />
                        </StyledButton>
                     </IconsContainer>
                  )}
                  <StyleImage
                     src={item.urls[currentImages[index]]}
                     alt="home"
                  />
               </div>
               <DayStartContainer onClick={props.dd}>
                  <DayContainer>
                     ${item.price}/ <DayStyle>day</DayStyle>{' '}
                  </DayContainer>

                  <StartContainer>
                     <Start1 />
                     <p>{item.rating}</p>
                  </StartContainer>
               </DayStartContainer>
               <StyleTitle>
                  <Tooltip title={item.title}>
                     {truncateTitle(item.title)}
                  </Tooltip>
               </StyleTitle>
               <LocationCantainerStyle>
                  <Location />
                  <p>{item.location}</p>
               </LocationCantainerStyle>
               {item.status === 'dates' ? (
                  <DayStyle>2 guests</DayStyle>
               ) : (
                  <ButtonsContainer>
                     <DayStyle>2 guests</DayStyle>
                     <Button
                        variant="contained"
                        height="20%"
                        bgColor="#DD8A08"
                        color="white"
                        width="6.4375rem"
                     >
                        Book
                     </Button>
                     <ButtonIcon
                        width="10%"
                        open={item.open}
                        toggle={() => toggle(index)}
                     />
                  </ButtonsContainer>
               )}
            </MapContainer>
         ))}
      </MainContainer>
   )
}

const MainContainer = styled('div')`
   line-height: 2rem;
   background: white;
   margin-left: 2%;
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 50px;
`
const IconsContainer = styled('div')``

const MapContainer = styled('div')(({ status }) => ({
   width: '20.2%',
   height: '16%',
   borderRadius: '4px',
   outline: status === 'dates' ? '3px solid #ff0000' : 'none',
   border: status === 'dates' ? '4px solid pink' : 'none',
   display: 'flex',
   position: 'relative',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   lineHeight: '2rem',

   '.ImageNavigation': {
      display: 'none',
   },

   '&:hover': {
      opacity: 1,
      boxShadow: '1px -2px 19px -5px rgba(34, 60, 80, 0.37)',

      '.ImageNavigation': {
         position: 'absolute',
         ziIdex: '9',
         display: 'flex',
         justifyContent: 'center',
         gap: ' 15rem',
         marginTop: '4.1rem',
      },
   },
}))

const StartContainer = styled('section')`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 0.125rem;
   background: var(--tertiary-middle-gray, #828282);
   width: 3.875rem;
   height: 1.5625rem;
   color: #ffff;
`

const DayContainer = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;
`

const DayStartContainer = styled('div')`
   padding-bottom: 1rem;
   display: flex;
   align-items: center;
   gap: 7.4rem;
`

const DayStyle = styled('p')`
   color: #6c6c6c;
   font-family: Inter;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
`

const LocationCantainerStyle = styled('section')`
   display: flex;
   align-items: center;
   justify-content: space-around;
   color: var(--tertiary-middle-gray, #828282);
   padding-bottom: 2rem;
   font-family: Inter;
   font-size: 0.875rem;
   font-weight: 400;
   line-height: normal;
`

const ButtonsContainer = styled('section')`
   display: flex;
   justify-content: center;
   gap: 2rem;
`

const StyledButton = styled('button')`
   width: 2rem;
   height: 2rem;
   border-radius: 50%;
   border: none;
   background: #828282;
   :hover {
      background: #bb7200;
   }

   :active {
      background: #f2b75b;
   }
`

const StyleImage = styled('img')`
   width: 19rem;
   height: 11.5rem;
`

const StyleTitle = styled('p')`
   width: 16.4375rem;
`
