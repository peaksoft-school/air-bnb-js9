/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { styled } from '@mui/material'
import { PulseLoader } from 'react-spinners'
import { css } from '@emotion/react'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import { Cards } from '../UI/cards/Cards'
import { getAllFavorites } from '../../store/favorite/FavoriteThunk'

export function Favorite() {
   const { favorites, status } = useSelector((state) => state.favorite)
   const dispatch = useDispatch()

   const navigate = useNavigate()
   const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
   `
   const transformedData = favorites?.map((data) => ({
      images: [data.image],
      rating: data.rating,
      title: data.description,
      price: data.price,
      location: data.address,
      guest: data.maxGuests,
      id: data.id,
      favorite: data.favorite,
   }))

   useEffect(() => {
      dispatch(getAllFavorites())
   }, [])
   const favoriteLenght = transformedData.length
   return (
      <MainCotnainer>
         <Header favoriteLenght={favoriteLenght} favorite="true" />
         <ContainerCardNav>
            <NavContainer>
               <LinkContainer>
                  <NavigateStyle onClick={() => navigate('/')}>
                     Main
                  </NavigateStyle>
                  <p onClick={() => navigate('/favorites')}>/ Favorite</p>
               </LinkContainer>
               <h2>Favorite({favoriteLenght})</h2>
            </NavContainer>
            <Container>
               {status ? (
                  <SpinerContainer>
                     <PulseLoader color="#DD8A08" css={override} size={15} />
                  </SpinerContainer>
               ) : (
                  <div>
                     {favoriteLenght ? (
                        <Cards
                           data={transformedData}
                           getAllFavorites={getAllFavorites}
                        />
                     ) : (
                        <HeaderConainer>
                           <StyleParagraph>
                              you dont have favorite announcements
                           </StyleParagraph>
                        </HeaderConainer>
                     )}
                  </div>
               )}
            </Container>
         </ContainerCardNav>

         <Footer />
      </MainCotnainer>
   )
}
const ContainerCardNav = styled('div')`
   width: auto;
   min-height: 90vh;
`
const HeaderConainer = styled('div')`
   display: flex;
   justify-content: center;
   height: 100%;
`
const StyleParagraph = styled('p')`
   color: var(--primary-black, #363636);
   font-size: 1.25rem;
   font-weight: 500;
   text-transform: uppercase;
`
const SpinerContainer = styled('div')`
   display: flex;
   justify-content: center;
   height: auto;
`

const Container = styled('div')`
   margin: 2.5rem 0px;
   flex-wrap: wrap;
   width: 100%;
   h1 {
      display: flex;
      justify-content: center;
   }
`

const MainCotnainer = styled('div')`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   background: #f7f7f7;
`
const NavContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
   justify-content: center;
   margin-left: 6.5rem;
   margin-top: 2.5rem;
`
const LinkContainer = styled('div')`
   display: flex;
   cursor: pointer;
   gap: 0.4rem;
`
const NavigateStyle = styled('p')`
   color: var(--tertiary-light-gray, #c4c4c4);
   font-size: 0.875rem;
   font-weight: 400;
`
