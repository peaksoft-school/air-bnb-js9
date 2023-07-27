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
   width: props.width || '29.625rem',
   height: props.height || '16.1875rem',
   padding: props.padding || '1.56rem 1.87rem',
   borderRadius: props.borderRadius || '0.125rem',
   border: props.border || 'none',
   backgroundColor: props.backgroundColor || '#fff',
   margin: '0rem 0rem 15rem 0rem',
}))
