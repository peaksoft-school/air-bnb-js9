import { OutlinedInput, styled } from '@mui/material'
import React from 'react'

export const Input = ({ placeholder, width, height, type }) => {
   return (
      <div>
         <StyledInput
            placeholder={placeholder || 'введите что-нибудь'}
            width={width}
            height={height}
            type={type || 'text'}
         />
      </div>
   )
}

const StyledInput = styled(OutlinedInput)((props) => ({
   width: props.width || '40%',
   height: props.height || '10%',
   '&.Mui-focused > .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray',
   },
}))
