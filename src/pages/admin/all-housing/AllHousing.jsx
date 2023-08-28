import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { AdminCards } from '../../../components/UI/cards/AdminCards'
import { AllHousingFilter } from './AllHousingFilter'

export function AllHousing() {
   const { allHousData } = useSelector((state) => state.allHousing)

   return (
      <Container>
         <AllHousingFilter />
         <AdminCards data={allHousData} />
      </Container>
   )
}
const Container = styled('div')(() => ({
   marginTop: '80px',
}))
