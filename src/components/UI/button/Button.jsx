import { Button as ReusableButton, styled } from '@mui/material'

export function Button({
   type,
   onClick,
   disabled,
   children,
   hovercolor,
   hoverbgcolor,
   variant = 'outlined',
   ...props
}) {
   return (
      <ButtonStyled
         disabled={disabled}
         type={type}
         onClick={onClick}
         variant={variant}
         hoverbgcolor={hoverbgcolor}
         hovercolor={hovercolor}
         props={props}
         // {...props}
      >
         {children}
      </ButtonStyled>
   )
}

const ButtonStyled = styled(ReusableButton)(
   ({ variant, props, hoverbgcolor, hovercolor }) => {
      if (variant === 'contained') {
         return {
            '&.MuiButtonBase-root': {
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               gap: '10px',
               width: ` ${props.width}`,
               height: `${props.height}`,
               backgroundColor: `${props.bgColor}`,
               color: `${props.color}`,
               borderRadius: `${props.borderRadius}`,
               marginTop: `${props.marginTop}`,
               marginLeft: `${props.marginLeft}`,
               padding: `${props.padding}`,
               fontSize: `${props.fontSize}`,
               fontWeight: `${props.fontWeight}`,
               border: `${props.border}` || 'none',

               '&:hover': {
                  background: hoverbgcolor || '#BB7200',
                  color: hovercolor || '#fff',
               },
               '&:active': {
                  background: props.bgColor || '#F2B75B',
               },
               '&:disabled': {
                  background:
                     props.bgColor || ' var(--tertiary-light-gray, #C4C4C4)',
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
   }
)
