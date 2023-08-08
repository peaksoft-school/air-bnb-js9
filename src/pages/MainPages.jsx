import React from 'react'
import { useSelector } from 'react-redux'
import PopularApartments from '../components/popular-apartments/PopularApartments'
import { MainPage } from '../components/main/MainPage'
import { MainRegion } from '../components/main/MainRegion'
import { PopularHouse } from '../components/main/PopularHouse'
import { Footer } from '../layout/Footer/Footer'
import { Loading } from '../components/UI/loading/Loading'
import { Snackbar } from '../components/UI/snackbar/Snackbar'

export function MainPages() {
   const { isLoading } = useSelector((state) => state.auth)
   return (
      <div>
         {isLoading && <Loading />}
         <MainPage />
         <MainRegion />
         <PopularApartments />
         <PopularHouse />
         <PopularApartments state="true" />
         <Footer />
         <Snackbar />
      </div>
   )
}
