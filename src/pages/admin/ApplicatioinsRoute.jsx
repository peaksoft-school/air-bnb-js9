import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
   deleteAdminApplication,
   postAcceptApplications,
   postRejectApplications,
} from '../../store/admin/application/ApplicationThunk'
import { toastSnackbar } from '../../components/UI/snackbar/Snackbar'
import { AnnouncementAdminPage } from './AnnouncementAdminPage'
import { Applications } from './applications/Applications'
import { AllHousing } from './all-housing/AllHousing'

export function ApplicatioinsRoute({ booleanPage }) {
   const [currentPage, setCurrentPage] = useState(1)
   const [currentSize, setCurrenSize] = useState(18)
   const [title, setTitle] = useState('')
   const { toastType } = toastSnackbar()
   const dispatch = useDispatch()
   const params = useParams()
   console.log(params, 'params')

   const acceptHandler = (id) => {
      const object = {
         id,
         toastType,
         status: 'accept',
         current: {
            currentPage,
            currentSize,
         },
      }
      dispatch(postAcceptApplications(object))
   }

   const rejectedHandler = (id) => {
      const object = {
         toastType,
         reject: {
            status: 'reject',
            title,
            id,
         },
         current: {
            currentPage,
            currentSize,
         },
      }

      dispatch(postRejectApplications(object))
      setTitle('')
   }
   const removeCard = (id) => {
      const remove = {
         id,
         toastType,
         current: {
            currentPage,
            currentSize,
         },
      }
      dispatch(deleteAdminApplication(remove))
   }

   return (
      (booleanPage === 'applications' && (
         <Applications
            title={title}
            setTitle={setTitle}
            removeCard={removeCard}
            currentPage={currentPage}
            currentSize={currentSize}
            setCurrenSize={setCurrenSize}
            acceptHandler={acceptHandler}
            setCurrentPage={setCurrentPage}
            rejectedHandler={rejectedHandler}
         />
      )) ||
      (booleanPage === 'announcement' && (
         <AnnouncementAdminPage
            roles="admin"
            title={title}
            setTitle={setTitle}
            pages="application"
            acceptHandler={acceptHandler}
            rejectedHandler={rejectedHandler}
         />
      )) ||
      (booleanPage === 'all-housing' && <AllHousing removeCard={removeCard} />)
   )
}
