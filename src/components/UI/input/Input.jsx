/* eslint-disable no-unused-vars */
import { TextField, styled } from '@mui/material'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'

export const Input = forwardRef(
   (
      {
         type,
         size,
         label,
         name,
         placeholder,
         onChange,
         onClick,
         value,
         width,
         height,
         error,
         checked,
         defaultChecked,
         ...props
      },
      ref
   ) => {
      return (
         <StyledInput
            size={size}
            name={name}
            type={type}
            label={label}
            value={value}
            error={error}
            checked={checked}
            onChange={onChange}
            defaultChecked={defaultChecked}
            placeholder={placeholder || 'введите что-нибудь'}
            ref={ref}
            {...props}
         />
      )
   }
)

const StyledInput = styled(TextField)(({ barsbek, width, marginBottom }) => {
   if (barsbek === 'nekrash') {
      return {
         width: '100%',

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
         // height: height || '100px',
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
