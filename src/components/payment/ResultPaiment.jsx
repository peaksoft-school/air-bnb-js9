/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ResulPaymentForm } from './ResultPaymentForm'

export function ResultPaiment() {
   const [stripePromise, setStripePromise] = useState(null)
   const [clientSecret, setClientSecret] = useState(' ')

   useEffect(() => {
      fetch('/config').then(async (r) => {
         const { publishableKey } = await r.json()
         setStripePromise(loadStripe(publishableKey))
      })
   }, [])

   useEffect(() => {
      fetch('/create-payment-intent', {
         method: 'POST',
         body: JSON.stringify({}),
      }).then(async (result) => {
         const { clientSecret } = await result.json()
         setClientSecret(clientSecret)
      })
   }, [])

   return (
      <>
         <h1>React Stripe and the Payment Element</h1>
         <Elements stripe={stripePromise} options={{ clientSecret }}>
            <ResulPaymentForm />
         </Elements>
      </>
   )
}
