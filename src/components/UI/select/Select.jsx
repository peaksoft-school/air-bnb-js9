import React, { useState } from 'react'
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select as MuiSelect,
   styled,
} from '@mui/material'

export function Select({ data, onChange, labelName, ...props }) {
   const [selectedValue, setSelectedValue] = useState('')

   const handleFilterChange = (event) => {
      setSelectedValue(event.target.value)
      onChange(event.target.value)
   }

   return (
      <div>
         <StyledFormControl sx={{ m: 1, minWidth: 271 }} {...props}>
            <InputLabel id="filter-label" style={{ color: 'black' }}>
               {labelName}:
            </InputLabel>
            <MuiSelect
               labelId="filter-label"
               value={selectedValue}
               onChange={handleFilterChange}
               label="hello"
            >
               <MenuItem value="">All</MenuItem>
               {data?.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                     {item.name}
                  </MenuItem>
               ))}
            </MuiSelect>
         </StyledFormControl>
      </div>
   )
}

const StyledFormControl = styled(FormControl)((props) => ({
   width: props.width || '16.9375rem',
   height: props.height || '3.5625rem',

   '&  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray',
   },
   '&:hover': {
      backgroundColor: '#F3F3F3',
   },
}))
