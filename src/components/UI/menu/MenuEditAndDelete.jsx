import React, { useState } from 'react'
import { styled } from '@mui/material'
import { ReactComponent as IconMenu } from '../../../assets/icons/IconMenu.svg'

export const MenuEditAndDelete = () => {
   const [open, setOpen] = useState(false)

   function openHandler() {
      setOpen((prev) => !prev)
   }

   return (
      <div>
         <Card>
            <IconMenu type="submit" onClick={() => openHandler()} />
            {open && (
               <CardEditAndDelete>
                  <h3>edit</h3>
                  <h3>delete</h3>
               </CardEditAndDelete>
            )}
         </Card>
      </div>
   )
}
const Card = styled('div')({
   display: 'flex',
   margin: '40px',
})

const CardEditAndDelete = styled('div')(() => ({
   width: '180px',
   height: '88px',
   borderRadius: '2px',
   border: ' 1px solid var(--tertiary-light-gray, #C4C4C4)',
   background: '#FFF',
   padding: '16px 0px',

   h3: {
      color: '#5D5D5D',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      padding: '4px 0px 4px 20px',
      '&:hover': {
         background: 'var(--tertiary-the-lightest-gray, #F3F3F3)',
      },
      '&:active': {
         background: 'var(--tertiary-the-lightest-gray, #e8e7e7)',
      },
   },
}))
