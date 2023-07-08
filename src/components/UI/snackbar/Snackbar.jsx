import { styled } from '@mui/material'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Snackbar = () => {
   const [state, setState] = useState(false)

   const addNotification = () => {
      if (state) {
         toast.success(
            <Toast>
               <h3>Booked :)</h3>
               <p>
                  The house was successfully booked
                  {/* Бул жакка children келет */}
               </p>
            </Toast>
         )
      } else {
         toast.error(
            <Toast>
               <h3>Uh oh! Something went wrong :( </h3>
               <p>
                  We either find anything matching your search or have
                  encountered an error. If searching for a unique location, try
                  searching again with more common keywords.
                  {/* Бул жакка children келет */}
               </p>
            </Toast>
         )
      }
      setState(false)
   }

   return (
      <>
         <button onClick={addNotification} type="submit">
            Add notificaiton
         </button>

         {state ? (
            <ToastContainer
               position="top-right"
               autoClose={1500}
               toastStyle={{
                  width: '550px',
                  borderRadius: '10px',
                  backgroundColor: '#F0FFF1',
                  right: '240px',
               }}
            />
         ) : (
            <ToastContainer
               position="top-right"
               autoClose={1500}
               toastStyle={{
                  width: '550px',
                  borderRadius: '10px',
                  backgroundColor: '#FFF1F0',
                  right: '240px',
               }}
            />
         )}
      </>
   )
}

const Toast = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '8px',
   h3: {
      color: '#000',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
   p: {
      color: '#646464',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
   },
}))
