// import React, { useState } from 'react'
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
// import { styled } from '@mui/material'
// import { Button } from '../UI/button/Button'

// export function ResultPaymentForm({
//    openModalHandler,
//    valueChekin,
//    valueChekout,
//    price,
// }) {
//    const [error, setError] = useState('')
//    const stripe = useStripe()
//    const elements = useElements()

//    const handleSubmit = async (event) => {
//       event.preventDefault()
//       try {
//          if (!stripe || !elements) {
//             return
//          }

//          const { token } = await stripe.createToken(
//             elements.getElement(CardElement)
//          )

//          openModalHandler()
//          console.log('Токен карты:', token, valueChekin, valueChekout, price)
//       } catch (error) {
//          setError('Ошибка при получении токена:', error)
//       }
//    }

//    return (
//       <ContainerFrom onSubmit={handleSubmit}>
//          <div className="block">
//             <ContainerCartElement>
//                <CardElement
//                   options={{
//                      placeholder: 'Card number',
//                      hidePostalCode: true,
//                   }}
//                />
//             </ContainerCartElement>
//             <p className="error">{error}</p>
//          </div>
//          <Button
//             variant="contained"
//             type="submit"
//             width=" 28.375rem"
//             padding=" 0.625rem 1rem"
//             borderRadius="0.125rem"
//             bgColor=" #DD8A08"
//             color="#F7F7F7"
//             fontSize=" 0.875rem"
//             textTransform="uppercase"
//             border="none"
//          >
//             Book
//          </Button>
//       </ContainerFrom>
//    )
// }

// const ContainerFrom = styled('form')(() => ({
//    display: 'flex',
//    flexDirection: 'column',
//    gap: '0.5rem',
//    margin: '1rem 0 0 0',
//    '.block': {
//       height: '9vh',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//    },
//    '.error': {
//       color: 'red',
//    },
// }))

// const ContainerCartElement = styled('div')(() => ({
//    width: ' 101%',
//    height: '5.5vh',
//    borderRadius: '0.125rem',
//    border: '1px solid var(--tertiary-light-gray, #c4c4c4)',
//    padding: '0.7rem 1rem',
// }))
import React, { useEffect, useState } from 'react'
import {
   PaymentElement,
   LinkAuthenticationElement,
   useStripe,
   useElements,
} from '@stripe/react-stripe-js'

export function ResultPaymentForm() {
   const stripe = useStripe()
   const elements = useElements()

   const [email, setEmail] = useState('')
   const [message, setMessage] = useState(null)
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      if (!stripe) {
         return
      }

      const clientSecret = new URLSearchParams(window.location.search).get(
         'payment_intent_client_secret'
      )

      if (!clientSecret) {
         return
      }

      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
         switch (paymentIntent.status) {
            case 'succeeded':
               setMessage('Payment succeeded!')
               break
            case 'processing':
               setMessage('Your payment is processing.')
               break
            case 'requires_payment_method':
               setMessage('Your payment was not successful, please try again.')
               break
            default:
               setMessage('Something went wrong.')
               break
         }
      })
   }, [stripe])

   const handleSubmit = async (e) => {
      e.preventDefault()

      if (!stripe || !elements) {
         return
      }

      setIsLoading(true)

      const { error } = await stripe.confirmPayment({
         elements,
         confirmParams: {
            return_url: 'http://localhost:3000',
         },
      })

      if (error.type === 'card_error' || error.type === 'validation_error') {
         setMessage(error.message)
      } else {
         setMessage('An unexpected error occurred.')
      }

      setIsLoading(false)
   }

   const paymentElementOptions = {
      layout: 'tabs',
   }

   return (
      <form id="payment-form" onSubmit={handleSubmit}>
         <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(e) => setEmail(e.target.value)}
         />
         <PaymentElement id="payment-element" options={paymentElementOptions} />
         <button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            type="button"
         >
            <span id="button-text">
               {isLoading ? (
                  <div className="spinner" id="spinner" />
               ) : (
                  'Pay now'
               )}
            </span>
         </button>

         {message && <div id="payment-message">{message}</div>}
         <p>{email}</p>
      </form>
   )
}
