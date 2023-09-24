import { styled } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { AdminCards } from '../../../components/UI/cards/admin/AdminCards'
// import { LoadingAirbnb } from '../../../components/UI/loading/LoadingAirbnb'
import { toastSnackbar } from '../../../components/UI/snackbar/Snackbar'
import {
   deleteAllHousing,
   // updateAllHousing,
} from '../../../store/admin/all-housing/AllHousingThunk'
import { AllHousingFilter } from './AllHousingFilter'

export function AllHousing() {
   const { allHouseData, loading } = useSelector((state) => state.admin)

   console.log(allHouseData, 'allHouseData')
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
         {loading ? (
            <LoadingContainer>
               <SyncLoader color="#DD8A08" size={15} />
            </LoadingContainer>
         ) : (
            <AdminCards
               data={allHouseData}
               removeAllHousing={removeAllHousing}
               padding="1rem 0 0 3rem"
               imagesClick="no"
            />
         )}
      </Container>
   )
}
const Container = styled('div')(() => ({
   marginTop: '80px',
}))
const LoadingContainer = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
}))
