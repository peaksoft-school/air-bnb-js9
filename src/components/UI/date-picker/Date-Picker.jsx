import * as React from 'react'
import 'dayjs/locale/ru'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { styled } from '@mui/material'

export default function DateePicker({
   value,
   setValue,
   values,
   shouldDisableDate,
}) {
   // console.log(value, 'value')
   // console.log(setValue, 'setValue')
   // console.log(values, 'values')
   // console.log(shouldDisableDate, 'shouldDisableDate')
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DemoContainer components={['DatePicker']}>
            <StyledDate
               inputValue={value}
               defaultValue={values}
               shouldDisableDate={shouldDisableDate}
               onChange={(newValue) => setValue(newValue)}
            />
         </DemoContainer>
      </LocalizationProvider>
   )
}
const StyledDate = styled(DatePicker)(() => ({
   '& .MuiInputBase-input': {
      padding: '10px 16px',
      display: 'inline-flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },

   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: 'gray',
      },
      '&:hover fieldset': {
         borderColor: 'gray',
      },
   },

   '& .MuiPickersDay-day.checkin-disabled, & .MuiPickersDay-day.checkout-disabled':
      {
         pointerEvents: 'none',
         color: 'gray',
      },

   '& .MuiPickersDay-day.checkin-selected': {
      backgroundColor: '#ff7200',
      color: 'white',
   },
   '& .MuiPickersDay-day': {
      '&.checkin-selected': {
         backgroundColor: '#ff7200',
         color: 'white',
      },
      '&.checkout-selected': {
         backgroundColor: '#ff7200',
         color: 'white',
      },
      '&:not(.checkin-selected):not(.checkout-selected)': {
         pointerEvents: 'none',
         color: 'gray',
         textDecoration: 'line-through',
      },
   },
   '& .MuiPickersDay-day.checkout-selected': {
      backgroundColor: '#ff7200',
      color: 'white',
   },
   '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray',
   },
}))
