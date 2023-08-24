import React, { useState } from 'react'
import { styled } from '@mui/material'
import DateePicker from '../UI/date-picker/Date-Picker'
import { Button } from '../UI/button/Button'
import { Like } from '../UI/likes/Like'

export function PaymentInDarePicker({
   price,
   methot,
   openModal,
   bookedDates,
   valueChekin,
   valueChekout,
   toggleHandler,
   setValueCheckin,
   setValueCheckout,
}) {
   const [selectedDates, setSelectedDates] = useState([])
   const [like, setLike] = useState(false)

   const handleCheckinChange = (newDate) => {
      setValueCheckin(newDate)
      setSelectedDates((prevDates) => [...prevDates, newDate])
   }

   const handleCheckoutChange = (newDate) => {
      setValueCheckout(newDate)
      setSelectedDates((prevDates) => [...prevDates, newDate])
   }

   const shouldDisableDate = (date) => {
      const dateString = date.toISOString().split('T')[0]
      return (
         selectedDates.includes(dateString) || bookedDates.includes(dateString)
      )
   }

   const likeHandler = () => {
      setLike((prev) => !prev)
   }

   return openModal ? (
      <div>
         {methot === 'post' ? (
            <ContainerPayment>
               <ContainerDay styles="day">
                  <h4>${price}</h4>/ <h4 className="day">day</h4>
               </ContainerDay>
               <DatePickerStyle>
                  <BlockDatePicker>
                     <p className="check">Check in</p>
                     <DateePicker
                        value={valueChekin}
                        setValue={handleCheckinChange}
                        shouldDisableDate={shouldDisableDate}
                     />
                  </BlockDatePicker>
                  <BlockDatePicker>
                     <p className="check">Check out</p>
                     <DateePicker
                        value={valueChekout}
                        setValue={handleCheckoutChange}
                        shouldDisableDate={shouldDisableDate}
                     />
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
                  disabled={!valueChekin || !valueChekout}
               >
                  request to book
               </Button>
            </ContainerPayment>
         ) : (
            <ContainerPayment>
               <ContainerDay styles="day">
                  <h4>${price}</h4>/ <h4 className="day">day</h4>
               </ContainerDay>
               <ContainerDatePicker>
                  <DatePickerStyle>
                     <BlockDatePicker>
                        <p className="check">Check in</p>
                        <DateePicker
                           value={valueChekin}
                           setValue={setValueCheckin}
                        />
                     </BlockDatePicker>
                     <BlockDatePicker>
                        <p className="check">Check out</p>
                        <DateePicker
                           value={valueChekout}
                           setValue={setValueCheckout}
                        />
                     </BlockDatePicker>
                  </DatePickerStyle>
                  <p>You have to be signed in to book a listing!</p>
               </ContainerDatePicker>
               <ContainerButton>
                  <Button
                     onClick={toggleHandler}
                     variant="contained"
                     width=" 23.4375rem"
                     padding=" 0.625rem 1rem"
                     borderRadius="0.125rem"
                     bgColor="  #DD8A08"
                     color="#F7F7F7"
                     fontSize=" 0.875rem"
                     textTransform="uppercase"
                     border="none"
                     disabled={!valueChekin || !valueChekout}
                  >
                     request to book
                  </Button>
                  <button
                     className="iconLike"
                     onClick={likeHandler}
                     type="button"
                  >
                     <Like like={like} onClick={likeHandler} />
                  </button>
               </ContainerButton>
            </ContainerPayment>
         )}
      </div>
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
const ContainerDatePicker = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '1rem',
}))
const ContainerButton = styled('div')(() => ({
   width: '28rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   margin: '2rem 0 0 0',
   '.iconLike': {
      width: '3.4375rem',
      height: '2.6rem',
      backgroundColor: '#fff',
      padding: ' 0.375rem 0.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.625rem',
      borderRadius: '0.125rem',
      border: '1px solid var(--secondary-brown, #DD8A08)',
   },
}))
