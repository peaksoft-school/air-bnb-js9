import React from 'react'
import { Backdrop, Menu, styled } from '@mui/material'

export function MeatBalls({ children, open, close, ...style }) {
   return (
      <StyledBackdrop open={open} onClick={close}>
         <StyledMenu
            {...style}
            open={open}
            onClose={close}
            anchorOrigin={{
               vertical: 'center',
               horizontal: 'left',
            }}
         >
            {children}
         </StyledMenu>
      </StyledBackdrop>
   )
}
const StyledBackdrop = styled(Backdrop)(() => ({
   width: '100%',
   color: '#fff',
   background: 'rgba(0,0,0,0.0)',
   zIndex: 1,
}))
const StyledMenu = styled(Menu)((props) => ({
   '& .MuiPaper-root': {
      minWidth: props.minWidth || '10%',
      minHeight: props.minHeight || '9%',
      borderRadius: '0.125rem',
      background: ' #FFF',
      border: ' 1px solid var(--tertiary-light-gray, #C4C4C4)',
      boxShadow: 'none',
   },
}))
