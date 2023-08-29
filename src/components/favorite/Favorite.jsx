/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { styled } from '@mui/material'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import { getFavorite } from '../../api/favorite/Favorite'
import { Cards } from '../UI/cards/Cards'

export function Favorite() {
   const [favoriteData, setFavoriteData] = useState([])
   const navigate = useNavigate()
   useEffect(() => {
      const getAllFavorites = async () => {
         try {
            const response = await getFavorite()
            const transformedData = response.data.map((data) => ({
               images: [data.image],
               rating: data.rating,
               title: data.description,
               price: data.price,
               location: data.address,
               guest: data.maxGuests,
               id: data.id,
               favorite: data.favorite,
            }))
            setFavoriteData(transformedData)
         } catch (error) {
            console.log('you make mistakes')
         }
      }

      getAllFavorites()
   }, [])
   const favoriteLenght = favoriteData.length
   return (
      <MainCotnainer>
         <Header />
         <NavContainer>
            <LinkContainer>
               <NavigateStyle onClick={() => navigate('/')}>Main</NavigateStyle>
               <p onClick={() => navigate('/favorite')}>/ Favorite</p>
            </LinkContainer>
            <h2>Favorite({favoriteLenght})</h2>
         </NavContainer>
         <Container>
            <Cards data={favoriteData} />
         </Container>
         <Footer />
      </MainCotnainer>
   )
}
const Container = styled('div')`
   margin: 2.5rem 0px;
   flex-wrap: wrap;
   width: 100%;
`
const MainCotnainer = styled('div')`
   display: flex;
   flex-direction: column;
   border: 1px solid yellowgreen;
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
