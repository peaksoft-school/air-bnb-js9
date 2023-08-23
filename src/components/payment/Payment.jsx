import { styled } from '@mui/material'
import React, { useState } from 'react'
import { PaymentInDarePicker } from './PaymentInDatePicker'
import { Button } from '../UI/button/Button'
// import Modal from '../UI/modal/Modal'
import { ResultPaiment } from './ResultPaiment'

export function Payment({ state, openModalHandler, price, methot }) {
   const [toggleResult, setToggleResult] = useState(false)
   const [defaultDate, setDefaultDate] = useState(false)
   const [valueChekin, setValueCheckin] = useState('')
   const [valueChekout, setValueCheckout] = useState('')

   const toggleHandler = () => {
      setToggleResult((prev) => !prev)
      setDefaultDate(true)
   }
   const ResultChekin = `${valueChekin.$D}.${valueChekin.$H}${valueChekin.$M}.${valueChekin.$y}`
   const ResultChekout = `${valueChekout.$D}.${valueChekout.$H}${valueChekout.$M}.${valueChekout.$y}`

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
   return methot === 'post' ? (
      <div>
         {state ? (
            <div>
               {' '}
               {toggleResult ? (
                  <ResultPaiment
                     valueChekin={valueChekin}
                     valueChekout={valueChekout}
                     openModalHandler={openModalHandler}
                     price={price}
                  />
               ) : (
                  <PaymentInDarePicker
                     valueChekin={valueChekin}
                     setValueCheckin={setValueCheckin}
                     valueChekout={valueChekout}
                     setValueCheckout={setValueCheckout}
                     openModal={state}
                     toggleHandler={toggleHandler}
                     methot={methot}
                     price={price}
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
                  variant="contained"
                  width=" 28.375rem"
                  padding=" 0.625rem 1rem"
                  borderRadius="0.125rem"
                  bgColor=" #DD8A08"
                  color="#F7F7F7"
                  fontSize=" 0.875rem"
                  textTransform="uppercase"
                  border="none"
                  marginTop="2.63rem"
                  onClick={openModalHandler}
               >
                  change the date
               </Button>
            </ContainerPayment>
         )}
      </div>
   ) : (
      <div>
         {' '}
         {toggleResult ? (
            <ResultPaiment
               valueChekin={valueChekin}
               valueChekout={valueChekout}
               openModalHandler={openModalHandler}
               price={price}
            />
         ) : (
            <PaymentInDarePicker
               valueChekin={valueChekin}
               setValueCheckin={setValueCheckin}
               valueChekout={valueChekout}
               setValueCheckout={setValueCheckout}
               toggleHandler={toggleHandler}
               methot={methot}
               openModal
               price={price}
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
