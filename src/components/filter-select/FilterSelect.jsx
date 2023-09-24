import { styled } from '@mui/material'
import { Select } from '../UI/select/Select'
import { homeType, popular, userPrice, regions } from '../../utils/helpers'

export function FilterSelect({
   onChangeRegions,
   onChangePopular,
   onChangeHomeType,
   onChangePrice,
   selectedPopular,
   selectedHomeType,
   selectedPrice,
   selectedRegion,
   region,
}) {
   const populars = region === 'Popular' ? region : null
   const regionsSelect = region === 'Popular' ? null : region

   const selectValue =
      selectedPopular ||
      selectedHomeType ||
      selectedPrice ||
      selectedRegion === ''
         ? null
         : selectedPopular ||
           selectedHomeType ||
           selectedPrice ||
           selectedRegion

   const valuesIn =
      selectValue === undefined
         ? null
         : selectedPopular ||
           selectedHomeType ||
           selectedPrice ||
           selectedRegion
   console.log(valuesIn, 'valuesIn')
   console.log(populars, 'populars')
   console.log(regionsSelect, 'regionsSelect')
   return (
      <Container>
         <div>
            <Select
               labelName="Sort by region:"
               data={regions}
               onChange={onChangeRegions}
               defaultValue={regionsSelect}
               value={valuesIn || regionsSelect}
            />
         </div>
         <div>
            <Select
               labelName="Sort by popularity:"
               data={popular}
               onChange={onChangePopular}
               defaultValue={populars}
               value={valuesIn || populars}
            />
         </div>
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
               data={userPrice}
               onChange={onChangePrice}
            />
         </div>
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '0.625rem',
   marginTop: '40px',
}))
