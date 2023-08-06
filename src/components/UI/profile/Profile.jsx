import { Avatar, styled } from '@mui/material'
import React from 'react'

export default function Profile({ data, logOut }) {
   return (
      <Container>
         <StyledAvatar
            sx={{ bgcolor: '#266BD3' }}
            alt="photo"
            src={data.photo && data.photo}
         >
            {data.photo || <p style={{ fontSize: '2.375rem' }}>{data.name}</p>}
         </StyledAvatar>

         <UserInfo>
            <NameAndContactBlock
               textAlign="right"
               width="4.375rem"
               height="8.125rem"
               color="var(--tertiary-dark-gray, #646464)"
            >
               <p>Name:</p>
               <p>Contact:</p>
               {logOut && <LogOut>Log out</LogOut>}
            </NameAndContactBlock>
            <NameAndContactBlock
               textAlign="left"
               color="var(--primary-black, #363636)"
            >
               <p>{data.name}</p>
               <p>{data.contact}</p>
            </NameAndContactBlock>
         </UserInfo>
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '34.4167vw',
   height: '20.9167%',
   borderRadius: '1rem',
   border: '0.0625rem solid var(--tertiary-light-gray, #c4c4c4)',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '.625rem',
   paddingTop: '2.37rem',
}))

const StyledAvatar = styled(Avatar)(() => ({
   width: '5.5625rem',
   height: '5.5625rem',
   marginTop: '2.37rem',
}))

const UserInfo = styled('div')(() => ({
   marginTop: '1.88rem',
   marginBottom: '2.37rem',

   display: 'flex',
   gap: '1.25rem',
}))

const NameAndContactBlock = styled('div')((props) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.94rem',

   width: props.width,
   height: props.height,
   textAlign: props.textAlign,
   ' & > p': {
      color: props.color,
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
   },
}))

const LogOut = styled('button')(() => ({
   color: '#FF4B4B',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: 'normal',
   backgroundColor: 'white',
   border: 'none',
}))
