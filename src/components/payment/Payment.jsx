import { styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PaymentInDarePicker } from './PaymentInDatePicker'
import { Button } from '../UI/button/Button'
import { ResultPaiment } from './ResultPaiment'
import { paymentActions } from '../../store/payment/PaymentSlice'

export function Payment({ price, state, methot, announcementId }) {
   const [valueChekin, setValueCheckin] = useState('')
   const [valueChekout, setValueCheckout] = useState('')
   const { postToggleResult, putToggleResult, defaultDate } = useSelector(
      (state) => state.payment
   )

   const dispatch = useDispatch()
   const ResultChekin = `${valueChekin.$y}-${valueChekin.$H}${valueChekin.$M}-${valueChekin.$D}`
   const ResultChekout = `${valueChekout.$y}-${valueChekout.$H}${valueChekout.$M}-${valueChekout.$D}`

   const getCurrentDate = () => {
      const currentDate = new Date()
      const day = currentDate.getDate().toString().padStart(2, '0')
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
      const year = currentDate.getFullYear().toString().slice(-2)
      return `${day}.${month}.${year}`
   }

   const getFutureDate = () => {
      const currentDate = new Date()
      currentDate.setDate(currentDate.getDate() + 3)
      const day = currentDate.getDate().toString().padStart(2, '0')
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
      const year = currentDate.getFullYear().toString().slice(-2)
      return `${day}.${month}.${year}`
   }

   const bookedDates = []
   const formattedCheckinDate = `${valueChekin.$y}-${valueChekin.$M + 1}-${
      valueChekin.$D
   }`
   const formattedCheckoutDate = `${valueChekout.$y}-${valueChekout.$M + 1}-${
      valueChekout.$D
   }`
   bookedDates.push(formattedCheckinDate, formattedCheckoutDate)

   const openPaymentHandler = () => {
      dispatch(paymentActions.openPayment())
   }

   return methot === 'put' ? (
      <div>
         {state ? (
            <div>
               {' '}
               {postToggleResult ? (
                  <ResultPaiment
                     price={price}
                     methot={methot}
                     valueChekin={valueChekin}
                     valueChekout={valueChekout}
                     ResultChekin={ResultChekin}
                     ResultChekout={ResultChekout}
                     announcementId={announcementId}
                     openPaymentHandler={openPaymentHandler}
                  />
               ) : (
                  <PaymentInDarePicker
                     price={price}
                     methot={methot}
                     openModal={state}
                     bookedDates={bookedDates}
                     valueChekin={valueChekin}
                     valueChekout={valueChekout}
                     announcementId={announcementId}
                     setValueCheckin={setValueCheckin}
                     setValueCheckout={setValueCheckout}
                  />
               )}
            </div>
         ) : (
            <ContainerPayment>
               <ContainerDay styles="day">
                  <h4>${price}</h4>/ <h4 className="day">day</h4>
               </ContainerDay>
               <DatePickerStyle>
                  <BlockDatePicker>
                     <p className="check">Check in</p>
                     <p className="date">
                        {defaultDate ? ResultChekin : getCurrentDate()}
                     </p>
                  </BlockDatePicker>
                  <BlockDatePicker>
                     <p className="check">Check out</p>
                     <p className="date">
                        {defaultDate ? ResultChekout : getFutureDate()}
                     </p>
                  </BlockDatePicker>
               </DatePickerStyle>
               <Button
                  border="none"
                  color="#F7F7F7"
                  width=" 28.375rem"
                  variant="contained"
                  marginTop="2.63rem"
                  fontSize=" 0.875rem"
                  bgColor=" #DD8A08"
                  borderRadius="0.125rem"
                  padding=" 0.625rem 1rem"
                  textTransform="uppercase"
                  onClick={openPaymentHandler}
               >
                  change the date
               </Button>
            </ContainerPayment>
         )}
      </div>
   ) : (
      <div>
         {' '}
         {putToggleResult ? (
            <ResultPaiment
               price={price}
               methot={methot}
               valueChekin={valueChekin}
               valueChekout={valueChekout}
               ResultChekin={ResultChekin}
               ResultChekout={ResultChekout}
               announcementId={announcementId}
               openPaymentHandler={openPaymentHandler}
            />
         ) : (
            <PaymentInDarePicker
               openModal
               price={price}
               valueChekin={valueChekin}
               valueChekout={valueChekout}
               setValueCheckin={setValueCheckin}
               announcementId={announcementId}
               setValueCheckout={setValueCheckout}
            />
         )}
      </div>
   )
}

export const ContainerPayment = styled('div')(() => ({
   width: '30.875rem',
   borderRadius: ' 0.125rem',
   background: ' #fff',
   padding: '1.25rem',
   display: 'felx',
   flexDirection: 'column',
   alignItems: 'center',
}))
export const ContainerDay = styled('div')(({ styles }) => ({
   width: '28.375rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   borderBottom: '1px solid #C4C4C4',
   paddingBottom: '1.25rem',

   '.day': {
      color: styles === 'day' ? '#6C6C6C' : '#000',
      fontFamily: 'Inter',
      fontSize: ' 1.25rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      textTransform: styles === 'day' ? 'none' : 'uppercase',
   },
}))
export const DatePickerStyle = styled('div')(() => ({
   width: '28.375rem',
   display: 'flex',
   justifyContent: 'flex-start',
   alignItems: 'center',
   gap: '3rem',
}))
export const BlockDatePicker = styled('div')(() => ({
   width: '11.19rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   gap: '1.06rem',
   paddingTop: '1.25rem',

   '.check': {
      color: 'var(--tertiary-dark-gray, #646464)',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
   },
   '.date': {
      color: 'var(--primary-black, #363636)',
      fontFamily: 'Roboto',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
   },
}))
