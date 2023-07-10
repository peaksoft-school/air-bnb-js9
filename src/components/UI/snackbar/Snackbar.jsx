import React from 'react'
import { styled } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function ShowSnackbar({ message, additionalMessage, severity }) {
   toast[severity](
      <StyledCustomToast>
         <h3>{message}</h3>
         <p>{additionalMessage}</p>
      </StyledCustomToast>
   )

   return <StyledToastContainer severity={severity} />
}

const StyledToastContainer = styled(ToastContainer)(({ severity }) => ({
   paddingRight: '31.25rem',
   '& .Toastify__toast': {
      backgroundColor: severity === 'success' ? '#F0FFF1' : '#FFF1F0',
      width: '31.25rem',
      height: '6.25rem',
   },
}))

const StyledCustomToast = styled('div')(() => ({
   h3: {
      color: '#000',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
   p: {
      color: ' var(--tertiary-dark-gray, #646464)',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
   },
}))
