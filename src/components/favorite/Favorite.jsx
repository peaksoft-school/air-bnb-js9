import { useNavigate } from 'react-router'
import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
            console.log(response.data)
            const transformedData = response.data.map((data) => ({
               images: [data.image],
               rating: data.rating,
               title: data.description,
               price: data.price,
               location: data.address,
               guest: data.maxGuests,
            }))
            setFavoriteData(transformedData)
            console.log('favoriteData: ', favoriteData)
         } catch (error) {
            console.log('you made mistakes')
         }
      }

      getAllFavorites()
   }, [])

   console.log(favoriteData)
   return (
      <MainCotnainer>
         <Header />
         <NavContainer>
            <LijnkContainer>
               <button type="button" onClick={() => navigate('/')}>
                  Main /
               </button>
               <p>Favorite</p>
            </LijnkContainer>
            <h2>Favorite()</h2>
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
   margin-left: 7rem;
   margin-top: 2.5rem;
   :nth-child(1) {
      border: none;
   }
`
const LijnkContainer = styled('div')`
   display: flex;
   gap: 0.4rem;
   cursor: pointer;
`
