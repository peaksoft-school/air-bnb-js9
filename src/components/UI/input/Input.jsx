import { TextField, styled } from '@mui/material'
import React, { forwardRef, useState } from 'react'

export const Input = forwardRef(
   (
      { type, size, label, placeholder, helperText, validate, ...props },
      ref
   ) => {
      const [value, setValue] = useState('')
      const [error, setError] = useState('')

      const handleChange = (event) => {
         setValue(event.target.value)
         setError(validate(event.target.value))
      }
      return (
         <StyledInput
            type={type}
            placeholder={placeholder || 'введите что-нибудь'}
            ref={ref}
            value={value}
            size={size}
            label={label}
            error={error}
            helperText={error}
            onChange={handleChange}
            {...props}
         />
      )
   }
)

const StyledInput = styled(TextField)(({ barsbek, width }) => {
   if (barsbek === 'nekrash') {
      return {
         width: '100%',
         backgroundColor: '#fff',

         '& .MuiOutlinedInput-input': {
            borderRadius: '2px',
         },
         '& .MuiOutlinedInput-root': {
            '& fieldset': {
               borderColor: 'gray',
               border: 'none',
            },
            '&:hover fieldset': {
               border: 'none',
            },
         },
         '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
               borderColor: 'gray',
               border: 'none',
            },
      }
   }
   if (barsbek === 'krash') {
      return {
         width: width || '100%',
         backgroundColor: '#fff',

         '& .MuiOutlinedInput-input': {
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
         '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
               borderColor: 'gray',
            },
      }
   }
   return {}
})
