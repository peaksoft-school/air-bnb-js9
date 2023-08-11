import React from 'react'
import { styled } from '@mui/material'
import { Button } from '../button/Button'
import { ModalNameHotel } from './ModalNameHotel'

export function NameOfHotel({
   hotel,
   openModal,
   openModalHandler,
   pages,
   roles,
}) {
   return (
      <Container>
         <ModalNameHotel
            openModal={openModal}
            openModalHandler={openModalHandler}
         />
         <ButtonContainerOne>
            <div>Apartement</div>
            <div>2 Guests</div>
         </ButtonContainerOne>
         {hotel.map((item) => {
            return (
               <DescriptionContainer>
                  <NameHotel>
                     <h3>{item.nameHotel}</h3>
                     <p>{item.addresHotel}</p>
                  </NameHotel>

                  <p className="description">{item.discriptionHotel}</p>

                  <ProfileBlock>
                     <img src={item.hostAvatar} alt="#" />
                     <NameBlock>
                        <h4>{item.hostName}</h4>
                        <p>{item.hostEmail}</p>
                     </NameBlock>
                  </ProfileBlock>
               </DescriptionContainer>
            )
         })}

         <ContainerButtonTwo>
            <Button
               onClick={openModalHandler}
               variant="contained"
               width="12.25rem"
               border-radius=" 0.125rem"
               border=" 1px solid #DD8A08"
               background="#fff"
               padding=" 0.625rem 1rem"
               color="#DD8A08"
               font-size="0.875rem"
               font-weight="500"
            >
               {pages ? 'delete' : 'reject'}
            </Button>
            {roles === 'admin' ? (
               <Button
                  variant="contained"
                  width="12.25rem"
                  border-radius=" 0.125rem"
                  border=" 1px solid #DD8A08"
                  bgColor="#DD8A08"
                  padding=" 0.625rem 1rem"
                  color="#fff"
                  font-size="0.875rem"
                  font-weight="500"
               >
                  {pages ? 'block' : 'accept'}
               </Button>
            ) : (
               <Button
                  variant="contained"
                  width="12.25rem"
                  border-radius=" 0.125rem"
                  border=" 1px solid #DD8A08"
                  bgColor="#DD8A08"
                  padding=" 0.625rem 1rem"
                  color="#fff"
                  font-size="0.875rem"
                  font-weight="500"
               >
                  edit
               </Button>
            )}
         </ContainerButtonTwo>
      </Container>
   )
}
const Container = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
}))
const ButtonContainerOne = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '0.88rem',
   marginBottom: '1.25rem',
   div: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: ' 0.375rem 0.5rem',
      border: ' 1px solid #FFCBE0',
      background: '#FFF0F6',
      color: ' #000',
      fontFamily: 'Inter',
      fontSize: ' 0.875rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
   },
}))
const DescriptionContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   '.description': {
      width: '33.875rem',
      color: 'var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '130%',
      marginBottom: '1.87rem',
   },
}))
const NameHotel = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.5rem',
   marginBottom: '1.25rem',
   h3: {
      color: ' #000',
      fontFamily: 'Inter',
      fontSize: '1.25rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
   p: {
      color: ' var(--tertiary-middle-gray, #828282)',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
   },
}))
const ProfileBlock = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
   marginBottom: '3.56rem',
   img: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
   },
}))
const NameBlock = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   h4: {
      color: ' #000',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
   p: {
      color: ' var(--tertiary-middle-gray, #828282)',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
   },
}))
const ContainerButtonTwo = styled('div')(() => ({
   display: 'flex',
   gap: '1.25rem',
}))
