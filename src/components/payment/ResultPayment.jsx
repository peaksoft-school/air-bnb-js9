/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { styled } from '@mui/material'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ResultPaymentForm } from './ResultPaymentForm'

const getMonthName = (monthNumber) => {
   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ]
   return months[monthNumber - 1] || ''
}

const stripePromise = loadStripe(
   'pk_test_51NdWEALAAx1GCzR7MYd1i0ZdWiHVHXzC6OKrgkX1sys0xohhvYcbnWJYRjF2Zjh7oIaPMTcLNWYaWNdXg0P35upx00ivG01DcS'
)

export function ResultPayment({
   price,
   booked,
   bookingsId,
   valueChekin,
   valueChekout,
   resultChekin,
   resultChekout,
   announcementId,
}) {
   const formattedValueChekin = `${getMonthName(valueChekin.$M)} ${
      valueChekin.$D
   },${valueChekin.$y}`

   const formattedValueChekout = `${getMonthName(valueChekout.$M)} ${
      valueChekout.$D
   }, ${valueChekout.$y}`

   const formatedResultChekin = `${valueChekin.$D}.${valueChekin.$H}${valueChekin.$M}.${valueChekin.$y}`
   const formatedResultChekout = `${valueChekout.$D}.${valueChekout.$H}${valueChekout.$M}.${valueChekout.$y}`

   const mines = valueChekout.$D - valueChekin.$D
   const result = price * mines

   return booked ? (
      <Container>
         <ContainerPayment>
            <ContainerDescription styles="book">
               <h2>Book your trip</h2>
               <p className="book">
                  The booking date has been changed, please pay an additional{' '}
                  {mines} days in the period from {formattedValueChekin} to{' '}
                  {formattedValueChekout} inclusive.
               </p>
            </ContainerDescription>

            <ResultContainer>
               <div>
                  <ResultFrom>
                     From {formatedResultChekin} to {formatedResultChekout}
                  </ResultFrom>
                  <Result>
                     ${price} x {mines} days = $ {result}
                  </Result>
               </div>
            </ResultContainer>

            <TotalContainer styles="total">
               <div className="total">
                  Total = <p>${result}</p>
               </div>
               <div className="amount">
                  Payment amount = <p>${result}</p>
               </div>
            </TotalContainer>

            <Elements stripe={stripePromise}>
               <ResultPaymentForm
                  booked={booked}
                  result={result}
                  bookingsId={bookingsId}
                  resultChekin={resultChekin}
                  resultChekout={resultChekout}
                  announcementId={announcementId}
               />
            </Elements>
         </ContainerPayment>
      </Container>
   ) : (
      <Container>
         <ContainerPayment>
            <div>
               <ContainerDescription styles="book">
                  <h2>Book your trip</h2>
                  <p className="book">
                     The booking date has been changed, please pay an additional{' '}
                     {mines} days in the period from {formattedValueChekin} to{' '}
                     {formattedValueChekout} inclusive.
                  </p>
               </ContainerDescription>

               <ContainerSum>
                  <Result>
                     ${price} x {mines} days = $ {result}
                  </Result>
                  <h3 className="total">
                     Total = <h3>${result}</h3>
                  </h3>
               </ContainerSum>
            </div>

            <Elements stripe={stripePromise}>
               <ResultPaymentForm
                  booked={booked}
                  result={result}
                  resultChekin={resultChekin}
                  resultChekout={resultChekout}
                  announcementId={announcementId}
               />
            </Elements>
         </ContainerPayment>
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '29.625rem',
   height: ' 25.5rem',
   borderRadius: ' 0.125rem',
   background: ' #FFF',
}))
const ContainerPayment = styled('div')(() => ({
   width: '100%',
   height: '100%',
   padding: '1.25rem',
   borderRadius: ' 0.125rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'space-between',
}))

const ContainerDescription = styled('div')(({ styles }) => ({
   width: '100%',
   borderBottom: '1px solid#C4C4C4',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '1.25rem',

   '.book': {
      fontWeight: styles === 'book' ? 400 : 500,
      width: styles === 'book' ? ' 26.5rem' : '',
      fontSize: styles === 'book' ? '1rem' : '1.125rem',
      textTransform: styles === 'book' ? '' : 'uppercase',
      color:
         styles === 'book' ? ' var(--tertiary-middle-gray, #828282)' : '#000',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      lineHeight: 'normal',
      textAlign: 'center',
   },
}))
const ResultContainer = styled('div')(() => ({
   marginTop: '1.44rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '1.12rem',
   div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
   },
}))
const ResultFrom = styled('p')(() => ({
   fontSize: '1rem',
   fontWeight: '400',
   fontStyle: 'normal',
   fontFamily: 'Inter',
   lineHeight: 'normal',
   color: 'var(--tertiary-light-gray, #C4C4C4)',
}))
const Result = styled('p')(() => ({
   fontSize: '1rem',
   fontWeight: '400',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   lineHeight: 'normal',
   color: ' var(--tertiary-dark-gray, #646464)',
   span: {
      fontWeight: '500',
      fontSize: '1.1rem',
      color: 'var(--primary-black, #363636)',
   },
}))
const TotalContainer = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'end',
   marginTop: '1.87rem',

   '.total': {
      fontWeight: '500',
      fontStyle: 'normal',
      fontFamily: 'Inter',
      fontSize: '1.125rem',
      lineHeight: 'normal',
      color: ' var(--tertiary-middle-gray, #828282)',
      display: 'flex',
      p: {
         fontWeight: '500',
      },
   },
   '.amount': {
      display: 'flex',
      gap: '0.38rem',
      color: ' var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
   },
}))
const ContainerSum = styled('div')(() => ({
   marginTop: '1.5rem',
   height: '7vh',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'space-between',
   '.total': {
      display: 'flex',
      gap: '0.38rem',
      color: ' var(--primary-black, #363636)',
      fontFamily: 'Inter',
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
   },
}))
