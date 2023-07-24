import React from 'react'
import { styled } from '@mui/material'
import { Button } from '../Button'
import Modal from '../modal/Modal'
import { TextArea } from '../textarea/TextArea'

export function ModalNameHotel({ openModal, openModalHandler }) {
   return (
      openModal && (
         <Modal
            open={openModal}
            onClose={openModalHandler}
            width="31vw"
            height="38vh"
            padding="1.56rem 1.87rem"
            borderRadius="0.125rem"
            border="none"
         >
            <ModalContainer>
               <h3>Reject</h3>
               <TextArea
                  width="25.875rem"
                  height=" 6.5rem"
                  borderRadius=" 0.125rem"
                  marginBottom="1.5rem"
                  placeholder="Write the reason for your rejection "
               />
               <ContainerButtonTwo>
                  <Button
                     onClick={openModalHandler}
                     variant="contained"
                     width="9.375rem"
                     border-radius=" 0.125rem"
                     border="none"
                     background="#fff"
                     padding=" 0.625rem 1rem"
                     color="var(--tertiary-middle-gray, #828282)"
                     font-size="0.875rem"
                     font-weight="500"
                  >
                     cancel
                  </Button>
                  <Button
                     variant="contained"
                     width="12.25rem"
                     border-radius=" 0.125rem"
                     border=" 1px solid #DD8A08"
                     background="#DD8A08"
                     padding=" 0.625rem 1rem"
                     color="#fff"
                     font-size="0.875rem"
                     font-weight="500"
                  >
                     Send
                  </Button>
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
