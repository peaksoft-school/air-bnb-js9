import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import DateePicker from '../UI/date-picker/Date-Picker'
import { Button } from '../UI/button/Button'
import { Like } from '../UI/likes/Like'
import { paymentActions } from '../../store/user/payment/PaymentSlice'
import { postFavoriteInPayment } from '../../store/user/payment/PaymentThunk'
import { toastSnackbar } from '../UI/snackbar/Snackbar'

export function PaymentInDarePicker({
   price,
   booked,
   openModal,
   valueChekin,
   valueChekout,
   resultChekin,
   resultChekout,
   announcementId,
   setValueCheckin,
   setValueCheckout,
   checkLocalStorage,
}) {
   const [selectedDates, setSelectedDates] = useState([])
   const [like, setLike] = useState(false)
   const { toastType } = toastSnackbar()
   const dispatch = useDispatch()
   const { resultChekinLocalStorage, resultChekoutLocalStorage } =
      checkLocalStorage

   const defaultDateCheckin = dayjs(`${resultChekinLocalStorage}`)
   const defaultDateCheckout = dayjs(`${resultChekoutLocalStorage}`)

   const checkin = `${valueChekin.$D}.${valueChekin.$H}${valueChekin.$M}.${valueChekin.$y}`
   const checkout = `${valueChekout.$D}.${valueChekout.$H}${valueChekout.$M}.${valueChekout.$y}`

   const handleCheckinChange = (newDate) => {
      setValueCheckin(newDate)
      setSelectedDates((prevDates) => [...prevDates, newDate])
   }

   const handleCheckoutChange = (newDate) => {
      setValueCheckout(newDate)
      setSelectedDates((prevDates) => [...prevDates, newDate])
   }

   const isPastDate = (date) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return date < today
   }

   const shouldDisableDate = (date) => {
      const dateString = date.toString().split('T')[0]
      if (valueChekin && valueChekout) {
         return (
            (date >= valueChekin && date <= valueChekout) || date <= valueChekin
         )
      }

      if (valueChekin) {
         return date <= valueChekin || isPastDate(date)
      }
      return selectedDates.includes(dateString) || isPastDate(date)
   }

   const updateDisableDate = (date) => {
      const dateString = date.toString().split('T')[0]
      if (defaultDateCheckin && defaultDateCheckout) {
         return (
            (date > defaultDateCheckin && date <= defaultDateCheckin) ||
            date < defaultDateCheckin
         )
      }
      return selectedDates.includes(dateString) || isPastDate(date)
   }

   useEffect(() => {
      const storedLike = JSON.parse(localStorage.getItem('likeItem'))
      if (storedLike !== null) {
         setLike(storedLike)
      }
   }, [])

   const postLikeHandler = () => {
      setLike(true)
      localStorage.setItem('likeItem', JSON.stringify(true))
      dispatch(postFavoriteInPayment({ id: announcementId, toastType }))
   }

   const closeLikeHandler = () => {
      setLike(false)
      localStorage.setItem('likeItem', JSON.stringify(false))
   }

   const toggleInPaymentForm = () => {
      dispatch(paymentActions.setToggleResult())
      const data = {
         checkin,
         checkout,
         resultChekin,
         resultChekout,
      }
      localStorage.setItem('checkin', JSON.stringify(data))
   }

   return openModal ? (
      <div>
         {booked ? (
            <ContainerPayment>
               <ContainerDay styles="day">
                  <p>${price}</p>/ <p className="day">day</p>
               </ContainerDay>

               <DatePickerStyle>
                  <BlockDatePicker>
                     <p className="check">Check in</p>
                     <DateePicker
                        value={valueChekin}
                        values={defaultDateCheckin}
                        setValue={handleCheckinChange}
                        shouldDisableDate={updateDisableDate}
                     />
                  </BlockDatePicker>
                  <BlockDatePicker>
                     <p className="check">Check out</p>
                     <DateePicker
                        value={valueChekout}
                        values={defaultDateCheckout}
                        setValue={handleCheckoutChange}
                        shouldDisableDate={updateDisableDate}
                     />
                  </BlockDatePicker>
               </DatePickerStyle>
               <Button
                  border="none"
                  color="#F7F7F7"
                  width=" 28.375rem"
                  variant="contained"
                  fontSize=" 0.875rem"
                  bgColor="  #DD8A08"
                  borderRadius="0.125rem"
                  padding=" 0.625rem 1rem"
                  textTransform="uppercase"
                  onClick={toggleInPaymentForm}
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
                  <p className="toBook">
                     You have to be signed in to book a listing!
                  </p>
               </ContainerDatePicker>
               <ContainerButton>
                  <ButtonBook
                     border="none"
                     color="#F7F7F7"
                     variant="contained"
                     width=" 23.4375rem"
                     fontSize=" 0.875rem"
                     bgColor="  #DD8A08"
                     borderRadius="0.125rem"
                     padding=" 0.625rem 1rem"
                     textTransform="uppercase"
                     onClick={toggleInPaymentForm}
                     disabled={!valueChekin || !valueChekout}
                  >
                     request to book
                  </ButtonBook>
                  <button type="button" className="iconLike">
                     <Like
                        like={like}
                        postLikeHandler={postLikeHandler}
                        closeLikeHandler={closeLikeHandler}
                     />
                  </button>
               </ContainerButton>
            </ContainerPayment>
         )}
      </div>
   ) : null
}

export const ContainerPayment = styled('div')(() => ({
   width: '30.875rem',
   height: '14.2rem',
   padding: '1.25rem',
   background: ' #fff',
   borderRadius: ' 0.125rem',
   display: 'felx',
   flexDirection: 'column',
   alignItems: 'center',
}))
export const ContainerDay = styled('div')(({ styles }) => ({
   width: '28.375rem',
   paddingBottom: '1.25rem',
   borderBottom: '1px solid #C4C4C4',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',

   '.day': {
      fontWeight: 400,
      fontStyle: 'normal',
      fontFamily: 'Inter',
      fontSize: ' 1.25rem',
      lineHeight: 'normal',
      color: styles === 'day' ? '#6C6C6C' : '#000',
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
   width: '100%',
   paddingTop: '1.25rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',

   '.check': {
      fontWeight: 400,
      fontStyle: 'normal',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      lineHeight: 'normal',
      color: 'var(--tertiary-dark-gray, #646464)',
   },
}))
const ContainerDatePicker = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '1rem',
   '.toBook': {
      color: ' var(--tertiary-middle-gray, #828282)',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
   },
}))
const ContainerButton = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   '.iconLike': {
      width: '3.4375rem',
      height: '2.6rem',
      backgroundColor: '#fff',
      padding: ' 0.375rem 0.5rem',
      borderRadius: '0.125rem',
      border: '1px solid var(--secondary-brown, #DD8A08)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.625rem',
      cursor: 'pointer',
   },
}))
const ButtonBook = styled(Button)(() => ({
   border: 'none',
   color: '#F7F7F7',
   variant: 'contained',
   width: ' 23.4375rem',
   fontSize: ' 0.875rem',
   bgColor: '  #DD8A08',
   borderRadius: '0.125rem',
   padding: ' 0.625rem 1rem',
   textTransform: 'uppercase',
}))
