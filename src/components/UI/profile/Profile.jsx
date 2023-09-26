import { Avatar, styled } from '@mui/material'
import React from 'react'

export function Profile({ data, logOut, roles, logout, ...props }) {
   return (
      <Container {...props} roles={roles}>
         <StyledAvatar
            sx={{ bgcolor: '#266BD3' }}
            alt="photo"
            src={data.photo && data.photo}
         >
            <p style={{ fontSize: '2.375rem' }}>
               {data.fullName && data.fullName.length > 0
                  ? data.fullName[0]
                  : ''}
            </p>
         </StyledAvatar>

         <UserInfo>
            <NameAndContactBlock
               textAlign="right"
               width="4.375rem"
               color="var(--tertiary-dark-gray, #646464)"
            >
               <p>Name:</p>
               <p>Contact:</p>
               {logout === 'yes' && <LogOut onClick={logOut}>Log out</LogOut>}
            </NameAndContactBlock>
            <NameAndContactBlock
               textAlign="left"
               color="var(--primary-black, #363636)"
            >
               <p style={{ fontWeight: '600' }}>{data.fullName}</p>
               <p style={{ fontWeight: '600' }}>{data.email}</p>
            </NameAndContactBlock>
         </UserInfo>
      </Container>
   )
}

const Container = styled('div')(({ roles }) => ({
   width: roles === 'user' ? ' 23.25rem' : '25.8125rem',
   height: roles === 'user' ? '17.8125rem' : '15.6875rem',
   padding:
      roles === 'user' ? '2.37rem 2.44rem 2.38rem 2.38rem' : '2.37rem 3.69rem ',
   borderRadius: '1rem',
   border: '0.0625rem solid var(--tertiary-light-gray, #c4c4c4)',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '.625rem',
   // paddingTop: props.paddingTop || '2.37rem',
   // paddingBottom: props.paddingBottom || '3rem',
}))

const StyledAvatar = styled(Avatar)(() => ({
   width: '5.5625rem',
   height: '5.5625rem',
   marginTop: '2.37rem',
}))

const UserInfo = styled('div')(() => ({
   marginTop: '1.88rem',
   display: 'flex',
   gap: '1.25rem',
}))

const NameAndContactBlock = styled('div')((props) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   gap: '0.94rem',
   cursor: 'pointer',
   width: props.width,
   height: props.height,
   textAlign: props.textAlign,
   ' & > p': {
      color: props.color,
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
}))

const LogOut = styled('button')(() => ({
   color: '#FF4B4B',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: 'normal',
   border: 'none',
   cursor: 'pointer',
   background: '#f7f7f7',
}))
