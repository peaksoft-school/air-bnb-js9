import { TextField, styled } from '@mui/material'
import React, { forwardRef } from 'react'

export const TextArea = forwardRef(({ type, placeholder, ...props }, ref) => {
   return (
      <StyledTextArea
         type={type}
         placeholder={placeholder || 'введите что-нибудь'}
         ref={ref}
         multiline
         rows={4}
         {...props}
      />
   )
})

const StyledTextArea = styled(TextField)((props) => ({
   width: props.width || '100%',
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
