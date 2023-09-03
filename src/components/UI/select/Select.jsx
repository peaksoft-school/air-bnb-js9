import React from 'react'
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select as MuiSelect,
   styled,
} from '@mui/material'

export function Select({
   data,
   onChange,
   labelName,
   register,
   value,
   error,
   ...props
}) {
   return (
      <StyledFormControl sx={{ m: 0, minWidth: 271 }} {...props}>
         <InputLabel id="filter-label" style={{ color: 'black' }}>
            {labelName}
         </InputLabel>
         <MuiSelect
            error={error}
            {...(register ? register('region') : {})}
            id="region"
            labelId="filter-label"
            onChange={onChange}
            displayEmpty
            label={labelName}
            value={value}
         >
            {/* <MenuItem value=" ">All</MenuItem> */}
            {data?.map((item) => (
               <MenuItem key={item.id} value={item.value}>
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
