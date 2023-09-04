/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { styled } from '@mui/material'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import { Cards } from '../UI/cards/Cards'
import { getAllFavorites } from '../../store/favorite/FavoriteThunk'

export function Favorite() {
   const { favorites } = useSelector((state) => state.favorite)
   const dispatch = useDispatch()

   const navigate = useNavigate()

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
         <div>
            <Header favoriteLenght={favoriteLenght} favorite="true" />
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
               {transformedData.length > 0 ? (
                  <Cards
                     data={transformedData}
                     getAllFavorites={getAllFavorites}
                  />
               ) : (
                  <h1>No cards yet...</h1>
               )}
            </Container>
            <Footer />
         </div>
      </MainCotnainer>
   )
}

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
   border: 1px solid yellowgreen;
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
