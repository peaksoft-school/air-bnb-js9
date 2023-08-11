import { Breadcrumbs, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Cards } from '../../components/UI/cards/Cards'
import { Paginations } from '../../components/UI/pagination/Pagination'
import {
   deleteAdminApplication,
   getAdminApplication,
   postAcceptApplications,
   postRejectApplications,
} from '../../store/admin-application/ApplicationThunk'

export function Applications() {
   const { data } = useSelector((state) => state.application)
   const [toggle, setToggle] = useState(false)
   const [title, setTitle] = useState('')
   const [page, setPage] = useState(1)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAdminApplication(page))
   }, [page])

   const changeHandler = (e) => {
      setTitle(e.target.value)
   }

   const toggleHandler = () => {
      setToggle((prev) => !prev)
   }

   const removeCard = async (id) => {
      dispatch(deleteAdminApplication(id))
   }

   const rejectedHandler = (id) => {
      const object = {
         title,
         id,
      }
      dispatch(postRejectApplications(object))
      setTitle('')
   }

   const accerptHandler = (id) => {
      dispatch(postAcceptApplications(id))
   }

   const pagePagination = (value) => {
      setPage(value)
   }

   return (
      <Container>
         <Breadcrumbs aria-label="breadcrumb">
            <StyleTypography color="text.primary">application</StyleTypography>
         </Breadcrumbs>
         {toggle ? (
            <Outlet />
         ) : (
            <Cards
               data={data}
               toggleHandler={toggleHandler}
               removeCard={removeCard}
               rejectedHandler={rejectedHandler}
               title={title}
               changeHandler={changeHandler}
               accerptHandler={accerptHandler}
               page="admin"
            />
         )}
         <ContainerPagination>
            <Paginations count={10} pages={pagePagination} />
         </ContainerPagination>
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
   height: '100vh',
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
   margin: '3.13rem 0rem 0rem 9.375rem',
}))
