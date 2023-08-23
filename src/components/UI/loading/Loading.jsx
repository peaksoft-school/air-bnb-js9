import { CircularProgress, styled } from '@mui/material'

export function Loading() {
   return (
      <Container>
         <CircularProgress style={{ marginTop: '-17rem' }} />
      </Container>
   )
}

const Container = styled('div')(() => ({
   position: 'fixed',
   top: '0%',
   padding: '40%',
   height: '100vh',
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   // alignItems: 'center',
   zIndex: '99009',
   backgroundColor: 'rgba(44, 40, 28, 0.75)',
}))
