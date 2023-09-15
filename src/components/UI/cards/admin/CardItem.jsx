import React, { useState } from 'react'
import { MenuItem, styled, Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { truncateText } from '../../../../utils/Functions'
import { MeatBalls } from '../../meat-balls/MeatBalls'

import {
   AdminLocation,
   AdminMenu,
   ArrowleftIcon,
   ArrowrightIcon,
   Start1,
} from '../../../../assets/icons'

export function CardItem({
   open,
   idd,
   item,
   image,
   index,
   imagesClick,
   handleMenuOpen,
   handleNextImage,
   handlePrevImage,
   itemId,
   currentImages,
   meatballs,
   currentEl,
   removeCard,
   acceptHandler,
   openModalHandler,
   removeAllHousing,
   openModalAllHousing,
   closeMeatBallsHeandler,
}) {
   console.log(item.images)
   const [openButton, setOpenButton] = useState(false)
   const navigate = useNavigate()
   return (
      <MapContainer status="dat">
         <ImageContainer
            onMouseEnter={() => setOpenButton(true)}
            onMouseLeave={() => setOpenButton(false)}
            imagesClick={imagesClick}
         >
            {openButton === true && item.images.images?.length > 1 && (
               <ArrowContainer imagesClick={imagesClick}>
                  <StyledArrowleftIcon onClick={() => handlePrevImage(index)} />

                  <StyledArrowrightIcon
                     onClick={() => handleNextImage(index)}
                  />
               </ArrowContainer>
            )}
            <img
               onClick={
                  imagesClick === 'click'
                     ? () => navigate(`/admin/application/${item.id}`)
                     : null
               }
               src={
                  image
                     ? item.images[currentImages[index]]
                     : item.images.images[currentImages[index]]
               }
               alt={item.title}
            />
         </ImageContainer>

         <ContainerDescription>
            <ContainerPrice>
               <h4 className="price">
                  ${item.price}/ <p className="day">day</p>
               </h4>
               <div className="rating">
                  <Start1 />
                  <p>{item.rating}</p>
               </div>
            </ContainerPrice>
            <ContainerInformation>
               <div className="title">
                  <Tooltip title={item.description}>
                     <span>{truncateText(item.description, 25)}</span>
                  </Tooltip>
               </div>
               <div className="location">
                  <AdminLocation />
                  <div>
                     <Tooltip title={item.address}>
                        <span>
                           {' '}
                           {item.address?.length > 7
                              ? truncateText(item.address, 7)
                              : item.address}
                           ,{' '}
                        </span>
                     </Tooltip>
                     <Tooltip title={item.province}>
                        <span>
                           {' '}
                           {item.province?.length > 7
                              ? truncateText(item.province, 7)
                              : item.province}
                        </span>
                     </Tooltip>
                  </div>
               </div>
               <ContainerGuests>
                  <p>{item.maxGuests} guests</p>

                  <AdminMenu
                     style={{ cursor: 'pointer' }}
                     onClick={(e) => handleMenuOpen(e, item.id)}
                  />
                  <MeatBalls
                     anchorEl={currentEl}
                     open={open}
                     close={closeMeatBallsHeandler}
                     id={idd}
                     propsVertical="top"
                     propsHorizontal="left"
                     width={meatballs === 'application' ? '15%' : '10%'}
                     height={meatballs === 'application' ? '16%' : '12%'}
                  >
                     {meatballs === 'application' ? (
                        <>
                           <MenuItem onClick={() => acceptHandler(itemId)}>
                              Accept
                           </MenuItem>
                           <MenuItem onClick={() => openModalHandler(itemId)}>
                              Reject
                           </MenuItem>
                           <MenuItem onClick={() => removeCard(itemId)}>
                              Delete
                           </MenuItem>
                        </>
                     ) : (
                        <>
                           {' '}
                           <MenuItem onClick={() => removeAllHousing(itemId)}>
                              Delete
                           </MenuItem>
                           <MenuItem
                              onClick={() => openModalAllHousing(itemId)}
                           >
                              Update
                           </MenuItem>
                        </>
                     )}
                  </MeatBalls>
               </ContainerGuests>
            </ContainerInformation>
         </ContainerDescription>
      </MapContainer>
   )
}

const MapContainer = styled('div')((props) => ({
   width: '14rem',
   height: ' 17.8125rem',
   userSelect: 'none',
   borderRadius: '0.6rem 0.5rem 0 0 ',
   border: props.status === 'dates' ? '3px solid #ff0000' : 'none',
   boxShadow: '  0px 0px 8px 7px rgba(135, 132, 129, 0.2)',

   '&:hover': {
      opacity: 1,
      boxShadow: ' 0px 0px 8px 7px rgba(0, 0, 0, 0.2)',
   },
}))

const ImageContainer = styled('div')(({ imagesClick }) => ({
   width: '100%',
   height: ' 8.5rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',

   img: {
      width: '100%',
      height: ' 8.5rem',
      cursor: imagesClick === 'click' && 'pointer',
      borderRadius: '0.6rem 0.5rem 0 0 ',
   },
}))
const ArrowContainer = styled('div')(({ imagesClick }) => ({
   position: 'absolute',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '9.5rem',
   cursor: imagesClick === 'click' && 'pointer',
}))

const ContainerDescription = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   padding: '0.75rem',
   gap: '1rem',
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
      p: {
         color: '#fff',
      },
   },
}))

const ContainerInformation = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
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

const ContainerGuests = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
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
