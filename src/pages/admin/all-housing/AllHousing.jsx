import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { AdminCards } from '../../../components/UI/cards/AdminCards'
import { LoadingAirbnb } from '../../../components/UI/loading/LoadingAirbnb'
import { AllHousingFilter } from './AllHousingFilter'

export function AllHousing({ removeCard }) {
   const { allHouseData, loading } = useSelector((state) => state.allHousing)
   return (
      <Container>
         <AllHousingFilter />
         <AdminCards data={allHouseData} removeCard={removeCard} />
         {loading && <LoadingAirbnb />}
      </Container>
   )
}
const Container = styled('div')(() => ({
   marginTop: '80px',
}))
