/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { styled } from '@mui/material'
import { Button } from '../UI/button/Button'

export function ResultPaymentForm({ openModalHandler }) {
   const stripe = useStripe()
   const elements = useElements()

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
         console.log('Токен карты:', token)
      } catch (error) {
         console.error('Ошибка при получении токена:', error)
      }
   }

   return (
      <ContainerFrom onSubmit={handleSubmit}>
         <ContainerCartElement>
            <CardElement
               options={{
                  placeholder: 'Card number',
                  hidePostalCode: true,
               }}
            />
         </ContainerCartElement>
         <Button
            variant="contained"
            type="submit"
            width=" 28.375rem"
            padding=" 0.625rem 1rem"
            borderRadius="0.125rem"
            bgColor=" #DD8A08"
            color="#F7F7F7"
            fontSize=" 0.875rem"
            textTransform="uppercase"
            border="none"
         >
            change the date
         </Button>
      </ContainerFrom>
   )
}

const ContainerFrom = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.38rem',
   margin: '1rem 0 0 0',
}))

const ContainerCartElement = styled('div')(() => ({
   width: ' 101%',
   height: '5.5vh',
   borderRadius: '0.125rem',
   border: '1px solid var(--tertiary-light-gray, #c4c4c4)',
   padding: '0.7rem 1rem',
}))
