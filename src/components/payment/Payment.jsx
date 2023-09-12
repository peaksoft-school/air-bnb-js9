import { styled } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PaymentInDarePicker } from './PaymentInDatePicker'
import { Button } from '../UI/button/Button'
import { ResultPayment } from './ResultPayment'

export function Payment({
   price,
   booked,
   bookingsId,
   announcementId,
   toggleDatePicker,
   openModalHandler,
}) {
   const [valueChekin, setValueCheckin] = useState('')
   const [valueChekout, setValueCheckout] = useState('')
   const [checkLocalStorage, setCheckLocalStorage] = useState({})
   const { postToggleResult, putToggleResult } = useSelector(
      (state) => state.payment
   )

   const resultChekin = `${valueChekin.$y}-${valueChekin.$H}${valueChekin.$M}-${valueChekin.$D}`
   const resultChekout = `${valueChekout.$y}-${valueChekout.$H}${valueChekout.$M}-${valueChekout.$D}`

   useEffect(() => {
      const getLocalStorage = localStorage?.getItem('checkin')
      if (getLocalStorage) {
         const checkinParse = JSON.parse(getLocalStorage)

         setCheckLocalStorage({
            checkinLocalStorage: checkinParse.checkin,
            checkoutLocalStorage: checkinParse.checkout,
            resultChekinLocalStorage: checkinParse.resultChekin,
            resultChekoutLocalStorage: checkinParse.resultChekout,
         })
      }
   }, [])
   const { checkinLocalStorage, checkoutLocalStorage } = checkLocalStorage

   return booked ? (
      <div>
         {toggleDatePicker ? (
            <div>
               {' '}
               {postToggleResult ? (
                  <ResultPayment
                     price={price}
                     booked={booked}
                     bookingsId={bookingsId}
                     valueChekin={valueChekin}
                     valueChekout={valueChekout}
                     resultChekin={resultChekin}
                     resultChekout={resultChekout}
                     announcementId={announcementId}
                  />
               ) : (
                  <PaymentInDarePicker
                     price={price}
                     booked={booked}
                     openModal={toggleDatePicker}
                     valueChekin={valueChekin}
                     valueChekout={valueChekout}
                     resultChekin={resultChekin}
                     resultChekout={resultChekout}
                     announcementId={announcementId}
                     setValueCheckin={setValueCheckin}
                     setValueCheckout={setValueCheckout}
                     checkLocalStorage={checkLocalStorage}
                  />
               )}
            </div>
         ) : (
            <ContainerPayment>
               <ContainerDay styles="day">
                  <p>${price}</p>/ <p className="day">day</p>
               </ContainerDay>
               <DatePickerStyle>
                  <BlockDatePicker>
                     <p className="check">Check in</p>
                     <p className="date">{checkinLocalStorage}</p>
                  </BlockDatePicker>
                  <BlockDatePicker>
                     <p className="check">Check out</p>
                     <p className="date">{checkoutLocalStorage}</p>
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
         {putToggleResult ? (
            <ResultPayment
               price={price}
               booked={booked}
               valueChekin={valueChekin}
               valueChekout={valueChekout}
               resultChekin={resultChekin}
               resultChekout={resultChekout}
               announcementId={announcementId}
            />
         ) : (
            <PaymentInDarePicker
               openModal
               price={price}
               booked={booked}
               valueChekin={valueChekin}
               valueChekout={valueChekout}
               resultChekin={resultChekin}
               resultChekout={resultChekout}
               announcementId={announcementId}
               setValueCheckin={setValueCheckin}
               setValueCheckout={setValueCheckout}
               checkLocalStorage={checkLocalStorage}
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
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
   },
}))
