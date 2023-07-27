/* eslint-disable import/no-cycle */
import { styled } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '../UI/Button'
import { PaymenrInDarePicker } from './PaymenrInDarePicker'
import Modal from '../UI/modal/Modal'
import { ResultPaiment } from './ResultPaiment'

export function Payment({ state, openModalHandler }) {
   const [toggleResult, setToggleResult] = useState(false)
   const [valueChekin, setValueCheckin] = useState('')
   const [valueChekout, setValueCheckout] = useState('')

   const toggleHandler = () => {
      setToggleResult((prev) => !prev)
   }
   return (
      <div>
         {state ? (
            <Modal
               open={state}
               onClose={openModalHandler}
               width="32.875rem"
               height=" 19.75rem"
               backgroundColor="none"
            >
               {toggleResult ? (
                  <ResultPaiment
                     valueChekin={valueChekin}
                     valueChekout={valueChekout}
                  />
               ) : (
                  <PaymenrInDarePicker
                     valueChekin={valueChekin}
                     setValueCheckin={setValueCheckin}
                     valueChekout={valueChekout}
                     setValueCheckout={setValueCheckout}
                     openModal={state}
                     toggleHandler={toggleHandler}
                  />
               )}
            </Modal>
         ) : null}

         <ContainerPayment>
            <ContainerDay styles="day">
               <h4>$26</h4>/ <h4 className="day">day</h4>
            </ContainerDay>
            <DatePickerStyle>
               <BlockDatePicker>
                  <p className="check">Check in</p>
                  <p className="date">
                     {valueChekin.length ? valueChekin : '02.02.22'}
                  </p>
               </BlockDatePicker>
               <BlockDatePicker>
                  <p className="check">Check out</p>
                  <p className="date">
                     {valueChekout.length ? valueChekout : '02.02.22'}
                  </p>
               </BlockDatePicker>
            </DatePickerStyle>
            <Button
               variant="contained"
               width=" 28.375rem"
               padding=" 0.625rem 1rem"
               borderRadius="0.125rem"
               background=" #DD8A08"
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
