import { TextField, styled } from '@mui/material'
import React, { forwardRef } from 'react'

export const Input = forwardRef(
   (
      {
         type,
         size,
         label,
         placeholder,
         helperText,
         barsbek = 'krash',
         ...props
      },
      ref
   ) => {
      return (
         <StyledInput
            type={type}
            placeholder={placeholder || 'введите что-нибудь'}
            ref={ref}
            size={size}
            helperText={helperText || ''}
            label={label}
            barsbek={barsbek}
            props={props}
         />
      )
   }
)

const StyledInput = styled(TextField)(({ props, barsbek }) => {
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
         width: `${props.width}` || '100%',
         height: `${props.height}` || '37px',
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
