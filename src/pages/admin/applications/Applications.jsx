import { styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminCards } from '../../../components/UI/cards/admin/AdminCards'
import { Loading } from '../../../components/UI/loading/Loading'
import { Paginations } from '../../../components/UI/pagination/Pagination'
import { getAdminApplication } from '../../../store/admin/application/ApplicationThunk'

export function Applications({
   rejectedHandler,
   setCurrentPage,
   acceptHandler,
   setCurrenSize,
   currentPage,
   currentSize,
   removeCard,
   setTitle,
   title,
}) {
   const { applications, loading } = useSelector((state) => state.admin)

   const dispatch = useDispatch()

   useEffect(() => {
      const current = {
         currentPage,
         currentSize,
      }
      dispatch(getAdminApplication(current))
      setCurrenSize(18)
   }, [currentPage])

   const changeHandler = (e) => {
      setTitle(e.target.value)
   }

   const pagePagination = (value) => {
      setCurrentPage(value)
   }

   const lengthh = applications?.length <= 6 ? '88%' : 'auto'

   return (
      <Container lengthh={lengthh}>
         <>
            {' '}
            <StyleTypography color="text.primary">application</StyleTypography>
            <AdminCards
               data={applications}
               title={title}
               removeCard={removeCard}
               imagesClick="click"
               meatballs="application"
               acceptHandler={acceptHandler}
               changeHandler={changeHandler}
               rejectedHandler={rejectedHandler}
            />
            {loading && <Loading />}
            <ContainerPagination>
               <Paginations count={10} pages={pagePagination} />
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
