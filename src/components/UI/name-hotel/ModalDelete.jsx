import React from 'react'
import { styled } from '@mui/material'
import { Button } from '../button/Button'
import Modal from '../modal/Modal'

export function ModalDelete({
   dataById,
   openModal,
   openModalHandler,
   deleteAnnouncement,
}) {
   return (
      openModal && (
         <Modal
            open={openModal}
            onClose={openModalHandler}
            width="30vw"
            height="28vh"
            padding="1.56rem 1.87rem"
            borderRadius="0.6rem"
            border="none"
         >
            <ModalContainer>
               <h2>Are you sure to delete?</h2>
               <ContainerButtonTwo>
                  <Button
                     onClick={openModalHandler}
                     variant="contained"
                     width="10rem"
                     border-radius=" 0.125rem"
                     border="2px solid gray"
                     background="#fff"
                     padding=" 0.625rem 1rem"
                     color="var(--tertiary-middle-gray, #828282)"
                     font-size="0.875rem"
                     font-weight="500"
                     hoverBgColor="#828282"
                     hoverColor="black"
                  >
                     cancel
                  </Button>
                  <Button
                     onClick={() => deleteAnnouncement(dataById.id)}
                     variant="contained"
                     width="11rem"
                     border-radius=" 0.125rem"
                     border=" 1px solid #DD8A08"
                     bgColor="#ff3819"
                     padding=" 0.625rem 1rem"
                     color="#fff"
                     font-size="0.875rem"
                     font-weight="500"
                     hoverBgColor="#4f0e05"
                  >
                     Delete
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
