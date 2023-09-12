import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Button } from '../UI/button/Button'
import {
   postBookRequest,
   putBookRequest,
} from '../../store/payment/PaymentThunk'
import { toastSnackbar } from '../UI/snackbar/Snackbar'

export function ResultPaymentForm({
   booked,
   result,
   bookingsId,
   resultChekin,
   resultChekout,
   announcementId,
}) {
   const [error, setError] = useState('')
   const stripe = useStripe()
   const elements = useElements()
   const dispatch = useDispatch()
   const { toastType } = toastSnackbar()

   const handleSubmit = async (event) => {
      event.preventDefault()
      try {
         if (!stripe || !elements) {
            return
         }

         const { token } = await stripe.createToken(
            elements.getElement(CardElement)
         )

         if (booked) {
            const updateBookingData = {
               amount: +result,
               announcementId: +announcementId,
               checkIn: resultChekin,
               checkOut: resultChekout,
               bookingId: +bookingsId,
               token: token.id,
            }
            dispatch(putBookRequest({ updateBookingData, toastType }))
         } else {
            const postBookData = {
               announcementId: +announcementId,
               checkIn: resultChekin,
               checkOut: resultChekout,
               amount: +result,
               token: token.id,
            }

            dispatch(postBookRequest({ postBookData, toastType }))
         }
      } catch (error) {
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
            {booked ? 'Save' : 'Book'}
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
