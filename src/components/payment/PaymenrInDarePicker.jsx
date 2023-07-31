/* eslint-disable import/no-cycle */
import React from 'react'
import { Button } from '../UI/button/Button'
import DateePicker from '../UI/date-picker/Date-Picker'
import {
   BlockDatePicker,
   ContainerDay,
   ContainerPayment,
   DatePickerStyle,
} from './Payment'

export function PaymenrInDarePicker({
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
            change the date
         </Button>
      </ContainerPayment>
   ) : null
}
