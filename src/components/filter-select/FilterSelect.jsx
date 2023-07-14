import { styled } from '@mui/material'
import { Select } from '../UI/select/Select'
import {
   homeType,
   popular,
   price,
   regions,
} from '../../utils/constants/helpers'

export function FilterSelect() {
   const onChangeRegions = (selectedOption) => {
      console.log('Selected option:', selectedOption)
   }

   const onChangePopular = (selectedOption) => {
      console.log('Selected option:', selectedOption)
   }

   const onChangeHomeType = (selectedOption) => {
      console.log('Selected option:', selectedOption)
   }

   const onChangePrice = (selectedOption) => {
      console.log('Selected option:', selectedOption)
   }

   return (
      <Container>
         <div>
            <Select
               labelName="Sort by region:"
               data={regions}
               onChange={onChangeRegions}
            />
         </div>
         <div>
            <Select
               labelName="Sort by popularity:"
               data={popular}
               onChange={onChangePopular}
            />
         </div>
         <div>
            <div>
               <Select
                  labelName="Filter by home type:"
                  data={homeType}
                  onChange={onChangeHomeType}
               />
            </div>
            <div>
               <Select
                  labelName="Filter by price:"
                  data={price}
                  onChange={onChangePrice}
               />
            </div>
         </div>
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   width: '60%',
}))
