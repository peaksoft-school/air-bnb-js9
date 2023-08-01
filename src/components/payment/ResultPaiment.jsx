/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { styled } from '@mui/material'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ResultPaymentForm } from './ResultPaymentForm'

const stripePromise = loadStripe(
   'pk_test_51NYN0mBbVpyhSGy9ZskXVZmFK9RJkccBrsiOb2eeve0aYF5XdJ08fQJd3679hdlc4OI8RVnkcwhVdMgWdxGwam1Y00JFIanrmJ'
)

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

export function ResultPaiment({
   valueChekin,
   valueChekout,
   openModalHandler,
   price,
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

   return (
      <div>
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
               <h3 className="total">
                  Total = <h3>${result}</h3>
               </h3>
               <h3 className="amount">
                  Payment amount = <h3>${result}</h3>
               </h3>
            </TotalContainer>

            <Elements stripe={stripePromise}>
               <ResultPaymentForm
                  openModalHandler={openModalHandler}
                  valueChekin={valueChekin}
                  valueChekout={valueChekout}
                  price={price}
               />
            </Elements>
         </ContainerPayment>
      </div>
   )
}

const ContainerPayment = styled('div')(() => ({
   width: '105%',
   borderRadius: ' 0.125rem',
   padding: '1.25rem',
   display: 'felx',
   flexDirection: 'column',
   alignItems: 'center',
   backgroundColor: '#fff',
}))

const ContainerDescription = styled('div')(({ styles }) => ({
   width: '100%',
   borderBottom: '1px solid#C4C4C4',
   padding: '1.35rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '1.25rem',

   '.book': {
      width: styles === 'book' ? ' 26.5rem' : '',
      color:
         styles === 'book' ? ' var(--tertiary-middle-gray, #828282)' : '#000',
      fontSize: styles === 'book' ? '1rem' : '1.125rem',
      fontWeight: styles === 'book' ? 400 : 500,
      textTransform: styles === 'book' ? '' : 'uppercase',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      lineHeight: 'normal',
      textAlign: 'center',
   },
}))
const ResultContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.12rem',
   marginTop: '1.44rem',
   div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
   },
}))
const ResultFrom = styled('p')(() => ({
   color: 'var(--tertiary-light-gray, #C4C4C4)',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: 'normal',
}))
const Result = styled('p')(() => ({
   color: ' var(--tertiary-dark-gray, #646464)',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: 'normal',
   span: {
      color: 'var(--primary-black, #363636)',
      fontWeight: '500',
      fontSize: '1.1rem',
   },
}))
const TotalContainer = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'end',
   marginTop: '1.87rem',

   '.total': {
      display: 'flex',
      gap: '0.38rem',
      color: ' var(--tertiary-middle-gray, #828282)',
      fontFamily: 'Inter',
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      h3: {
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
      //   h3: {
      //      fontWeight: '500',
      //   },
   },
}))
// const ContainerButton = styled('div')(() => ({
//    display: 'flex',
//    flexDirection: 'column',
//    gap: '1.38rem',
//    marginTop: '1rem',
// }))
