import { Box, Modal as MuiModal, styled } from '@mui/material'
import React from 'react'

export default function Modal({ children, open, onClose, width, ...style }) {
   return (
      <StyledMuiModal open={open} onClose={onClose}>
         <StyledBox width={width} {...style}>
            {children}
         </StyledBox>
      </StyledMuiModal>
   )
}

const StyledMuiModal = styled(MuiModal)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))
const StyledBox = styled(Box)((props) => ({
   width: props.width || '50%',
   height: props.width || '50%',
   backgroundColor: '#fff',
}))
