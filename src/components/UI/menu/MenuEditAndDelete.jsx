import React, { useState } from 'react'
import { styled } from '@mui/material'
import { ReactComponent as IconMenu } from '../../../assets/icons/IconMenu.svg'

export const MenuEditAndDelete = (props) => {
   const { children } = props

   const [open, setOpen] = useState(false)

   function openHandler() {
      setOpen((prev) => !prev)
   }

   return (
      <div>
         <Backdrop onClick={() => openHandler()} />
         <Card>
            <IconMenu type="submit" onClick={() => openHandler()} />
            {open && <CardEditAndDelete>{children}</CardEditAndDelete>}
         </Card>
      </div>
   )
}
const Card = styled('div')({
   display: 'flex',
   margin: '40px',
})

const CardEditAndDelete = styled('div')(() => ({
   width: '11.25rem',
   height: ' 5.5rem',
   borderRadius: '0.125rem',
   border: ' 1px solid var(--tertiary-light-gray, #C4C4C4)',
   background: '#FFF',
   padding: '1rem 0rem',
   zIndex: 999,

   h3: {
      color: '#5D5D5D',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      padding: '0.25rem 0rem 0.25rem 1.25rem',
      '&:hover': {
         background: 'var(--tertiary-the-lightest-gray, #F3F3F3)',
      },
      '&:active': {
         background: 'var(--tertiary-the-lightest-gray, #e8e7e7)',
      },
   },
}))
const Backdrop = styled('div')(() => ({
   width: '100%',
   height: '100%',
   position: 'absolute',
   top: '0',
}))
