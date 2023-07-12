import React from 'react'
import { styled } from '@mui/material'
import mainBackground from '../../assets/images/MainBackground.png'

export function MainPage() {
   return (
      <StyleMain
         style={{
            background: `url(${mainBackground})`,
            backgroundSize: 'cover',
         }}
      >
         hello
      </StyleMain>
   )
}

const StyleMain = styled.main`
   width: 100%;
   height: 337rem;
`
