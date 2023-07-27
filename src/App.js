/* eslint-disable import/no-extraneous-dependencies */
import { Elements, PaymentElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
// import { ResultPaiment } from './components/payment/ResultPaiment'
// import { Payment } from './components/payment/Payment'

function App() {
   // const [openModal, setOpenModal] = useState(false)

   // const openModalHandler = () => {
   //    setOpenModal((prev) => !prev)
   // }
   const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')

   const options = {
      mode: 'payment',
      amount: 1099,
      currency: 'usd',
      // Fully customizable with appearance API.
      appearance: {
         /* ... */
      },
   }

   return (
      <div>
         {/* <Payment state={openModal} openModalHandler={openModalHandler} /> */}
         {/* <ResultPaiment /> */}
         <Elements stripe={stripePromise} options={options}>
            <PaymentElement />
         </Elements>
      </div>
   )
}
export default App
