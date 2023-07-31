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
         height,
         error,
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
            {...props}
         />
      )
   }
)

const StyledInput = styled(TextField)(
   ({ barsbek, width, border, height, paddingBottom }) => {
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
<<<<<<< HEAD
            height: height || '2rem',
            paddingBottom: paddingBottom || '0',
            backgroundColor: '#fff',

            '& .MuiOutlinedInput-input': {
               borderRadius: '2px',
               '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                  '-webkit-appearance': 'none',
                  margin: 0,
               },
               '-moz-appearance': 'textfield', // Firefox
            },
            '& .MuiOutlinedInput-root': {
               '& fieldset': {
                  border: border || '1px solid',
                  borderColor: 'gray',
               },
               '&:hover fieldset': {
                  border: border || '2px solid gray',
=======
            backgroundColor: '#fff',
            height: height || '100px',
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
>>>>>>> 9def9ddf4ee511b819a74b1e0fb14fcf092c45ba
               },
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
               {
                  borderColor: 'gray',
               },
         }
      }
      return {}
   }
)
