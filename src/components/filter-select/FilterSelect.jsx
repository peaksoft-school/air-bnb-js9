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
   const populars = region === 'Popular' ? 'Populars' : null
   const theLatest = region === 'The lastest' ? 'The lastest' : null
   const houseSelect = region === 'House' ? 'House' : null
   const regionsSelect =
      region === 'CHUI' ||
      region === 'BATKEN' ||
      region === 'JALAL_ABAD' ||
      region === 'NARYN' ||
      region === 'ISSYK_KUL' ||
      region === 'TALAS' ||
      region === 'BISHKEK' ||
      region === 'OSH'
         ? region
         : null

   const defaultValuePopular = selectedPopular === '' ? null : selectedPopular
   const valuesPopular =
      defaultValuePopular === undefined ? null : selectedPopular

   const defaultValueRegions = selectedRegion === '' ? null : selectedRegion
   const valuesRegions =
      defaultValueRegions === undefined ? null : selectedRegion

   const defaultValueHouseType =
      selectedHomeType === '' ? null : selectedHomeType
   const valuesHouseType =
      defaultValueHouseType === undefined ? null : selectedHomeType

   const defaultValuePrice = selectedPrice === '' ? null : selectedPrice
   const valuesPrice = defaultValuePrice === undefined ? null : selectedPrice

   return (
      <Container>
         <div>
            <Select
               labelName="Sort by region:"
               data={regions}
               onChange={onChangeRegions}
               defaultValue={regionsSelect || valuesRegions}
               value={regionsSelect || valuesRegions}
            />
         </div>
         <div>
            <Select
               labelName="Sort by popularity:"
               data={popular}
               onChange={onChangePopular}
               defaultValue={populars || theLatest || valuesPopular}
               value={populars || theLatest || valuesPopular}
            />
         </div>
         <div>
            <Select
               labelName="Filter by home type:"
               data={homeType}
               onChange={onChangeHomeType}
               defaultValue={houseSelect || valuesHouseType}
               value={houseSelect || valuesHouseType}
            />
         </div>
         <div>
            <Select
               labelName="Filter by price:"
               data={userPrice}
               onChange={onChangePrice}
               defaultValue={valuesPrice}
               value={valuesPrice}
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
