import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Button } from '../UI/button/Button'
import { postPaymentRequest } from '../../store/payment/PaymentThunk'
import { toastSnackbar } from '../UI/snackbar/Snackbar'

export function ResultPaymentForm({
   price,
   ResultChekin,
   ResultChekout,
   openModalHandler,
}) {
   const [error, setError] = useState('')
   const stripe = useStripe()
   const elements = useElements()
   const dispatch = useDispatch()
   const { toastType } = toastSnackbar()

   console.log(' ResultChekin', ResultChekin)
   console.log('ResultChekout', ResultChekout)

   const handleSubmit = async (event) => {
      event.preventDefault()
      try {
         if (!stripe || !elements) {
            return
         }
         const { token } = await stripe.createToken(
            elements.getElement(CardElement)
         )
         openModalHandler()
         console.log(token)
         const data = {
            amount: +price,
            token: token.id,
         }
         dispatch(postPaymentRequest(data))

         toastType('success', 'Payment :)', 'The house was successfully booked')
      } catch (error) {
         toastType('success', 'Payment :(', error.message)
         setError('Ошибка при получении токена')
      }
   }

   return (
      <ContainerFrom onSubmit={handleSubmit}>
         <div className="block">
            <ContainerCartElement>
               <CardElement
                  options={{
                     placeholder: 'Card number',
                     hidePostalCode: true,
                  }}
               />
            </ContainerCartElement>
            <p className="error">{error}</p>
         </div>
         <Button
            type="submit"
            variant="contained"
            border="none"
            color="#F7F7F7"
            width=" 28.375rem"
            fontSize=" 0.875rem"
            bgColor=" #DD8A08"
            borderRadius="0.125rem"
            padding=" 0.625rem 1rem"
            textTransform="uppercase"
         >
            Book
         </Button>
      </ContainerFrom>
   )
}

const ContainerFrom = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.5rem',
   margin: '1rem 0 0 0',
   '.block': {
      height: '9vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
   },
   '.error': {
      color: 'red',
   },
}))

const ContainerCartElement = styled('div')(() => ({
   width: ' 101%',
   height: '5.5vh',
   padding: '0.7rem 1rem',
   borderRadius: '0.125rem',
   border: '1px solid var(--tertiary-light-gray, #c4c4c4)',
}))
