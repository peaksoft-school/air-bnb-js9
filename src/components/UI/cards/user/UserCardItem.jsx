import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Tooltip, styled } from '@mui/material'
import { useSelector } from 'react-redux'
import {
   ArrowleftIcon,
   ArrowrightIcon,
   Location,
   Start1,
} from '../../../../assets/icons/index'
import { Button } from '../../button/Button'
import { ButtonIcon } from '../../IconButton/IconButton'

export function UserCardItem({
   // page,
   item,
   index,
   postFavorite,
   truncateTitle,
   currentImages,
   handleNextImage,
   handlePrevImage,
}) {
   const [openButton, setOpenButton] = useState(false)
   const { darkMode } = useSelector((state) => state.darkMode)
   const { region } = useParams()

   return (
      <MapContainer
         key={item.id}
         status={item.status}
         // state={page}
         darMode={darkMode}
      >
         <ImageContainer
            onMouseEnter={() => setOpenButton(true)}
            onMouseLeave={() => setOpenButton(false)}
         >
            {openButton === true && item.images.images?.length > 1 && (
               <ArrowContainer>
                  <StyledArrowleftIcon onClick={() => handlePrevImage(index)} />

                  <StyledArrowrightIcon
                     onClick={() => handleNextImage(index)}
                  />
               </ArrowContainer>
            )}
            <img
               src={
                  item.images.images[currentImages[index]] === 'string' && []
                     ? 'https://media.istockphoto.com/id/165064060/vector/rooftop-logo.jpg?b=1&s=170667a&w=0&k=20&c=cXbzA4ilf5p2Uca2bDKvTLmNYKVUz4kVt0mXKTC6E6s='
                     : item.images.images[currentImages[index]]
               }
               alt={item.title}
            />
         </ImageContainer>
         <ContainerDescription>
            <ContainerPrice>
               <div className="price">
                  ${item.price}/ <p className="day">day</p>{' '}
               </div>
               <button className="rating" type="button">
                  <StartContainer>
                     <Start1 />
                     <p>{item.rating}.4</p>
                  </StartContainer>
               </button>
            </ContainerPrice>
            <ContainerInformation>
               <div className="title">
                  <Tooltip title={item.title}>
                     <span>{truncateTitle(item.title)}</span>
                  </Tooltip>
               </div>
               <div className="location">
                  <Location />
                  <p>
                     {item.location || item.address} , {item.province}
                  </p>
               </div>
               <ButtonsContainer>
                  <DayStyle>{item.maxGuests} guest</DayStyle>
                  <Link to={`/main/${region}/region/${item.id}`}>
                     <Button
                        variant="contained"
                        height="20%"
                        bgColor="#DD8A08"
                        color="white"
                        width="6.4375rem"
                     >
                        Book
                     </Button>
                  </Link>
                  <div>
                     <ButtonIcon
                        width="10%"
                        onClick={() => postFavorite(item.id)}
                        favorite={item.favorite}
                     />
                  </div>
               </ButtonsContainer>
            </ContainerInformation>
         </ContainerDescription>
      </MapContainer>
   )
}

const ContainerInformation = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   gap: '0.5rem',
   '.title': {
      width: '11.625rem',
      color: '#2B2B2B',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
   },
   '.location': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.38rem',
      p: {
         width: '100%',
         color: ' var(--tertiary-middle-gray, #828282)',
         fontFamily: 'Inter',
         fontSize: '0.875rem',
         fontStyle: 'normal',
         fontWeight: 400,
         lineHeight: 'normal',
      },
   },
}))

const ContainerPrice = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',

   '.price': {
      color: ' var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: ' 1.125rem',
      fontStyle: 'normal',
      fontweight: 400,
      lineHeight: 'normal',
      display: 'flex',
      alignItems: 'center',
      gap: '0.19rem',

      '.day': {
         color: '  #6C6C6C',
         fontFamily: 'Inter',
         fontSize: ' 1rem',
         fontStyle: 'normal',
         fontweight: 400,
         lineHeight: 'normal',
      },
   },
   '.rating': {
      width: ' 3.875rem',
      height: '1.5625rem',
      borderRadius: '0.125rem',
      background: ' var(--tertiary-middle-gray, #828282)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.25rem',
      border: 'none',

      p: {
         color: '#fff',
      },
   },
}))
const ButtonsContainer = styled('section')`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1.9rem;
`
const ContainerDescription = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   padding: '0.75rem',
   gap: '1rem',
}))
const ImageContainer = styled('div')(() => ({
   width: '100%',
   height: ' 11.9375rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',

   img: {
      width: '100%',
      height: '11.9375rem',
      borderRadius: '0.5rem 0.5rem 0 0 ',
   },
}))

const MapContainer = styled('div')(({ status, darkMode }) => ({
   width: '18.4375rem',
   height: '22.625rem',
   borderRadius: '4px',
   userSelect: 'none',
   outline: status === 'dates' ? '3px solid #ff0000' : 'none',
   border: status === 'dates' ? '4px solid pink' : ' none',
   display: 'flex',
   position: 'relative',
   flexDirection: 'column',
   alignItems: 'center',
   lineHeight: '2rem',
   boxShadow: darkMode
      ? '1px -2px 19px -5px #fff'
      : '1px -2px 19px -5px rgba(34, 60, 80, 0.37)',
   background: '#fff',

   '&:hover': {
      opacity: 1,
      boxShadow: '1px -2px 19px -5px rgba(34, 60, 80, 0.37)',
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

const DayStyle = styled('p')`
   color: #6c6c6c;
   font-family: Inter;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   gap: 5px;
`

const ArrowContainer = styled('div')(() => ({
   position: 'absolute',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '13.5rem',
   cursor: 'pointer',
}))
const StyledArrowleftIcon = styled(ArrowleftIcon)(() => ({
   width: '2rem',
   height: '2rem',
   background: '#00000079',
   color: '#000',
   borderRadius: '100%',
   padding: '0.3rem 0.5rem 0.3rem 0.3rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   cursor: 'pointer',
   zIndex: '10',
   '&:hover': {
      background: '#dd8b08c5',
   },
}))
const StyledArrowrightIcon = styled(ArrowrightIcon)(() => ({
   width: '2rem',
   height: '2rem',
   background: '#00000079',
   color: '#000',
   borderRadius: '100%',
   padding: '0.3rem 0.3rem 0.3rem 0.5rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   cursor: 'pointer',
   zIndex: '10',
   '&:hover': {
      background: '#dd8b08c5',
   },
}))
