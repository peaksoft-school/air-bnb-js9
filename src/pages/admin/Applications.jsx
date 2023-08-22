import { styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { AdminCards } from '../../components/UI/cards/AdminCards'
import { Paginations } from '../../components/UI/pagination/Pagination'
import {
   deleteAdminApplication,
   getAdminApplication,
   getApplicationById,
} from '../../store/admin-application/ApplicationThunk'

export function Applications({
   rejectedHandler,
   acceptHandler,
   setCurrentPage,
   setCurrenSize,
   currentPage,
   currentSize,
   setTitle,
   title,
}) {
   const { data } = useSelector((state) => state.application)
   const [toggle, setToggle] = useState(false)

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

   const toggleHandler = (id) => {
      setToggle((prev) => !prev)
      dispatch(getApplicationById(id))
   }

   const removeCard = (id) => {
      dispatch(deleteAdminApplication(id))

      const current = {
         currentPage,
         currentSize,
      }
      dispatch(getAdminApplication(current))
   }

   const pagePagination = (value) => {
      setCurrentPage(value)
   }

   return (
      <Container>
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
                  removeCard={removeCard}
                  toggleHandler={toggleHandler}
                  acceptHandler={acceptHandler}
                  changeHandler={changeHandler}
                  rejectedHandler={rejectedHandler}
               />
               <ContainerPagination>
                  <Paginations count={10} pages={pagePagination} />
               </ContainerPagination>
            </>
         )}
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
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
