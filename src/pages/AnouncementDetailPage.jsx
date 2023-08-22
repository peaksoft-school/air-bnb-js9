import React from 'react'
import { Breadcrumbs, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import { Header } from '../layout/Header/Header'

export default function AnouncementDetailPage() {
   return (
      <>
         <Header />
         <Container>
            <Breadcrumbs aria-label="breadcrumb">
               <Link underline="hover" color="inherit" href="/">
                  Main
               </Link>
               <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
               >
                  Naryn
               </Link>
               <Typography color="text.primary">Hotel</Typography>
            </Breadcrumbs>
         </Container>
      </>
   )
}

// const BreadcrumbsBlock = styled('div')(() => ({
//    border: '1px solid black',
//    marginLeft: '100px',
// }))

const Container = styled('div')(() => ({
   margin: '0 100px',
}))
