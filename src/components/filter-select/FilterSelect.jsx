import { styled } from '@mui/material'
import { Select } from '../UI/select/Select'
import { homeType, popular, price, regions } from '../../utils/helpers'

export function FilterSelect({
   onChangeRegions,
   onChangePopular,
   onChangeHomeType,
   onChangePrice,
}) {
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
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '0.625rem',
   // width: '100%',
}))
