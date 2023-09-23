import React from 'react'
import { styled } from '@mui/material'
import { Button } from '../button/Button'
import Modal from '../modal/Modal'
import { TextArea } from '../textarea/TextArea'

export function ModalNameHotel({
   openModal,
   openModalHandler,
   rejectedCartd,
   changeHandler,
   title,
   reject,
   remove,
}) {
   return (
      openModal && (
         <Modal
            open={openModal}
            onClose={openModalHandler}
            width="54vh"
            height="30vh"
            padding="1.56rem 1.87rem"
            borderRadius="0.125rem"
            border="none"
         >
            <ModalContainer>
               {reject === true ? (
                  <div>
                     78
                     <h3>Reject</h3>
                     <StyledTextArea
                        placeholder="Write the reason for your rejection "
                        value={title}
                        onChange={changeHandler}
                     />
                  </div>
               ) : (
                  <div>Are you sure want delete this announcement?</div>
               )}

               <ContainerButtonTwo>
                  <Button
                     onClick={openModalHandler}
                     variant="outlined"
                     width="9.375rem"
                     border-radius=" 0.125rem"
                     border="none"
                     background="#fff"
                     color="#DD8A08"
                     padding=" 0.625rem 1rem"
                     font-size="0.875rem"
                     font-weight="500"
                  >
                     cancel
                  </Button>
                  {reject === true ? (
                     <Button
                        onClick={rejectedCartd}
                        variant="contained"
                        width="12.25rem"
                        border-radius=" 0.125rem"
                        border=" 1px solid #DD8A08"
                        bgColor="#DD8A08"
                        padding=" 0.625rem 1rem"
                        color="#fff"
                        font-size="0.875rem"
                        font-weight="500"
                     >
                        Send
                     </Button>
                  ) : (
                     <Button
                        onClick={() => remove()}
                        variant="contained"
                        width="12.25rem"
                        border-radius=" 0.125rem"
                        border=" 1px solid #DD8A08"
                        bgColor="#DD8A08"
                        padding=" 0.625rem 1rem"
                        color="#fff"
                        font-size="0.875rem"
                        font-weight="500"
                     >
                        delete
                     </Button>
                  )}
               </ContainerButtonTwo>
            </ModalContainer>
         </Modal>
      )
   )
}
const ModalContainer = styled('div')(() => ({
   width: '100%',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '1.25rem',
}))
export const ContainerButtonTwo = styled('div')(() => ({
   display: 'flex',
   gap: '1.25rem',
}))
const StyledTextArea = styled(TextArea)(() => ({
   width: '100%',
   height: ' 6.5rem',
   borderRadius: ' 0.125rem',
   marginBottom: '1.5rem',
}))
