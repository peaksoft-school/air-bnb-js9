import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { styled } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Input } from '../../../components/UI/input/Input'
import { Select } from '../../../components/UI/select/Select'
import { Upload } from '../../../components/UI/upload-img/Upload'
import { addRegions, schema } from '../../../utils/helpers'
import { addAnouncement } from '../../../api/anouncementService'
import { toastSnackbar } from '../../../components/UI/snackbar/Snackbar'
import { Header } from '../../../layout/header/Header'
import { Footer } from '../../../layout/footer/Footer'
import Modal from '../../../components/UI/modal/Modal'
import { Button } from '../../../components/UI/button/Button'

export function AddAnouncementForm() {
   const [fileNames, setFileNames] = useState([])
   const [openModal, setOpenModal] = useState(false)
   const [regionSelected, setRegionSelected] = useState(false)
   const { isAuthorization } = useSelector((state) => state.auth)
   const { darkMode } = useSelector((state) => state.darkMode)
   const { images } = useSelector((state) => state.uploadImg)
   const { region, houseId } = useParams()
   const { toastType } = toastSnackbar()
   const navigate = useNavigate()

   const postAnouncementForm = async (payload) => {
      try {
         const response = await addAnouncement(payload)
         toastType('success', 'Ad added successfully!', response.data.message)
         navigate(`/main/${region}/region/${houseId}/profile`)
         return response.data
      } catch (error) {
         if (!isAuthorization) {
            setOpenModal(true)
         }
         toastType('error', 'Submitted:(', 'Ad not added please try again')
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

   const closeModalHandler = () => {
      setOpenModal((prev) => !prev)
   }

   const onSubmit = (data) => {
      const slicedFileNames = images.length > 4 ? images.slice(-4) : images
      data.images = slicedFileNames
      postAnouncementForm(data)
   }

   const styledark = {
      color36: darkMode ? '#fff' : '#363636',
      color64: darkMode ? '#fff' : '#646464',
      colorA9: darkMode ? '#fff' : '#A9A9A9',
      color26: darkMode ? '#fff' : '#266BD3',
      color82: darkMode ? '#fff' : '#828282',
      color00: darkMode ? '#fff' : '#000',
      border: darkMode ? '1px solid#fff' : '1px solid gray',
      borderTextArea: darkMode ? '1px solid #fff' : '1px solid gray',
      borderAddres: darkMode ? '1px solid #fff' : 'none',
      background: darkMode
         ? 'linear-gradient(274deg, rgba(152,152,152,1) 15%, rgba(0,0,0,1) 100%)'
         : '#fff',
   }

   return (
      <>
         <Header login="false" />
         {openModal ? (
            <Modal open={openModal} onClose={closeModalHandler}>
               <WarningBlock>
                  <h2>To post an ad you must register!</h2>
                  <div>
                     <Button display="flex" onClick={closeModalHandler}>
                        Close
                     </Button>
                  </div>
               </WarningBlock>
            </Modal>
         ) : null}
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
                              />
                           )}
                        />
                        <StyledLabel
                           style={{ marginLeft: '1.0625rem' }}
                           htmlFor="apartment"
                           styledark={styledark}
                        >
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
                        <StyledLabel
                           style={{ marginLeft: '-.9375rem' }}
                           htmlFor="house"
                           styledark={styledark}
                        >
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
                        {...register('maxGuests')}
                        size="small"
                        type="number"
                        placeholder="0"
                        id="guest"
                        // padding="0 0 0.625rem 0"
                        styledark={styledark}
                        error={!!errors.maxGuests}
                     />
                     <IsError>{errors.maxGuests?.message}</IsError>
                  </GuestBlock>
                  <PriceBlock>
                     <StyledLabel htmlFor="price" styledark={styledark}>
                        Price
                     </StyledLabel>
                     <InputPriceAndMaxGuest
                        {...register('price')}
                        size="small"
                        type="number"
                        placeholder="$ 0"
                        id="price"
                        styledark={styledark}
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
                     placeholder="Enter a description..."
                     styledark={styledark}
                     style={{
                        border: errors.description
                           ? '1px solid red'
                           : styledark.borderTextArea,
                     }}
                  />
                  <IsError>{errors.description?.message}</IsError>
               </DescriptionBlock>
               <RegionBlock>
                  <StyledLabel htmlFor="region" styledark={styledark}>
                     Region
                  </StyledLabel>
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
                  />
                  <IsError>{errors.region?.message}</IsError>
               </RegionBlock>
               <TownBlock>
                  <StyledLabel htmlFor="province" styledark={styledark}>
                     Town / Province
                  </StyledLabel>
                  <InputProvinceAndAddres
                     {...register('province')}
                     id="province"
                     type="text"
                     barsbek="krash"
                     size="small"
                     styledark={styledark}
                     error={!!errors.province}
                     placeholder="Enter the town..."
                  />
                  <IsError>{errors.province?.message}</IsError>
               </TownBlock>
               <AddressBlock>
                  <StyledLabel htmlFor="address" styledark={styledark}>
                     Address
                  </StyledLabel>
                  <InputProvinceAndAddres
                     {...register('address')}
                     id="address"
                     type="text"
                     size="small"
                     styledark={styledark}
                     barsbek="krash"
                     error={!!errors.address}
                     placeholder="Enter the address..."
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
   background: styledark.background,
}))
const Container = styled('form')(({ styledark }) => ({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '5rem',
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
}))
const SelectLabelName = styled('span')(() => ({
   color: '#C4C4C4',
}))
const ApartmentAndHouseBlock = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-start',
   gap: '1.6875rem',
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
const WarningBlock = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '3.75rem',
   div: {
      display: 'flex',
      justifyContent: 'flex-end',
   },
}))
const InputTitle = styled(Input)(({ styledark }) => ({
   width: '100%',
   height: '2.6rem',
   border: styledark.border,
   borderRadius: ' 0.125rem',
   '#title::placeholder': {
      color: styledark.color00,
   },
}))
const InputProvinceAndAddres = styled(Input)(({ styledark }) => ({
   width: '100%',
   height: '2.6rem',
   border: styledark.borderAddres,
   background: 'rgba(0,0,0,0.0)',
   '#province::placeholder': {
      color: styledark.color00,
   },

   '#address::placeholder': {
      color: styledark.color00,
   },
}))
const InputPriceAndMaxGuest = styled(Input)(({ styledark }) => ({
   width: '15.3125rem',
   height: '2.6rem',
   padding: '0 0 0.625rem 0',
   border: styledark.border,
   borderRadius: ' 0.125rem',

   '&:foucused': {
      backgroundColor: '#fff',
   },
   '#guest::placeholder': {
      color: styledark.color00,
   },
   '#price::placeholder': {
      color: styledark.color00,
   },
}))
