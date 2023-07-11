import { Box, Modal as MuiModal, styled } from '@mui/material'
import React from 'react'

export default function Modal({ children, open, onClose }) {
   return (
      <StyledMuiModal open={open} onClose={onClose}>
         <StyledBox>{children}</StyledBox>
      </StyledMuiModal>
   )
}

const StyledMuiModal = styled(MuiModal)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))

const StyledBox = styled(Box)(() => ({
   position: 'absolute',
   width: '28.125rem',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   backgroundColor: 'white',
   padding: '1.875rem',
   borderRadius: '0.25rem',
}))
