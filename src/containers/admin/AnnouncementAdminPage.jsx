import React, { useState } from 'react'
import { styled } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import { HouseSlidDetail } from '../../components/UI/house-detail/HouseSlidDetail'
import { NameOfHotel } from '../../components/UI/name-hotel/NameOfHotel'
import { house, Hotel } from '../../utils/helpers'

export function AnnouncementAdminPage() {
   const location = useLocation()
   const [openModal, setOpenModal] = useState(false)

   const openModalHandler = () => {
      setOpenModal((prev) => !prev)
   }
   return (
      <Container>
         <MainContainer>
            <div className="block-path">
               <StyleNavLink isActive={location.pathname === '/application'}>
                  Application{' '}
               </StyleNavLink>
               /<span>Name</span>
            </div>
            <BlockMain>
               <h2>Name</h2>
               <Main>
                  <HouseSlidDetail images={house} />
                  <NameOfHotel
                     hotel={Hotel}
                     openModal={openModal}
                     openModalHandler={openModalHandler}
                  />
               </Main>
            </BlockMain>
         </MainContainer>
      </Container>
   )
}
const Container = styled('div')(() => ({
   width: '100%',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '1.87rem',
}))

const MainContainer = styled('div')(() => ({
   width: '100%',
   padding: '2.5rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '2.5rem',
   '.block-path': {
      display: 'flex',
      p: {
         color: 'var(--primary-black, #363636)',
         fontFamily: 'Inter',
         fontSize: '0.875rem',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: 'normal',
         '&:hover': {
            color: 'var(--tertiary-light-gray, #C4C4C4)',
         },
         '&:focuse': {
            color: 'var(--tertiary-light-gray, #C4C4C4)',
         },
      },
      span: {
         color: 'var(--primary-black, #363636)',
         fontFamily: 'Inter',
         fontSize: '0.875rem',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: 'normal',
         '&:hover': {
            color: 'var(--tertiary-light-gray, #C4C4C4)',
         },
         '&:focuse': {
            color: 'var(--tertiary-light-gray, #C4C4C4)',
         },
      },
   },
}))
const Main = styled('main')(() => ({
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   gap: '4.26rem',
}))
const BlockMain = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.88rem',
   h2: {
      color: ' #000',
      fontFamily: 'Inter',
      fontSize: ' 1.25rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      textTransform: 'uppercase',
   },
}))
const StyleNavLink = styled(NavLink)(({ isActive }) => ({
   color: isActive
      ? 'var(--tertiary-light-gray, #C4C4C4)'
      : ' var(--primary-black, #363636)',
   fontFamily: 'Inter',
   fontSize: '0.875rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: 'normal',
   '&:hover': {
      color: 'var(--tertiary-light-gray, #C4C4C4)',
   },
}))
