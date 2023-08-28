import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Select } from '../../../components/UI/select/Select'
import { getAllHousing } from '../../../store/admin-all-housing/AllHousingThunk'
import {
   allHousingBooked,
   allHousingPopular,
   homeType,
   price,
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

   const { byBooked, byPopular, byHomeType, byPrice } = filters
   const { stateBooked, statePopular, stateType, statePrice } = toggleStates

   const dispatch = useDispatch()
   useEffect(() => {
      const data = {
         status: byBooked,
         houseType: byHomeType,
         rating: byPopular,
         price: byPrice,
      }

      dispatch(getAllHousing(data))
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
            <Select
               labelName="Filter by:"
               data={allHousingBooked}
               onChange={(selectedOption) =>
                  onChangeFilter('byBooked', selectedOption.target.value)
               }
               state={stateBooked}
               toggle={() => toggle('stateBooked')}
            />
            <Select
               labelName="Sort by:"
               data={allHousingPopular}
               onChange={(selectedOption) =>
                  onChangeFilter(' byPopular', selectedOption.target.value)
               }
               state={statePopular}
               toggle={() => toggle('statePopular')}
            />
            <Select
               labelName="Filter by home type:"
               data={homeType}
               onChange={(selectedOption) =>
                  onChangeFilter('byHomeType', selectedOption.target.value)
               }
               state={stateType}
               toggle={() => toggle('stateType')}
            />
            <Select
               labelName="Filter by price:"
               data={price}
               onChange={(selectedOption) =>
                  onChangeFilter('byPrice', selectedOption.target.value)
               }
               state={statePrice}
               toggle={() => toggle('statePrice')}
            />
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

   h1: {
      color: ' #000',
      fontFamily: 'Inter',
      fontSize: '1.25rem',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      textTransform: 'uppercase',
   },

   div: {
      display: 'flex',
      gap: '1rem',
   },
}))
