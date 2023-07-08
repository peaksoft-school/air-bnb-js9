import { OutlinedInput, styled } from '@mui/material'
import React, { forwardRef } from 'react'

export const Input = forwardRef(({ placeholder, width, height, type }, ref) => {
   return (
      <div>
         <StyledInput
            ref={ref}
            placeholder={placeholder || 'введите что-нибудь'}
            width={width}
            height={height}
            type={type || 'text'}
         />
      </div>
   )
})

const StyledInput = styled(OutlinedInput)((props) => ({
   width: props.width || '40%',
   height: props.height || '10%',
   '&.Mui-focused > .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray',
   },
}))
