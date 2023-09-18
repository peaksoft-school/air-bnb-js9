import { styled } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminCards } from '../../../components/UI/cards/AdminCards'
import { LoadingAirbnb } from '../../../components/UI/loading/LoadingAirbnb'
import { toastSnackbar } from '../../../components/UI/snackbar/Snackbar'
import {
   deleteAllHousing,
   // updateAllHousing,
} from '../../../store/admin-all-housing/AllHousingThunk'
import { AllHousingFilter } from './AllHousingFilter'

export function AllHousing() {
   const { allHouseData, loading } = useSelector((state) => state.allHousing)

   const dispatch = useDispatch()
   const { toastType } = toastSnackbar()
   const removeAllHousing = (id) => {
      dispatch(deleteAllHousing({ id, toastType }))
   }

   // const editAllHousing = (id) => {
   //    const data = {
   //       id,
   //       toastType,
   //       editData: false,
   //    }
   //    dispatch(updateAllHousing(data))
   // }

   return (
      <Container>
         <AllHousingFilter />
         <AdminCards
            data={allHouseData}
            removeAllHousing={removeAllHousing}
            padding="1rem 0 0 3rem"
         />
         {loading && <LoadingAirbnb />}
      </Container>
   )
}
const Container = styled('div')(() => ({
   marginTop: '80px',
}))
