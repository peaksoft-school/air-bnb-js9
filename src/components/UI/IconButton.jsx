import React, { useState } from 'react'
import { IconButton, styled } from '@mui/material'
import { ClickHeart2, Heart1 } from '../../assets/icons'

export const ButtonIcon = ({ variant, ...props }) => {
   const [icon, setIcon] = useState(false)
   const clikIconHandler = () => {
      setIcon(!icon)
   }
   return (
      <IconButtonStyle
         onClick={clikIconHandler}
         variant={variant}
         props={props}
      >
         {icon ? (
            <ClickHeart2 />
         ) : (
            <div>
               <Heart1 />
            </div>
         )}
      </IconButtonStyle>
   )
}

const IconButtonStyle = styled(IconButton)(() => ({
   '&.MuiButtonBase-root': {
      display: 'flex',
      width: '40px',
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
