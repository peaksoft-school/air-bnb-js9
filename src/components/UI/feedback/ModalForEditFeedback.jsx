/* eslint-disable consistent-return */
import React, { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Upload } from '../upload-img/Upload'
import Modal from '../modal/Modal'
import { TextArea } from '../textarea/TextArea'
import { Button } from '../button/Button'
import { putFeedbackById } from '../../../api/feedbackService'
import { feedbackGetByIdRequest } from '../../../store/feedback/feedbackThunk'
import { toastSnackbar } from '../snackbar/Snackbar'

export function ModalForEditFeedback({
   openModal,
   setOpenModal,
   feedbackComment,
   feedbackImages,
   id,
}) {
   const [usersFeedback, setUsersFeedback] = useState(feedbackComment)
   const [fileNames, setFileNames] = useState([feedbackImages])
   const { toastType } = toastSnackbar()

   const { images } = useSelector((state) => state.uploadImg)

   const dispatch = useDispatch()

   const editFeedbackById = async (data) => {
      try {
         const response = await putFeedbackById(id, data)
         toastType('success', 'Successfully updated')
         dispatch(feedbackGetByIdRequest())

         return response.data
      } catch (error) {
         toastType('error', 'ERROR!')
      }
   }

   const submitHandler = (e) => {
      e.preventDefault()

      const feedback = {
         comment: usersFeedback,
         images,
      }
      editFeedbackById(feedback)

      setUsersFeedback('')
      setFileNames([])
   }

   const openModalHandler = () => {
      setOpenModal((prev) => !prev)
   }
   return (
      <div>
         {openModal && (
            <Modal open={openModal} onClose={openModalHandler}>
               <Container onSubmit={submitHandler}>
                  <StyledH3>EDIT FEEDBACK</StyledH3>
                  <UploadImgDiv>
                     <Upload
                        fileNames={fileNames}
                        setFileNames={setFileNames}
                     />
                     <div
                        style={{
                           display: 'flex',
                           flexDirection: 'column',
                           gap: '0.5rem',
                           width: '22rem',
                        }}
                     >
                        <StyledP>Add photos to the review</StyledP>
                        <StyledPtag>
                           it will become more noticeable and even more useful.
                           You can upload up to 4 photos.
                        </StyledPtag>
                     </div>
                  </UploadImgDiv>

                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        alignItems: 'flex-start',
                     }}
                  >
                     <StyledPtag>FeedBack</StyledPtag>
                     <TextArea
                        value={usersFeedback}
                        onChange={(e) => setUsersFeedback(e.target.value)}
                        placeholder="Share your impressions about this place"
                     />

                     <div
                        style={{
                           width: '100%',
                           marginTop: '1.38rem',
                           display: 'flex',
                           justifyContent: 'end',
                           gap: '0.5rem',
                        }}
                     >
                        <Button
                           onClick={openModalHandler}
                           variant="outlined"
                           width="9.35rem"
                        >
                           Cancel
                        </Button>
                        <Button
                           variant="contained"
                           width="12.25rem"
                           type="submit"
                           bgColor="#DD8A08"
                           color="white"
                        >
                           Public
                        </Button>
                     </div>
                  </div>
               </Container>
            </Modal>
         )}
      </div>
   )
}

const Container = styled('form')(() => ({
   width: '45rem',
   padding: '1.56rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '1.37rem',
   background: 'white',
   borderRadius: '1rem',
}))

const StyledH3 = styled('p')(() => ({
   color: 'var(--primary-black, #363636)',
   fontFamily: 'Inter',
   fontWeight: '500',
   fontSize: '1.125rem',
   display: 'flex',
   justifyContent: 'center',
}))

const UploadImgDiv = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '1.25rem',
}))

const StyledP = styled('p')(() => ({
   color: '#266BD3',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: '500',
}))

const StyledPtag = styled('p')(() => ({
   color: 'var(--tertiary-middle-gray, #828282)',
   fontFamily: 'Inter',
   fontSize: '0.875rem',
   fontWeight: '400',
}))
