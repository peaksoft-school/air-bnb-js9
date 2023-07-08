import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'

export const Snackbar = () => {
   const [state, setState] = useState(true)

   const addNotification = () => {
      if (state) {
         toast.success(
            <Toast>
               <h3>Booked :)</h3>
               <p>
                  The house was successfully booked{' '}
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
      setState(true)
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

const Toast = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
   h3 {
      color: #000;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
   }
   p {
      color: #646464;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
   }
`
