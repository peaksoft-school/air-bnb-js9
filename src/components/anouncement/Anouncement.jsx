import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { styled } from '@mui/material'
import React from 'react'
import { Input } from '../UI/input/Input'
import { Select } from '../UI/select/Select'

const data = [
   { id: 'option1', name: 'Batken' },
   { id: 'option2', name: 'Jalal-Abad' },
   { id: 'option3', name: 'Yssyk-Kol' },
   { id: 'option4', name: 'Naryn' },
   { id: 'option5', name: 'Osh' },
   { id: 'option6', name: 'Talas' },
   { id: 'option7', name: 'Chui' },
]

export default function Anouncement() {
   const schema = yup.object().shape({
      guests: yup.string().required('Please enter the number of guests'),
      price: yup.string().required('Please enter the price'),
      title: yup.string().required('Please enter a title'),
      description: yup.string().required('Please enter a description'),
      region: yup.string().required('Please select the region'),
      town: yup.string().required('Please enter the town'),
      address: yup.string().required('Please enter the address'),
   })
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
   })

   const onSubmit = (data) => {
      console.log(data, 'data')
   }

   return (
      <GlobalContainer>
         <Container onSubmit={handleSubmit(onSubmit)}>
            <h2>Hi! Let`s get started listing your place.</h2>
            <p>
               In this form, we`ll collect some basic and additional information
               about your listing.
            </p>
            <AddPhotoBlock>
               <div>
                  <span style={{ color: '#363636' }}>Image</span>
                  <span style={{ color: '#A9A9A9' }}>Max 4 photo</span>
               </div>
               <div>
                  <svg
                     width="135"
                     height="135"
                     viewBox="0 0 135 135"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <rect width="135" height="135" fill="#F3F3F3" />
                     <path
                        d="M86.4004 78.2998C86.4004 79.791 85.1916 80.9998 83.7004 80.9998H51.3004C49.8092 80.9998 48.6004 79.791 48.6004 78.2998V62.0998C48.6004 60.6086 49.8092 59.3998 51.3004 59.3998H54.4636C56.6119 59.3998 58.6722 58.5464 60.1912 57.0274L62.428 54.7906C62.9343 54.2843 63.6211 53.9998 64.3371 53.9998H70.6636C71.3797 53.9998 72.0665 54.2843 72.5728 54.7906L74.8096 57.0274C76.3286 58.5464 78.3889 59.3998 80.5371 59.3998H83.7004C85.1916 59.3998 86.4004 60.6086 86.4004 62.0998V78.2998ZM51.3004 56.6998C48.3181 56.6998 45.9004 59.1175 45.9004 62.0998V78.2998C45.9004 81.2821 48.3181 83.6998 51.3004 83.6998H83.7004C86.6827 83.6998 89.1004 81.2821 89.1004 78.2998V62.0998C89.1004 59.1175 86.6827 56.6998 83.7004 56.6998H80.5371C79.105 56.6998 77.7315 56.1309 76.7188 55.1182L74.482 52.8814C73.4693 51.8687 72.0958 51.2998 70.6636 51.2998H64.3371C62.905 51.2998 61.5315 51.8687 60.5188 52.8814L58.282 55.1182C57.2693 56.1309 55.8958 56.6998 54.4636 56.6998H51.3004Z"
                        fill="#C4C4C4"
                     />
                     <path
                        d="M67.5004 75.5998C63.7725 75.5998 60.7504 72.5777 60.7504 68.8498C60.7504 65.1219 63.7725 62.0998 67.5004 62.0998C71.2283 62.0998 74.2504 65.1219 74.2504 68.8498C74.2504 72.5777 71.2283 75.5998 67.5004 75.5998ZM67.5004 78.2998C72.7195 78.2998 76.9504 74.0689 76.9504 68.8498C76.9504 63.6307 72.7195 59.3998 67.5004 59.3998C62.2813 59.3998 58.0504 63.6307 58.0504 68.8498C58.0504 74.0689 62.2813 78.2998 67.5004 78.2998Z"
                        fill="#C4C4C4"
                     />
                     <path
                        d="M54.0004 63.4498C54.0004 64.1954 53.396 64.7998 52.6504 64.7998C51.9048 64.7998 51.3004 64.1954 51.3004 63.4498C51.3004 62.7042 51.9048 62.0998 52.6504 62.0998C53.396 62.0998 54.0004 62.7042 54.0004 63.4498Z"
                        fill="#C4C4C4"
                     />
                  </svg>

                  <AddPhotoInfo>
                     <span
                        style={{
                           color: '#266BD3',
                           fontWeight: '500',
                        }}
                     >
                        Add photos to the review
                     </span>
                     <span
                        style={{
                           color: 'var(--tertiary-middle-gray, #828282)',
                           fontSize: '0.875rem',
                           fontHeight: '400',
                        }}
                     >
                        it will become more noticeable and even more useful.
                        <br /> You can upload up to 4 photos.
                     </span>
                  </AddPhotoInfo>
               </div>
            </AddPhotoBlock>
            <HomeTypeBlock>
               <StyledLabel>Home type</StyledLabel>
               <div>
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                     }}
                  >
                     <Input
                        id="apartment"
                        barsbek="nekrash"
                        type="radio"
                        name="type"
                        style={{
                           marginLeft: '-22.8125rem',
                           marginRight: '2.rem',
                           width: '1.25rem',
                        }}
                     />
                     <StyledLabel htmlFor="apartment">Apartment</StyledLabel>
                     <Input
                        id="house"
                        barsbek="nekrash"
                        type="radio"
                        name="type"
                        style={{
                           marginLeft: '2.5rem',
                           width: '1.25rem',
                        }}
                     />
                     <StyledLabel htmlFor="house">House</StyledLabel>
                  </div>
               </div>
            </HomeTypeBlock>
            <FilterBlock>
               <div style={{ width: '15.625rem' }}>
                  <StyledLabel htmlFor="guest">Max of Guests</StyledLabel>
                  <Input
                     {...register('guests')}
                     size="small"
                     type="number"
                     placeholder="    0"
                     width="15.3125rem"
                     height="2.4375rem"
                     id="guest"
                     padding="0 0 0.625rem 0"
                     error={!!errors.guests}
                  />
                  <IsError>{errors.guests?.message}</IsError>
               </div>
               <div>
                  <StyledLabel htmlFor="price">Price</StyledLabel>
                  <Input
                     {...register('price')}
                     size="small"
                     type="number"
                     placeholder="    $ 0"
                     width="15.3125rem"
                     height="2.4375rem"
                     id="price"
                     error={!!errors.price}
                  />
                  <IsError>{errors.price?.message}</IsError>
               </div>
            </FilterBlock>
            <div
               style={{
                  marginBottom: '2.1875rem',
                  height: '4.5625rem',
               }}
            >
               <StyledLabel htmlFor="title">Title</StyledLabel>
               <Input
                  {...register('title')}
                  type="text"
                  barsbek="krash"
                  size="small"
                  id="title"
                  width="100%"
                  height="2.4375rem"
                  placeholder=" "
                  error={!!errors.title}
               />
               <IsError>{errors.title?.message}</IsError>
            </div>
            <div
               style={{
                  marginBottom: '.4375rem',
                  height: '10rem',
               }}
            >
               <StyledLabel htmlFor="description">
                  Description of listing
               </StyledLabel>
               <StyledInput
                  {...register('description')}
                  type="text"
                  id="description"
                  placeholder="  "
                  style={{
                     border: errors.description
                        ? '1px solid red'
                        : '1px solid gray',
                  }}
               />
               <IsError>{errors.description?.message}</IsError>
            </div>
            <div
               style={{
                  marginRight: '.625rem',
                  marginBottom: '.0625rem',
                  height: '7.5rem',
               }}
            >
               <StyledLabel htmlFor="region">Region</StyledLabel>
               <Select
                  register={register}
                  data={data}
                  width="100%"
                  id="region"
                  error={!!errors.region}
                  labelName={
                     <span
                        style={{ color: 'var(--tertiary-light-gray, #C4C4C4)' }}
                     >
                        Please select the region
                     </span>
                  }
               />
               <IsError>{errors.region?.message}</IsError>
            </div>
            <div
               style={{
                  marginBottom: '1.75rem',
                  height: '4.5625rem',
               }}
            >
               <StyledLabel>Town / Province</StyledLabel>
               <Input
                  {...register('town')}
                  type="text"
                  barsbek="krash"
                  width="100%"
                  height="2.4375rem"
                  size="small"
                  error={!!errors.town}
                  placeholder=" "
               />
               <IsError>{errors.town?.message}</IsError>
            </div>
            <div style={{ height: '4.5625rem' }}>
               <StyledLabel>Address</StyledLabel>
               <Input
                  {...register('address')}
                  type="text"
                  size="small"
                  barsbek="krash"
                  width="100%"
                  height="2.4375rem"
                  error={!!errors.address}
                  placeholder="  "
               />
               <IsError>{errors.address?.message}</IsError>
            </div>
            <ButtonBlock>
               <SubmitInput type="submit" value="Submit" />
            </ButtonBlock>
         </Container>
      </GlobalContainer>
   )
}

const GlobalContainer = styled('div')(() => ({
   width: '100%',
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
}))

const Container = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',

   h2: {
      color: 'var(--primary-black, #363636)',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      textTransform: 'uppercase',
      marginTop: '2.5rem',
   },

   p: {
      width: '38.125rem',
      color: 'var(--tertiary-dark-gray, #646464)',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: ' 400',
      lineHeight: 'normal',
      marginTop: '1.25rem',
      marginBottom: '1.88rem',
   },
}))

const AddPhotoBlock = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',

   div: {
      display: 'flex',
      gap: '1rem',
      marginTop: '0.37rem',

      span: {
         fontFamily: 'Inter',
         fontSize: '1rem',
         fontStyle: 'normal',
         fontweight: ' 400',
         lineheight: 'normal',
      },
   },
}))

const AddPhotoInfo = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   gap: '0.5rem',
}))

const HomeTypeBlock = styled('div')(() => ({
   marginTop: '1.75rem',
   marginBottom: '1.87rem',
}))

const StyledLabel = styled('label')(() => ({
   color: 'var(--primary-black, #363636)',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
   display: 'block',
   marginBottom: '1.12rem',
   marginTop: '0.125rem',
   marginLeft: '0.75rem',
}))

const FilterBlock = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'row',
   gap: '1.25rem',
   marginBottom: '2.9375rem',
   height: '4.5625rem',
   div: {
      display: 'flex',
      flexDirection: 'column',
   },
}))

const ButtonBlock = styled('div')(() => ({
   marginTop: '1.875rem',
   display: 'flex',
   justifyContent: ' flex-end',
   marginBottom: '10.63rem',
}))

const SubmitInput = styled('input')(() => ({
   width: '12.25rem',
   height: '2.125rem',
   border: 'none',

   borderRadius: '0.125rem',
   background: '#DD8A08',
   color: '#F7F7F7',
   fontSize: '0.875rem',
   fontStyle: 'normal',
   lineHeight: 'normal',
   textTransform: 'uppercase',
}))

const IsError = styled('span')(() => ({
   color: 'red',
}))

const StyledInput = styled('input')(() => ({
   width: '100%',
   height: '6.5rem',
   borderRadius: '0.3125rem',
}))
