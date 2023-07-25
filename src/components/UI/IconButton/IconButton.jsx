import React from 'react'
import { IconButton, styled } from '@mui/material'
import { ClickHeart2, Heart1 } from '../../../assets/icons'

export function ButtonIcon({ open, toggle, variant, ...props }) {
   return (
      <IconButtonStyle onDoubleClick={toggle} variant={variant} props={props}>
         {open ? (
            <ClickHeart2 />
         ) : (
            <div>
               <Heart1 />
            </div>
         )}
      </IconButtonStyle>
   )
}

const IconButtonStyle = styled(IconButton)((props) => ({
   '&.MuiButtonBase-root': {
      display: 'flex',
      width: `${props.width}`,
      height: '27px',
      padding: '6px 8px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      flexShrink: '0',
      borderRadius: '2px',
      border: 'none',
   },
   '&:hover': {
      border: '1px solid #DD8A08',
      background: 'none',
   },
   '&:active': {
      border: '1px solid #DD8A08',
      background: 'none',
   },
}))