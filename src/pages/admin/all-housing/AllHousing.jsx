import { styled } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminCards } from '../../../components/UI/cards/AdminCards'
import { LoadingAirbnb } from '../../../components/UI/loading/LoadingAirbnb'
import { deleteAllHousing } from '../../../store/admin-all-housing/AllHousingThunk'
import { AllHousingFilter } from './AllHousingFilter'

export function AllHousing() {
   const { allHouseData, loading } = useSelector((state) => state.allHousing)
   const dispatch = useDispatch()

   const removeAllHousing = (id) => {
      console.log(id, 'id all Housing')
      dispatch(deleteAllHousing(id))
   }
   return (
      <Container>
         <AllHousingFilter />
         <AdminCards data={allHouseData} removeAllHousing={removeAllHousing} />
         {loading && <LoadingAirbnb />}
      </Container>
   )
}
const Container = styled('div')(() => ({
   marginTop: '80px',
}))
