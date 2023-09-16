import { styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { AdminCards } from '../../components/UI/cards/AdminCards'
import { Paginations } from '../../components/UI/pagination/Pagination'
import { getAdminApplication } from '../../store/admin-application/ApplicationThunk'

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
   const { data, toggle } = useSelector((state) => state.application)
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

   const lengthh = data.length <= 6 ? '88%' : 'auto'

   return (
      <Container lengthh={lengthh}>
         {toggle ? (
            <Outlet />
         ) : (
            <>
               {' '}
               <StyleTypography color="text.primary">
                  application
               </StyleTypography>
               <AdminCards
                  data={data}
                  title={title}
                  image="click"
                  toPath="false"
                  removeCard={removeCard}
                  meatballs="application"
                  acceptHandler={acceptHandler}
                  changeHandler={changeHandler}
                  rejectedHandler={rejectedHandler}
                  padding="1.81rem 2.25rem"
               />
               <ContainerPagination>
                  <Paginations count={10} pages={pagePagination} />
               </ContainerPagination>
            </>
         )}
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
