import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Select } from '../../../components/UI/select/Select'
import { getAllHousing } from '../../../store/admin/all-housing/AllHousingThunk'
import {
   allHousingBooked,
   allHousingPopular,
   homeType,
   allPrice,
} from '../../../utils/helpers'

export function AllHousingFilter() {
   const [filters, setFilters] = useState({
      byBooked: '',
      byPopular: '',
      byHomeType: '',
      byPrice: '',
   })
   const [toggleStates, setToggleStates] = useState({
      stateBooked: false,
      statePopular: false,
      stateType: false,
      statePrice: false,
   })
   const dispatch = useDispatch()

   const { byBooked, byPopular, byHomeType, byPrice } = filters
   const { stateBooked, statePopular, stateType, statePrice } = toggleStates
   const filterOptions = [
      {
         id: 1,
         label: 'Filter by:',
         data: allHousingBooked,
         onChangeFilter: 'byBooked',
         state: stateBooked,
         toggle: 'stateBooked',
      },
      {
         id: 2,
         label: 'Sort by:',
         data: allHousingPopular,
         onChangeFilter: 'byPopular',
         state: statePopular,
         toggle: 'statePopular',
      },
      {
         id: 3,
         label: 'Filter by home type:',
         data: homeType,
         onChangeFilter: 'byHomeType',
         state: stateType,
         toggle: 'stateType',
      },
      {
         id: 4,
         label: 'Filter by price:',
         data: allPrice,
         onChangeFilter: 'byPrice',
         state: statePrice,
         toggle: 'statePrice',
      },
   ]

   const conditionByBooked = byBooked === 'all' ? '' : byBooked
   const conditionByHomeType = byHomeType === 'all' ? '' : byHomeType
   const conditionByPopular = byPopular === 'all' ? '' : byPopular
   const conditionByPrice = byPrice === 'all' ? '' : byPrice

   useEffect(() => {
      const params = {
         status: conditionByBooked,
         houseType: conditionByHomeType,
         rating: conditionByPopular,
         price: conditionByPrice,
      }

      dispatch(getAllHousing(params))
   }, [dispatch, filters])

   const onChangeFilter = (filterName, selectedValue) => {
      setFilters((prev) => ({
         ...prev,
         [filterName]: selectedValue,
      }))
   }

   const toggle = (state) => {
      setToggleStates((prev) => ({
         ...prev,
         [state]: true,
      }))
   }

   return (
      <Container>
         <h1>All housing</h1>
         <div>
            {filterOptions.map((item) => (
               <Select
                  key={item.id}
                  labelName={item.label}
                  data={item.data}
                  onChange={(selectedOption) =>
                     onChangeFilter(
                        item.onChangeFilter,
                        selectedOption.target.value
                     )
                  }
                  state={item.state}
                  toggle={() => toggle(item.toggle)}
               />
            ))}
         </div>
      </Container>
   )
}
const Container = styled('div')(() => ({
   width: '100%',
   padding: '2.5rem',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',

   '@media (min-width:1000px) and (max-width: 1416px) ': {
      width: '80%',
      padding: '2.5rem',
   },

   h1: {
      color: ' #000',
      fontFamily: 'Inter',
      fontSize: '1.25rem',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      textTransform: 'uppercase',
      '@media (min-width:1000px) and (max-width: 1416px) ': {
         fontSize: '1.25rem',
      },
   },

   div: {
      display: 'flex',
      gap: '1rem',
   },
}))
