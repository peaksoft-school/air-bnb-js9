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
   ...props
}) {
   // let dynamicLabel = labelName
   // if (state === 'All') {
   //    dynamicLabel = ''
   // }
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
            onClick={toggle}
         >
            {data?.map((item) => {
               return (
                  <MenuItem key={item.id} value={item.name}>
                     {item.name || 'Default Label'}
                  </MenuItem>
               )
            })}
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
   'css-1is9lq1-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
      borderColor: 'gray',
   },
   '&:hover': {
      backgroundColor: '#F3F3F3',
      border: 'none',
   },
}))
