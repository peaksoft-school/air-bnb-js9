import React from 'react'
import { styled } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const toastSnackbar = () => {
   const toastType = (severity, message, description) =>
      toast[severity](
         <>
            <Message>{message}</Message>
            <Description>{description}</Description>
         </>,
         {
            position: 'top-right',
            autoClose: false,
            closeOnClick: true,
            theme: 'colored',
         }
      )
   return { toastType }
}

export function Snackbar() {
   return <StyledToastContainer />
}

const StyledToastContainer = styled(ToastContainer)(() => ({
   textAlign: 'start',
   paddingRight: '30.25rem',

   '& .Toastify__toast--success': {
      background: '#eafbe7',

      '& .Toastify__close-button': {
         path: {
            fill: '#828282',
         },
      },

      '& .Toastify__toast-icon': {
         marginTop: '1rem',
         height: '8vh',
         svg: {
            display: 'none',
         },
      },
   },
   '& .Toastify__toast--error': {
      background: '#fff1f0',

      '& .Toastify__close-button': {
         path: {
            fill: '#828282',
         },
      },

      '& .Toastify__toast-icon': {
         marginTop: '1rem',
         height: '8vh',
         svg: {
            display: 'none',
         },
      },
   },

   '& .Toastify__toast': {
      width: '32vw',
      height: '6.25',
      path: {
         background: '#eafbe7',
      },
   },
}))

const Description = styled('h4')(() => ({
   color: 'var(--tertiary-dark-gray, #646464)',
   fontFamily: 'Inter',
   fontSize: ' 0.875rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: 'normal',
   marginTop: '10px',
}))

const Message = styled('p')(() => ({
   color: '#000',
   fontFamily: 'Inter',
   fontSize: ' 1rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
}))
