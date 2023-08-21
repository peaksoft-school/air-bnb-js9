/* eslint-disable consistent-return */
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { styled } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../UI/input/Input'
import { Select } from '../UI/select/Select'
import { Upload } from '../UI/upload-img/Upload'
import { schema } from '../../utils/helpers'
import { addAnouncement } from '../../api/anouncementService'
import { toastSnackbar } from '../UI/snackbar/Snackbar'

const data = [
   { id: 'option1', name: 'BATKEN' },
   { id: 'option2', name: 'JALAL_ABAD' },
   { id: 'option3', name: 'YSSYK-KOL' },
   { id: 'option4', name: 'NARYN' },
   { id: 'option5', name: 'OSH' },
   { id: 'option6', name: 'TALAS' },
   { id: 'option7', name: 'CHUI' },
]

export default function AddAnouncementForm() {
   const [fileNames, setFileNames] = useState([])
   const { toastType } = toastSnackbar()
   const navigate = useNavigate()

   const postAnouncementForm = async (payload) => {
      try {
         const response = await addAnouncement(payload)
         toastType('success', 'Ad added successfully!')
         navigate('/')

         return response.data
      } catch (error) {
         toastType('error', 'Error!')
      }
   }

   const {
      register,
      handleSubmit,
      formState: { errors },
      control,
   } = useForm({
      resolver: yupResolver(schema),
   })

   const addImageForAnoucement = (data) => {
      setFileNames([...fileNames, data])
   }

   const onSubmit = (data) => {
      data.images = fileNames
      postAnouncementForm(data)
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
                  <StyledSpan>Image</StyledSpan>
                  <QuantityForPhoto>Max 4 photo</QuantityForPhoto>
               </div>
               <div style={{ marginTop: '1.125rem' }}>
                  <Upload
                     maxWidth="16vw"
                     fileNames={fileNames}
                     setFileNames={setFileNames}
                     addImageForAnoucement={addImageForAnoucement}
                  />
                  <AddPhotoInfo>
                     <AddPhotoReview>Add photos to the review</AddPhotoReview>
                     <UploadPhotoInfo>
                        it will become more noticeable and even more useful.
                        <br /> You can upload up to 4 photos.
                     </UploadPhotoInfo>
                  </AddPhotoInfo>
               </div>
            </AddPhotoBlock>
            <HomeTypeBlock>
               <StyledLabel>Home type</StyledLabel>
               <ApartmentAndHouseBlock>
                  <div className="checkboxContainer">
                     <Controller
                        name="houseType"
                        control={control}
                        render={({ field }) => (
                           <Input
                              {...field}
                              id="apartment"
                              barsbek="nekrash"
                              type="radio"
                              value="apartment"
                              width="1.25rem"
                              marginLeft="-22.8125rem"
                              marginRight="2.rem"
                           />
                        )}
                     />
                     <StyledLabel htmlFor="apartment">Apartment</StyledLabel>
                  </div>
                  <div className="checkboxContainer">
                     <Controller
                        name="houseType"
                        control={control}
                        render={({ field }) => (
                           <Input
                              {...field}
                              id="house"
                              barsbek="nekrash"
                              type="radio"
                              value="house"
                              marginLeft="2.5rem"
                              width="1.25rem"
                           />
                        )}
                     />
                     <StyledLabel htmlFor="house">House</StyledLabel>
                  </div>
               </ApartmentAndHouseBlock>
               <IsError>{errors.houseType?.message}</IsError>
            </HomeTypeBlock>
            <FilterBlock>
               <GuestBlock>
                  <StyledLabel htmlFor="maxGuests">Max of Guests</StyledLabel>
                  <Input
                     {...register('maxGuests')}
                     size="small"
                     type="number"
                     placeholder="    0"
                     width="15.3125rem"
                     height="2.4375rem"
                     id="guest"
                     padding="0 0 0.625rem 0"
                     error={!!errors.maxGuests}
                  />
                  <IsError>{errors.maxGuests?.message}</IsError>
               </GuestBlock>
               <PriceBlock>
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
               </PriceBlock>
            </FilterBlock>
            <TitleBlock>
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
            </TitleBlock>
            <DescriptionBlock>
               <StyledLabel htmlFor="description">
                  Description of listing
               </StyledLabel>
               <StyledTextArea
                  {...register('description')}
                  id="description"
                  style={{
                     border: errors.description
                        ? '1px solid red'
                        : '1px solid gray',
                  }}
               />
               <IsError>{errors.description?.message}</IsError>
            </DescriptionBlock>
            <RegionBlock>
               <StyledLabel htmlFor="region">Region</StyledLabel>
               <Select
                  register={register}
                  data={data}
                  width="100%"
                  id="region"
                  error={!!errors.region}
                  labelName={
                     <SelectLabelName>Please select the region</SelectLabelName>
                  }
               />
               <IsError>{errors.region?.message}</IsError>
            </RegionBlock>
            <TownBlock>
               <StyledLabel htmlFor="province">Town / Province</StyledLabel>
               <Input
                  {...register('province')}
                  id="province"
                  type="text"
                  barsbek="krash"
                  width="100%"
                  height="2.4375rem"
                  size="small"
                  error={!!errors.province}
                  placeholder=" "
               />
               <IsError>{errors.province?.message}</IsError>
            </TownBlock>
            <AddressBlock>
               <StyledLabel htmlFor="address">Address</StyledLabel>
               <Input
                  {...register('address')}
                  id="address"
                  type="text"
                  size="small"
                  barsbek="krash"
                  width="100%"
                  height="2.4375rem"
                  error={!!errors.address}
                  placeholder="  "
               />
               <IsError>{errors.address?.message}</IsError>
            </AddressBlock>
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
      color: '#363636',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      textTransform: 'uppercase',
      marginTop: '2.5rem',
   },

   p: {
      width: '38.125rem',
      color: '#646464',
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
      marginTop: '0.0625rem',
   },
}))

const StyledSpan = styled('span')(() => ({
   color: '#363636',
   marginRight: '1rem',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontweight: ' 400',
   lineheight: 'normal',
}))

const QuantityForPhoto = styled('span')(() => ({
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontweight: ' 400',
   lineheight: 'normal',
   color: '#A9A9A9',
}))

const AddPhotoInfo = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   gap: '0.5rem',
   marginLeft: '1.25rem',
}))

const AddPhotoReview = styled('span')(() => ({
   color: '#266BD3',
   fontWeight: '500',
}))

const UploadPhotoInfo = styled('span')(() => ({
   color: '#828282',
   fontSize: '0.875rem',
   fontHeight: '400',
}))

const HomeTypeBlock = styled('div')(() => ({
   marginTop: '1.75rem',
   marginBottom: '.9375rem',
   height: '5.3125rem',
}))

const StyledLabel = styled('label')(() => ({
   color: ' #363636',
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

const SelectLabelName = styled('span')(() => ({
   color: '#C4C4C4',
}))

const ApartmentAndHouseBlock = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-start',
   gap: '2.5rem',

   '.checkboxContainer': {
      width: '20%',
      display: 'flex',
      justifyContent: 'flex-start',
   },
}))

const FilterBlock = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'row',
   gap: '1.25rem',
   marginBottom: ' 2.75rem',
   height: '4.5625rem',
}))

const GuestBlock = styled('div')(() => ({
   width: '15.625rem',
   display: 'flex',
   flexDirection: 'column',
}))

const PriceBlock = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
}))

const TitleBlock = styled('div')(() => ({
   marginBottom: '2.1875rem',
   height: '4.5625rem',
}))

const DescriptionBlock = styled('div')(() => ({
   marginBottom: '.4375rem',
   height: '10rem',
}))

const RegionBlock = styled('div')(() => ({
   marginRight: '.625rem',
   marginBottom: '.0625rem',
   height: '7.5rem',
}))

const TownBlock = styled('div')(() => ({
   marginBottom: '1.75rem',
   height: '4.5625rem',
}))

const AddressBlock = styled('div')(() => ({
   height: '4.5625rem',
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

const StyledTextArea = styled('textarea')(() => ({
   width: '100%',
   height: '6.5rem',

   padding: '.625rem 0 0 .625rem',

   borderRadius: '0.125rem',
   border: '1px solid gray',

   resize: 'none',
   overflow: 'hidden',
}))
