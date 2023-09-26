import { styled } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { AdminCards } from '../../../components/UI/cards/admin/AdminCards'
import { toastSnackbar } from '../../../components/UI/snackbar/Snackbar'
import { deleteAllHousing } from '../../../store/admin/all-housing/AllHousingThunk'
import { AllHousingFilter } from './AllHousingFilter'

export function AllHousing() {
   const { allHouseData, loading } = useSelector((state) => state.admin)

   const dispatch = useDispatch()
   const { toastType } = toastSnackbar()
   const removeAllHousing = (id) => {
      dispatch(deleteAllHousing({ id, toastType }))
   }

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
               imagesClick="noClick"
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
