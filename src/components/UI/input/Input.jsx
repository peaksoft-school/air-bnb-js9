/* eslint-disable no-unused-vars */
import { TextField, styled } from '@mui/material'
import React, { forwardRef } from 'react'

export const Input = forwardRef(
   (
      {
         type,
         size,
         label,
         name,
         placeholder,
         onChange,
         value,
         width,
         error,
         checked,
         defaultChecked,
         ...props
      },
      ref
   ) => {
      return (
         <StyledInput
            type={type}
            placeholder={placeholder || 'введите что-нибудь'}
            ref={ref}
            value={value}
            size={size}
            label={label}
            onChange={onChange}
            name={name}
            error={error}
            checked={checked}
            defaultChecked={defaultChecked}
            {...props}
         />
      )
   }
)

const StyledInput = styled(TextField)(({ barsbek, width, marginBottom }) => {
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
         marginBottom: marginBottom || '0px',

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
