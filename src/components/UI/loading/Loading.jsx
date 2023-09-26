import { styled } from '@mui/material'
import { useState } from 'react'

export function Loading() {
   const [color, setColor] = useState(false)
   const toggleColor = () => {
      setColor(!color)
   }
   return (
      <Container state={color}>
         <GIcons onClick={toggleColor}>
            <img
               src="data:image/png;base64,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"
               alt="#"
            />
         </GIcons>

         <span>a</span>
         <span>i</span>
         <span>r</span>
         <span>b</span>
         <span>n</span>
         <span>b</span>
      </Container>
   )
}
const Container = styled('div')((props) => ({
   width: '100%',
   height: ' 100%',
   display: 'flex',
   justifyContent: 'center',
   span: {
      opacity: 0,
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '2.25rem',
      color: props.state ? '#fff' : '#000',
      animation: ' appear 2s ease forwards infinite',
   },

   ' @keyframes appear': {
      from: {
         opacity: 0,
         transform: ' translateY(1.851851851vh) rotate(0)',
      },
      to: {
         opacity: 1,
         transform: 'translateY(0) rotate(360deg)',
      },
   },
   ' span:nth-of-type(2)': {
      animationDelay: '0.2s',
      marginLeft: ' 0.15625vw',
   },
   '  span:nth-of-type(3)': {
      animationDelay: '0.3s',
   },
   '   span:nth-of-type(4)': {
      animationDelay: '0.4s',
   },
   '  span:nth-of-type(5)': {
      animationDelay: ' 0.5s',
   },
   ' span:nth-of-type(6)': {
      animationDelay: '0.6s',
   },
   '   span:nth-of-type(7)': {
      animationDelay: ' 0.7s',
   },
}))
const GIcons = styled('div')(() => ({
   width: '2.9vw',
   height: ' 2.5vw',
   cursor: 'pointer',
   textAlign: 'center',
   animation: ' appear 2s ease forwards infinite',
   img: {
      width: '2.6vw',
      height: ' 2.5vw',
      borderRadius: '0.4rem',
   },
}))
