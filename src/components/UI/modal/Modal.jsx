import { Box, Modal as MuiModal, styled } from '@mui/material'
import React from 'react'

export default function Modal({ children, open, onClose, ...style }) {
   return (
      <StyledMuiModal open={open} onClose={onClose}>
         <StyledBox {...style}>{children}</StyledBox>
      </StyledMuiModal>
   )
}

const StyledMuiModal = styled(MuiModal)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))

const StyledBox = styled(Box)((props) => ({
   backgroundColor: 'white',
   padding: '1.875rem',
   borderRadius: '0.25rem',
   width: props.width || '100%',
}))
