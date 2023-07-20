import { Box, Modal as MuiModal, styled } from '@mui/material'
import React from 'react'

export default function Modal({ children, open, onClose, width }) {
   return (
      <StyledMuiModal open={open} onClose={onClose}>
         <Box width={width}>{children}</Box>
      </StyledMuiModal>
   )
}

const StyledMuiModal = styled(MuiModal)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))
