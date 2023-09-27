import React from 'react'
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select as MuiSelect,
   styled,
} from '@mui/material'

export function Select({
   all,
   data,
   state,
   error,
   toggle,
   register,
   onChange,
   labelName,
   value,
   defaultValue,
   placeholder,
   ...props
}) {
   return (
      <StyledFormControl sx={{ m: 0, minWidth: 271 }} {...props}>
         <StyledInputLabel id="filter-label" style={{ color: 'black' }}>
            <span>{labelName}</span>
         </StyledInputLabel>
         <MuiSelect
            // error={error}
            {...(register ? register('region') : {})}
            id="region"
            labelId="filter-label"
            onChange={onChange}
            displayEmpty
            label={labelName}
            value={value}
            defaultValue={defaultValue}
            onClick={toggle}
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

// const StyledFormControl = styled(FormControl)((props) => ({
//    width: props.width || '17rem',
//    height: props.height || '3.5625rem',
//    border: '1px solid #F3F3F3',

//    '&  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
//       // borderColor: 'red',
//       // border: '1px solid #F3F3F3',
//       // backgroundColor: 'red',
//       // border: 'none',
//       border: '1px solid #F3F3F3',
//    },
//    'css-1is9lq1-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
//       border: '2px solid #F3F3F3',
//    },
//    '&:hover': {
//       backgroundColor: '#F3F3F3',
//       border: 'none',
//    },
// }))
const StyledFormControl = styled(FormControl)((props) => ({
   width: props.width || '18rem',
   height: props.height || '3.5625rem',
   '&  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid gray',
   },
   '&:hover': {
      backgroundColor: '#F3F3F3',
   },
}))

const StyledInputLabel = styled(InputLabel)(() => ({
   width: '85%',
   display: 'flex',
   justifyContent: 'space-between',
}))
