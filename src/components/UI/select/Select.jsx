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
   state,
   error,
   toggle,
   register,
   onChange,
   labelName,
   value,
   region,
   ...props
}) {
   return (
      <StyledFormControl sx={{ m: 0, minWidth: 271 }} {...props}>
         <InputLabel id="filter-label" style={{ color: 'black' }}>
            {labelName}
         </InputLabel>
         <MuiSelect
            // error={error}
            {...(register ? register('region') : {})}
            id="region"
            labelId="filter-label"
            onChange={onChange}
            displayEmpty
            label={labelName}
            value={value}
            defaultValue={region}
            onClick={toggle}
         >
            <MenuItem value=" ">All</MenuItem>
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
   width: props.width || '17rem',
   height: props.height || '3.5625rem',
   border: '1px solid #F3F3F3',

   '&  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
      border: '1px solid #F3F3F3',
   },
   'css-1is9lq1-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
      border: '1px solid #F3F3F3',
   },
   '&:hover': {
      backgroundColor: '#F3F3F3',
      border: 'none',
   },
}))
