import { TextField, styled } from '@mui/material'
import React, { forwardRef } from 'react'

export const Input = forwardRef(
   ({ type, placeholder, helperText, ...props }, ref) => {
      return (
         <div>
            <StyledInput
               type={type}
               placeholder={placeholder || 'введите что-нибудь'}
               ref={ref}
               {...props}
               error
               helperText={helperText || 'Incorrect entry.'}
            />
         </div>
      )
   }
)

const StyledInput = styled(TextField)((props) => ({
   width: props.width || '100%',
   height: props.height || '37px',
   padding: props.padding || '10px, 8px, 10px, 16px',

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
