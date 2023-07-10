import { TextField, styled } from '@mui/material'
import React, { forwardRef } from 'react'

export const Input = forwardRef(
   ({ type, size, placeholder, helperText, ...props }, ref) => {
      return (
         <StyledInput
            type={type}
            placeholder={placeholder || 'введите что-нибудь'}
            ref={ref}
            {...props}
            size={size}
            error
            helperText={helperText || ''}
         />
      )
   }
)

const StyledInput = styled(TextField)((props) => ({
   width: props.width || '100%',
   height: props.height || '37px',
   padding: props.padding || ' 0px 0px 0px 0px;',
   '& .MuiOutlinedInput-input': {
      paddingLeft: props.paddingLeft || '3rem',
      borderRadius: '2px',
   },
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: 'gray',
      },
      '&:hover fieldset': {
         border: '2px solid gray',
      },
   },
   '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray',
   },
}))
