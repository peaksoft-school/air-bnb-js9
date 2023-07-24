import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { styled } from '@mui/material'
import React from 'react'
import { Input } from '../UI/input/Input'
import { Select } from '../UI/select/Select'
import { Upload } from '../UI/upload-img/Upload'

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
                  <span style={{ color: '#363636', marginRight: '1rem' }}>
                     Image
                  </span>
                  <span style={{ color: '#A9A9A9' }}>Max 4 photo</span>
               </div>
               <div style={{ marginTop: '1.125rem' }}>
                  <Upload maxWidth="15.9vw" />
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
      marginTop: '1px',

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
   marginLeft: '1.25rem',
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
