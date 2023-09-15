import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { styled } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Input } from '../UI/input/Input'
import { Select } from '../UI/select/Select'
import { Upload } from '../UI/upload-img/Upload'
import { schema } from '../../utils/helpers'
import { addAnouncement } from '../../api/anouncementService'
import { toastSnackbar } from '../UI/snackbar/Snackbar'
import { Header } from '../../layout/header/Header'
import { Footer } from '../../layout/footer/Footer'

const data = [
   { id: 'option1', name: 'BATKEN' },
   { id: 'option2', name: 'JALAL_ABAD' },
   { id: 'option3', name: 'YSSYK-KOL' },
   { id: 'option4', name: 'NARYN' },
   { id: 'option5', name: 'OSH' },
   { id: 'option6', name: 'TALAS' },
   { id: 'option7', name: 'CHUI' },
]

export function AddAnouncementForm() {
   const [fileNames, setFileNames] = useState([])
   const { toastType } = toastSnackbar()
   const navigate = useNavigate()
   const { darkMode } = useSelector((state) => state.darkMode)
   const { images } = useSelector((state) => state.uploadImg)

   const darkmode = darkMode
   const postAnouncementForm = async (payload) => {
      try {
         const response = await addAnouncement(payload)
         toastType('success', 'Ad added successfully!')
         navigate('/')

         return response.data
      } catch (error) {
         toastType('error', 'Error!')
      }
      return payload
   }

   const {
      register,
      handleSubmit,
      formState: { errors },
      control,
   } = useForm({
      resolver: yupResolver(schema),
   })

   const onSubmit = (data) => {
      data.images = images
      postAnouncementForm(data)
   }

   const borderTextArea = darkmode ? '1px solid #fff' : '1px solid gray'

   const styledark = {
      color36: darkmode ? '#fff' : '#363636',
      color64: darkmode ? '#fff' : '#646464',
      colorA9: darkmode ? '#fff' : '#A9A9A9',
      color26: darkmode ? '#fff' : '#266BD3',
      color82: darkmode ? '#fff' : '#828282',
      color00: darkmode ? '#fff' : '#000',

      border: darkmode ? '1px solid#fff' : '1px solid gray',
      background: darkmode
         ? 'linear-gradient(274deg, rgba(152,152,152,1) 15%, rgba(0,0,0,1) 100%)'
         : '#fff',
   }
   return (
      <>
         <Header login="false" />
         <GlobalContainer styledark={styledark}>
            <Container onSubmit={handleSubmit(onSubmit)} styledark={styledark}>
               <h2>Hi! Let`s get started listing your place.</h2>
               <p>
                  In this form, we`ll collect some basic and additional
                  information about your listing.
               </p>
               <AddPhotoBlock>
                  <div>
                     <StyledSpan styledark={styledark}>Image</StyledSpan>
                     <QuantityForPhoto styledark={styledark}>
                        Max 4 photo
                     </QuantityForPhoto>
                  </div>
                  <div style={{ marginTop: '1.125rem' }}>
                     <Upload
                        maxWidth="16vw"
                        fileNames={fileNames}
                        setFileNames={setFileNames}
                     />
                     <AddPhotoInfo>
                        <AddPhotoReview styledark={styledark}>
                           Add photos to the review
                        </AddPhotoReview>
                        <UploadPhotoInfo styledark={styledark}>
                           it will become more noticeable and even more useful.
                           <br /> You can upload up to 4 photos.
                        </UploadPhotoInfo>
                     </AddPhotoInfo>
                  </div>
               </AddPhotoBlock>
               <HomeTypeBlock>
                  <StyledLabel styledark={styledark}>Home type</StyledLabel>
                  <ApartmentAndHouseBlock styledark={styledark}>
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
                                 border="none"
                                 value="apartment"
                              />
                           )}
                        />
                        <StyledLabel htmlFor="apartment" styledark={styledark}>
                           Apartment
                        </StyledLabel>
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
                              />
                           )}
                        />
                        <StyledLabel htmlFor="house" styledark={styledark}>
                           House
                        </StyledLabel>
                     </div>
                  </ApartmentAndHouseBlock>
                  <IsError>{errors.houseType?.message}</IsError>
               </HomeTypeBlock>
               <FilterBlock>
                  <GuestBlock>
                     <StyledLabel htmlFor="maxGuests" styledark={styledark}>
                        Max of Guests
                     </StyledLabel>
                     <InputPriceAndMaxGuest
                        id="guest"
                        size="small"
                        type="number"
                        placeholder="0"
                        barsbek="nekrash"
                        styledark={styledark}
                        {...register('maxGuests')}
                        error={!!errors.maxGuests}
                        style={{
                           '&::placeholder': {
                              color: '#fff',
                           },
                        }}
                     />
                     <IsError>{errors.maxGuests?.message}</IsError>
                  </GuestBlock>
                  <PriceBlock>
                     <StyledLabel htmlFor="price" styledark={styledark}>
                        Price
                     </StyledLabel>
                     <InputPriceAndMaxGuest
                        id="price"
                        size="small"
                        type="number"
                        barsbek="nekrash"
                        placeholder="$ 0"
                        styledark={styledark}
                        {...register('price')}
                        error={!!errors.price}
                     />
                     <IsError>{errors.price?.message}</IsError>
                  </PriceBlock>
               </FilterBlock>
               <TitleBlock>
                  <StyledLabel htmlFor="title" styledark={styledark}>
                     Title
                  </StyledLabel>
                  <InputTitle
                     id="title"
                     type="text"
                     size="small"
                     placeholder="Enter a title..."
                     barsbek="nekrash"
                     styledark={styledark}
                     {...register('title')}
                     error={!!errors.title}
                  />
                  <IsError>{errors.title?.message}</IsError>
               </TitleBlock>
               <DescriptionBlock>
                  <StyledLabel htmlFor="description" styledark={styledark}>
                     Description of listing
                  </StyledLabel>
                  <StyledTextArea
                     {...register('description')}
                     id="description"
                     styledark={styledark}
                     placeholder="Enter a description..."
                     style={{
                        border: errors.description
                           ? '1px solid red'
                           : borderTextArea,
                     }}
                  />
                  <IsError>{errors.description?.message}</IsError>
               </DescriptionBlock>
               <RegionBlock>
                  <StyledLabel htmlFor="region" styledark={styledark}>
                     Region
                  </StyledLabel>
                  <RegionSelect
                     register={register}
                     data={data}
                     id="region"
                     error={!!errors.region}
                     styledark={styledark}
                     labelName={
                        <SelectLabelName>
                           Please select the region
                        </SelectLabelName>
                     }
                  />
                  <IsError>{errors.region?.message}</IsError>
               </RegionBlock>
               <TownBlock>
                  <StyledLabel htmlFor="province" styledark={styledark}>
                     Town / Province
                  </StyledLabel>
                  <InputProvinceAndAddres
                     type="text"
                     size="small"
                     id="province"
                     placeholder="Enter the town..."
                     barsbek="nekrash"
                     styledark={styledark}
                     error={!!errors.province}
                     {...register('province')}
                  />
                  <IsError>{errors.province?.message}</IsError>
               </TownBlock>
               <AddressBlock>
                  <StyledLabel htmlFor="address" styledark={styledark}>
                     Address
                  </StyledLabel>
                  <InputProvinceAndAddres
                     type="text"
                     size="small"
                     id="address"
                     placeholder="Enter the address..."
                     barsbek="nekrash"
                     styledark={styledark}
                     error={!!errors.address}
                     {...register('address')}
                  />
                  <IsError>{errors.address?.message}</IsError>
               </AddressBlock>
               <ButtonBlock>
                  <SubmitInput type="submit" value="Submit" />
               </ButtonBlock>
            </Container>
         </GlobalContainer>
         <Footer />
      </>
   )
}

const GlobalContainer = styled('div')(({ styledark }) => ({
   width: '100%',
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '4rem',
   background: styledark.background,
}))

const Container = styled('form')(({ styledark }) => ({
   display: 'flex',
   flexDirection: 'column',

   h2: {
      color: styledark.color36,
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      textTransform: 'uppercase',
      marginTop: '2.5rem',
   },

   p: {
      width: '38.125rem',
      color: styledark.color64,
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

const StyledSpan = styled('span')(({ styledark }) => ({
   color: styledark.color36,
   marginRight: '1rem',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontweight: ' 400',
   lineheight: 'normal',
}))

const QuantityForPhoto = styled('span')(({ styledark }) => ({
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontweight: ' 400',
   lineheight: 'normal',
   color: styledark.colorA9,
}))

const AddPhotoInfo = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   gap: '0.5rem',
   marginLeft: '1.25rem',
}))

const AddPhotoReview = styled('span')(({ styledark }) => ({
   color: styledark.color26,
   fontWeight: '500',
}))

const UploadPhotoInfo = styled('span')(({ styledark }) => ({
   color: styledark.color82,
   fontSize: '0.875rem',
   fontHeight: '400',
}))

const HomeTypeBlock = styled('div')(() => ({
   marginTop: '1.75rem',
   marginBottom: '.9375rem',
   height: '5.3125rem',
}))

const StyledLabel = styled('label')(({ styledark }) => ({
   color: styledark.color36,
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

const StyledTextArea = styled('textarea')(({ styledark }) => ({
   width: '100%',
   height: '6.5rem',
   padding: '.625rem 0 0 .625rem',
   borderRadius: '0.125rem',
   resize: 'none',
   overflow: 'hidden',
   border: styledark.border,
   background: 'rgba(0,0,0,0.0)',
   '#description::placeholder': {
      color: styledark.color00,
   },
}))

const InputPriceAndMaxGuest = styled(Input)(({ styledark }) => ({
   width: '15.3125rem',
   height: '2.4375rem',
   padding: '0 0 0.625rem 0',
   border: styledark.border,
   borderRadius: ' 0.125rem',
   '#guest::placeholder': {
      color: styledark.color00,
   },
   '#price::placeholder': {
      color: styledark.color00,
   },
}))
const InputTitle = styled(Input)(({ styledark }) => ({
   width: '100%',
   height: '2.4375rem',
   border: styledark.border,
   borderRadius: ' 0.125rem',
   '#title::placeholder': {
      color: styledark.color00,
   },
}))
const InputProvinceAndAddres = styled(Input)(({ styledark }) => ({
   width: '100%',
   height: '2.4375rem',
   border: styledark.border,

   '#province::placeholder': {
      color: styledark.color00,
   },

   '#address::placeholder': {
      color: styledark.color00,
   },
}))
const RegionSelect = styled(Select)(({ styledark }) => ({
   width: '100%',
   border: styledark.border,
   '&:hover': {
      background: 'rgba(0,0,0,0.0)',
      border: styledark.border,
   },
   '#region::placeholder': {
      color: styledark.color00,
   },
}))
