import * as React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { styled } from '@mui/material'

dayjs.locale('ru')

export default function DateePicker({ value, setValue }) {
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DemoContainer components={['DatePickers']}>
            <StyledDate
               value={value}
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
}))
