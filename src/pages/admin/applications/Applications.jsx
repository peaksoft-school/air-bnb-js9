import { styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { AdminCards } from '../../../components/UI/cards/admin/AdminCards'
import { Paginations } from '../../../components/UI/pagination/Pagination'
import {
   getAdminApplication,
   getAdminApplicationAll,
} from '../../../store/admin/application/ApplicationThunk'

export function Applications({
   rejectedHandler,
   setCurrentPage,
   acceptHandler,
   currentPage,
   removeCard,
   setTitle,
   title,
}) {
   const { applications, applicationsAll, loading } = useSelector(
      (state) => state.admin
   )
   console.log(applications, 'applications')

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAdminApplication(currentPage))
   }, [currentPage])

   useEffect(() => {
      dispatch(getAdminApplicationAll())
   }, [])

   const changeHandler = (e) => {
      setTitle(e.target.value)
   }
   const totalItems = applicationsAll?.length
   const totalPages = Math.ceil(totalItems / 18)

   const pagePagination = (value) => {
      setCurrentPage(value)
   }

   const lengthh = applications?.length <= 6 ? '88%' : 'auto'

   return (
      <Container lengthh={lengthh}>
         <>
            {' '}
            <StyleTypography color="text.primary">application</StyleTypography>
            {loading ? (
               <LoadingContainer>
                  <SyncLoader color="#DD8A08" size={15} />
               </LoadingContainer>
            ) : (
               <AdminCards
                  title={title}
                  toPath="false"
                  imagesClick="click"
                  data={applications}
                  meatballs="application"
                  removeCard={removeCard}
                  padding="1.81rem 2.25rem "
                  acceptHandler={acceptHandler}
                  changeHandler={changeHandler}
                  rejectedHandler={rejectedHandler}
               />
            )}
            <ContainerPagination>
               <Paginations count={totalPages} pages={pagePagination} />
            </ContainerPagination>
         </>
      </Container>
   )
}

const Container = styled('div')(({ lengthh }) => ({
   width: '100%',
   minHeight: lengthh,
   background: ' #F7F7F7',
   position: 'absolute',
   top: '5.1rem',
}))
const ContainerPagination = styled('div')(() => ({
   width: '100%',
   height: '10vh',
   display: 'flex',
   justifyContent: 'center',
}))
const StyleTypography = styled(Typography)(() => ({
   color: '#000',
   fontFamily: ' Inter',
   fontSize: ' 1.25rem',
   fontStyle: ' normal',
   fontWeight: 500,
   lineHeight: 'normal',
   textTransform: ' uppercase',
   margin: '3.13rem 0rem 0rem 2.25rem',
}))
const LoadingContainer = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '20vh',
}))
