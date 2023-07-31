/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
// import { ResultPaiment } from './components/payment/ResultPaiment'
import { Payment } from './components/payment/Payment'

function App() {
   const [openModal, setOpenModal] = useState(false)

   const openModalHandler = () => {
      setOpenModal((prev) => !prev)
   }

   return (
      <div>
         <Payment
            state={openModal}
            openModalHandler={openModalHandler}
            price="26"
         />
         {/* <ResultPaiment /> */}
      </div>
   )
}
export default App
