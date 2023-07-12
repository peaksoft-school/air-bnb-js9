import { styled } from '@mui/material'
import { Select } from '../UI/select/Select'

const regions = [
   { id: 'option1', name: 'Batken' },
   { id: 'option2', name: 'Osh' },
   { id: 'option3', name: 'Jalal-abad' },
   { id: 'option4', name: 'Chui' },
   { id: 'option5', name: 'Naryn' },
   { id: 'option6', name: 'Talas' },
   { id: 'option7', name: 'Issyk-Kul' },
]
const popular = [
   { id: 'option8', name: 'popular' },
   { id: 'option9', name: 'un popular' },
]
const homeType = [
   { id: 'option10', name: 'Apartment' },
   { id: 'option11', name: 'House' },
]

const price = [
   { id: 'option12', name: 'Low to high' },
   { id: 'option13', name: 'High to low' },
]

export function FilterSelect() {
   const onChange = (selectedOption) => {
      console.log('Selected option:', selectedOption)
   }
   return (
      <Container>
         <div>
            <Select
               labelName="Sort by region:"
               data={regions}
               onChange={onChange}
            />
         </div>
         <div>
            <Select
               labelName="Sort by popularity:"
               data={popular}
               onChange={onChange}
            />
         </div>
         <div>
            <div>
               <Select
                  labelName="Filter by home type:"
                  data={homeType}
                  onChange={onChange}
               />
            </div>
            <div>
               <Select
                  labelName="Filter by price:"
                  data={price}
                  onChange={onChange}
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
