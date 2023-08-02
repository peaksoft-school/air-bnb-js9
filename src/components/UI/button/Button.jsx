import { Button as ReusableButton, styled } from '@mui/material'

export function Button({
   children,
   variant = 'outlined',
   disabled,
   type,
   onClick,
   ...props
}) {
   return (
      <ButtonStyled
         disabled={disabled}
         type={type}
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
            width: ` ${props.width}`,
            height: `${props.height}`,
            backgroundColor: `${props.bgColor}`,
            color: `${props.color}`,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: `${props.borderRadius}`,
            gap: '10px',

            '&:hover': {
               background: props.background || '#BB7200',
            },
            '&:active': {
               background: props.background || '#F2B75B',
            },
            '&:disabled': {
               background:
                  props.background || ' var(--tertiary-light-gray, #C4C4C4)',
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
            color: props.color || ' #000',
            borderRadius: '8px',
            border: '1px solid var(--tertiary-light-gray, #C4C4C4)',
            width: `${props.width}`,
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
