import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { styled } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../UI/input/Input'
import { Select } from '../UI/select/Select'
import { Upload } from '../UI/upload-img/Upload'
import { addRegions, schema } from '../../utils/helpers'
import { toastSnackbar } from '../UI/snackbar/Snackbar'
import { Header } from '../../layout/Header/Header'
import { Footer } from '../../layout/Footer/Footer'
import { Button } from '../UI/button/Button'
import { editAnouncement } from '../../store/profile/ProfileThunk'

export function ModalProfile() {
   const [fileNames, setFileNames] = useState([])
   const [regionSelected, setRegionSelected] = useState(false)
   const { toastType } = toastSnackbar()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { announcement } = useSelector((state) => state.annByID)
   const { images } = useSelector((state) => state.uploadImg)

   const initialValues = {
      houseType: announcement.houseType || '',
      price: announcement.priceDay || '200',
      maxGuests: announcement.maxGuests || '',
      description: announcement.description || '',
      title: announcement.title || '',
      province: announcement.province || '',
      region: announcement.region || 'CHUI',
      address: announcement.address || '',
      images: announcement.images || '',
   }
   const postAnouncementForm = async (editData) => {
      dispatch(editAnouncement({ editData, id: announcement.id, toastType }))
   }

   const {
      register,
      handleSubmit,
      formState: { errors },
      control,
   } = useForm({
      defaultValues: initialValues,
      resolver: yupResolver(schema),
   })

   const onSubmit = (data) => {
      data.images = images
      postAnouncementForm(data)
      console.log(data)
      navigate('/Profile/my-announcement')
   }

   return (
      <>
         <Header login="false" />
         <GlobalContainer>
            <Container onSubmit={handleSubmit(onSubmit)}>
               <h2>Hi! Let`s get started listing your place.</h2>
               <p>
                  In this form, we`ll collect some basic and additional
                  information about your listing.
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
                     />
                     <AddPhotoInfo>
                        <AddPhotoReview>
                           Add photos to the review
                        </AddPhotoReview>
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
                                 value="APARTMENT"
                                 checked={field.value === 'APARTMENT'} // Устанавливаем checked в зависимости от значения field.value
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
                                 value="HOUSE"
                                 checked={field.value === 'HOUSE'} // Устанавливаем checked в зависимости от значения field.value
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
                     <StyledLabel htmlFor="maxGuests">
                        Max of Guests
                     </StyledLabel>
                     <InputPriceAndMaxGuest
                        id="guest"
                        size="small"
                        type="number"
                        placeholder="0"
                        barsbek="nekrash"
                        {...register('maxGuests')}
                        error={!!errors.maxGuests}
                        style={{
                           '&::placeholder': {
                              color: '#fff',
                           },
                        }}
                        defaultValue={initialValues.maxGuests}
                     />
                     <IsError>{errors.maxGuests?.message}</IsError>
                  </GuestBlock>
                  <PriceBlock>
                     <StyledLabel htmlFor="price">Price</StyledLabel>
                     <InputPriceAndMaxGuest
                        id="price"
                        size="small"
                        type="number"
                        barsbek="nekrash"
                        placeholder="$ 0"
                        {...register('price')}
                        error={!!errors.price}
                        defaultValue={initialValues.price}
                     />
                     <IsError>{errors.price?.message}</IsError>
                  </PriceBlock>
               </FilterBlock>
               <TitleBlock>
                  <StyledLabel htmlFor="title">Title</StyledLabel>
                  <InputTitle
                     id="title"
                     type="text"
                     size="small"
                     placeholder="Enter a title..."
                     barsbek="nekrash"
                     {...register('title')}
                     error={!!errors.title}
                     defaultValue={initialValues.title}
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
                     placeholder="Enter a description..."
                     style={{
                        border: errors.description
                           ? '1px solid red'
                           : '1px solid gray',
                     }}
                     defaultValue={initialValues.description}
                  />
                  <IsError>{errors.description?.message}</IsError>
               </DescriptionBlock>
               <RegionBlock>
                  <StyledLabel htmlFor="region">Region</StyledLabel>
                  <Select
                     register={register}
                     data={addRegions}
                     width="100%"
                     id="region"
                     error={!!errors.region}
                     labelName={
                        <SelectLabelName
                           style={{
                              display: regionSelected ? 'none' : 'block',
                           }}
                        >
                           Please select the region
                        </SelectLabelName>
                     }
                     onChange={() => setRegionSelected(true)}
                     defaultValue={initialValues.region}
                  />
                  <IsError>{errors.region?.message}</IsError>
               </RegionBlock>
               <TownBlock>
                  <StyledLabel htmlFor="province">Town / Province</StyledLabel>
                  <InputProvinceAndAddres
                     type="text"
                     size="small"
                     id="province"
                     placeholder="Enter the town..."
                     barsbek="nekrash"
                     error={!!errors.province}
                     {...register('province')}
                     defaultValue={initialValues.province}
                  />
                  <IsError>{errors.province?.message}</IsError>
               </TownBlock>
               <AddressBlock>
                  <StyledLabel htmlFor="address">Address</StyledLabel>
                  <Controller
                     name="address"
                     control={control}
                     render={({ field }) => (
                        <InputProvinceAndAddres
                           type="text"
                           size="small"
                           id="address"
                           placeholder="Enter the address..."
                           barsbek="nekrash"
                           error={!!errors.address}
                           defaultValue={initialValues.address}
                           {...field.value}
                        />
                     )}
                  />

                  <IsError>{errors.address?.message}</IsError>
               </AddressBlock>
               <ButtonBlock>
                  <Button
                     variant="contained"
                     bgColor="#DD8A08"
                     color="#fff"
                     width="12rem"
                     onClick={() => navigate(-1)}
                  >
                     Cencel
                  </Button>
                  <SubmitInput type="submit" value="Submit" />
               </ButtonBlock>
            </Container>
         </GlobalContainer>
         <Footer />
      </>
   )
}

const GlobalContainer = styled('div')(() => ({
   width: '100%',
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '4rem',
   background: '#fff',
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
   gap: '4rem',
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
   resize: 'none',
   overflow: 'hidden',
   border: '1px solid gray',
   background: 'rgba(0,0,0,0.0)',
   '#description::placeholder': {
      color: '#000',
   },
}))

const InputPriceAndMaxGuest = styled(Input)(() => ({
   width: '15.3125rem',
   height: '2.4375rem',
   padding: '0 0 0.625rem 0',
   border: '1px solid gray',
   borderRadius: ' 0.125rem',
   '#guest::placeholder': {
      color: '#000',
   },
   '#price::placeholder': {
      color: '#000',
   },
}))
const InputTitle = styled(Input)(() => ({
   width: '100%',
   height: '2.4375rem',
   border: '1px solid gray',
   borderRadius: ' 0.125rem',
   '#title::placeholder': {
      color: '#000',
   },
}))
const InputProvinceAndAddres = styled(Input)(() => ({
   width: '100%',
   height: '2.4375rem',
   border: '1px solid gray',

   '#province::placeholder': {
      color: '#000',
   },

   '#address::placeholder': {
      color: '#000',
   },
}))
// const RegionSelect = styled(Select)(() => ({
//    width: '100%',
//    border: '1px solid gray',
//    '&:hover': {
//       background: 'rgba(0,0,0,0.0)',
//       border: '1px solid gray',
//    },
//    '#region::placeholder': {
//       color: '#000',
//    },
// }))
