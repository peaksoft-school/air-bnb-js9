import { Box, Modal as MuiModal, styled } from '@mui/material'
import React from 'react'

export default function Modal({ children, open, onClose, ...style }) {
   return (
      <StyledMuiModal open={open} onClose={onClose}>
         <Box {...style}>{children}</Box>
      </StyledMuiModal>
   )
}

const StyledMuiModal = styled(MuiModal)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))
<<<<<<< HEAD
const StyledBox = styled(Box)((props) => ({
   width: props.width || '29.625rem',
   height: props.height || '16.1875rem',
   padding: props.padding || '1.56rem 1.87rem',
   borderRadius: props.borderRadius || '0.125rem',
   border: props.border || 'none',
   backgroundColor: props.backgroundColor || '#fff',
   margin: '0rem 0rem 15rem 0rem',
}))
=======
>>>>>>> d84f2e8933661f45c0667041d02b1f1456a5d131
