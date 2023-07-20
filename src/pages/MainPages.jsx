import React from 'react'
import PopularApartments from '../components/popular-apartments/PopularApartments'
import { MainPage } from '../components/main/MainPage'
import { MainRegion } from '../components/main/MainRegion'
import { PopularHouse } from '../components/main/PopularHouse'
import { Footer } from '../layout/Footer/Footer'

export function MainPages() {
   return (
      <div>
         <MainPage />
         <MainRegion />
         <PopularApartments />
         <PopularHouse />
         <PopularApartments state="true" />
         <Footer />
      </div>
   )
}
