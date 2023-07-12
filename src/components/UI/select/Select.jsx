import React, { useState } from 'react'
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select as MuiSelect,
   styled,
} from '@mui/material'

export function Select({ data, onChange, size, labelName, ...props }) {
   const [selectedValue, setSelectedValue] = useState('')

   const handleFilterChange = (e) => {
      setSelectedValue(e.target.value)
      onChange(
         e.target.value === 'all' ? data.map((item) => item.id) : e.target.value
      )
   }

   return (
      <StyledFormControl size={size} sx={{ m: 1, minWidth: 271 }} {...props}>
         <InputLabel id="filter-label" style={{ color: 'black' }}>
            {labelName}
         </InputLabel>
         <MuiSelect
            labelId="filter-label"
            value={selectedValue}
            onChange={handleFilterChange}
            displayEmpty
            label={labelName}
         >
            <MenuItem value="all">All</MenuItem>
            {data?.map((item) => (
               <MenuItem key={item.id} value={item.id}>
                  {item.name}
               </MenuItem>
            ))}
         </MuiSelect>
      </StyledFormControl>
   )
}

const StyledFormControl = styled(FormControl)((props) => ({
   width: props.width || '18rem',
   height: props.height || '3.5625rem',

   '&  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray',
   },
   '&:hover': {
      backgroundColor: '#F3F3F3',
   },
}))
