import React from 'react'
import { Backdrop, Popover, styled } from '@mui/material'

export function MeatBalls({
   children,
   open,
   close,
   anchorEl,
   id,
   propsVertical,
   propsHorizontal,
   ...style
}) {
   return (
      <StyledBackdrop open={open} onClick={close}>
         <StyledPopover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={close}
            anchorOrigin={{
               vertical: propsVertical,
               horizontal: propsHorizontal,
            }}
            {...style}
         >
            {children}
         </StyledPopover>
      </StyledBackdrop>
   )
}
const StyledBackdrop = styled(Backdrop)(() => ({
   width: '100%',
   color: '#fff',
   background: 'rgba(0,0,0,0.0)',
   zIndex: 1,
}))
const StyledPopover = styled(Popover)((props) => ({
   '& .MuiPaper-root': {
      width: props.width || '10%',
      height: props.height || '9%',
      margin: props.margin || '0px',
      borderRadius: '0.125rem',
      background: ' #FFF',
      border: ' 1px solid var(--tertiary-light-gray, #C4C4C4)',
      boxShadow: 'none',
      paddingTop: '6px',
   },
}))
