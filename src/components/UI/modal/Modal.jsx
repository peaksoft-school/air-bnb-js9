import { Box, Modal as MuiModal, styled } from '@mui/material'
import React from 'react'

export default function Modal({ children, open, onClose, width }) {
   return (
      <StyledMuiModal open={open} onClose={onClose}>
         <StyledBox width={width}>{children}</StyledBox>
      </StyledMuiModal>
   )
}

const StyledMuiModal = styled(MuiModal)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))

const StyledBox = styled(Box)((props) => ({
   padding: '1.875rem',
   borderRadius: '0.25rem',
   width: props.width || '100%',
   display: 'flex',
   justifyContent: 'center',
}))
