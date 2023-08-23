import { TextField, styled } from '@mui/material'
import React, { forwardRef } from 'react'

export const TextArea = forwardRef(
   ({ type, placeholder, onChange, value, ...props }, ref) => {
      return (
         <StyledTextArea
            type={type}
            placeholder={placeholder || 'введите что-нибудь'}
            ref={ref}
            value={value}
            onChange={onChange}
            multiline
            rows={4}
            {...props}
         />
      )
   }
)

const StyledTextArea = styled(TextField)((...props) => ({
   width: props.width || '100%',
   height: props.height || '10%',
   marginBottom: props.marginBottom || '0',
   borderRadius: props.borderRadius || '0',
   border: props.border || '0',
   padding: props.padding || '0',
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
