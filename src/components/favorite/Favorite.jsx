import React, { useState } from 'react'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import { getFavorite } from '../../api/favorite/Favorite'
// import { Cards } from '../UI/cards/Cards'

export function Favorite() {
   const getAllFavorite = async () => {
      try {
         const response = await getFavorite()

         return response.data
      } catch (error) {
         console.log('you make mistakes')
      }
      return {}
   }
   getAllFavorite()
   return (
      <div>
         <Header />
         {/* <Cards data={favorite} /> */}
         <Footer />
      </div>
   )
}
