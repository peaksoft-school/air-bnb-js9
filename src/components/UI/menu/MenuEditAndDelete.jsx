import React from 'react'
import { styled } from '@mui/material'
import { ReactComponent as IconMenu } from '../../../assets/icons/IconMenu.svg'
import { SelectionIcon } from '../../../assets/icons/index'

export function MenuEditAndDelete(props) {
   const { children, open, openHandler, state, ...style } = props

   return (
      <Card>
         {state ? (
            <SelectionIcon type="submit" onClick={openHandler} />
         ) : (
            <IconMenu type="submit" onClick={openHandler} />
         )}
         {open && <CardEditAndDelete {...style}>{children}</CardEditAndDelete>}
      </Card>
   )
}
const Card = styled('div')({
   display: 'flex',
})

const CardEditAndDelete = styled('div')((props) => ({
   minWidth: props.minWidth || '10%',
   minHeight: props.minHeight || '9%',
   borderRadius: '0.125rem',
   border: ' 1px solid var(--tertiary-light-gray, #C4C4C4)',
   background: '#FFF',
   padding: props.padding || '1rem 0rem',
   zIndex: 999,
   position: 'absolute',
   right: props.right || '10px',
   top: props.top || '10px',

   'h2,h3,h4,h5,h6,p': {
      color: '#5D5D5D',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
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
