import { Button as ReusableButton, styled } from '@mui/material'

export function Button({ children, variant, disabled, onClick, ...props }) {
   return (
      <ButtonStyled
         disabled={disabled}
         onClick={onClick}
         variant={variant}
         props={props}
      >
         {children}
      </ButtonStyled>
   )
}

const ButtonStyled = styled(ReusableButton)(({ variant, props }) => {
   if (variant === 'contained') {
      return {
         '&.MuiButtonBase-root': {
            display: 'flex',
            width: `${props.width}`,

            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '2px',
            gap: '10px',
            background: '#DD8A08',

            '&:hover': {
               background: '#BB7200',
            },
            '&:active': {
               background: '#F2B75B',
            },
            '&:disabled': {
               background: ' var(--tertiary-light-gray, #C4C4C4)',
            },
         },
      }
   }
   if (variant === 'outlined') {
      return {
         '&.MuiButtonBase-root': {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            background: '#fff',
            color: ' #000',
            borderRadius: '8px',
            border: '1px solid var(--tertiary-light-gray, #C4C4C4)',
         },
         '&:hover': {
            border: ' 1px solid var(--tertiary-middle-gray, #828282)',
         },
         '&:active': {
            borderRadius: '8px',
            border: '1px solid var(--tertiary-middle-gray, #828282)',
            background: ' rgba(196, 196, 196, 0.20)',
         },
         '&:disabled': {
            border: '1px solid var(--tertiary-middle-gray, #C4C4C4   )',
            background: 'var(--tertiary-light-gray, #C4C4C4)',
         },
      }
   }
   return {}
})
