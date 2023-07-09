import React from 'react'
import { styled } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ShowSnackbar = ({ message, additionalMessage, severity }) => {
   toast[severity](
      <StyledCustomToast severity={severity}>
         <h3>{message}</h3>
         <p>{additionalMessage}</p>
      </StyledCustomToast>
   )

   return <StyledToastContainer severity={severity} />
}

const StyledToastContainer = styled(ToastContainer)(({ severity }) => ({
   paddingRight: '510px',
   '& .Toastify__toast': {
      backgroundColor: severity === 'success' ? '#F0FFF1' : '#FFF1F0',
      width: '500px',
      height: '100px',
   },
}))

const StyledCustomToast = styled('div')(() => ({
   h3: {
      color: '#000',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
   p: {
      color: ' var(--tertiary-dark-gray, #646464)',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
   },
}))
