import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
   const [title, setTitle] = useState('')
   const { toastType } = toastSnackbar()
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const acceptHandler = (id) => {
      const object = {
         id,
         toastType,
         status: 'accept',
         currentPage,
         navigate,
      }
      dispatch(postAcceptApplications(object))
   }

   const rejectedHandler = (id) => {
      const object = {
         toastType,
         navigate,
         reject: {
            status: 'reject',
            title,
            id,
         },
         currentPage,
      }

      dispatch(postRejectApplications(object))
      setTitle('')
   }
   const removeCard = (id) => {
      const remove = {
         id,
         toastType,
         currentPage,
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
