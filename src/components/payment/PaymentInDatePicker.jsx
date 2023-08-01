import React from 'react'
import { styled } from '@mui/material'
import DateePicker from '../UI/date-picker/Date-Picker'
import { Button } from '../UI/button/Button'

export function PaymentInDarePicker({
   openModal,
   toggleHandler,
   valueChekin,
   setValueCheckin,
   valueChekout,
   setValueCheckout,
}) {
   return openModal ? (
      <ContainerPayment>
         <ContainerDay styles="day">
            <h4>$26</h4>/ <h4 className="day">day</h4>
         </ContainerDay>
         <DatePickerStyle>
            <BlockDatePicker>
               <p className="check">Check in</p>
               <DateePicker value={valueChekin} setValue={setValueCheckin} />
            </BlockDatePicker>
            <BlockDatePicker>
               <p className="check">Check out</p>
               <DateePicker value={valueChekout} setValue={setValueCheckout} />
            </BlockDatePicker>
         </DatePickerStyle>
         <Button
            onClick={toggleHandler}
            variant="contained"
            width=" 28.375rem"
            padding=" 0.625rem 1rem"
            borderRadius="0.125rem"
            bgColor="  #DD8A08"
            color="#F7F7F7"
            fontSize=" 0.875rem"
            textTransform="uppercase"
            border="none"
            marginTop="2.63rem"
         >
            request to book
         </Button>
      </ContainerPayment>
   ) : null
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
}))
