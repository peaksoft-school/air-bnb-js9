import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import {
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   styled,
} from '@mui/material'
import * as Yup from 'yup'
import Modal from '../UI/modal/Modal'
import { Input } from '../UI/input/Input'
import { Button } from '../UI/button/Button'
import { editAnouncement } from '../../store/profile/ProfileThunk'
import { Select } from '../UI/select/Select'
import { toastSnackbar } from '../UI/snackbar/Snackbar'

const validationSchema = Yup.object().shape({
   title: Yup.string().required('title is required'),
   address: Yup.string().required('address is required'),
   maxGuests: Yup.number().required(),
   price: Yup.number().required(),
   province: Yup.string().required('province is required'),
   images: Yup.string().required('imgages is required'),
})

export function ModalProfile({ setModalVisible, setEditModalIsOpen, data }) {
   const dispatch = useDispatch()
   const { toastType } = toastSnackbar()

   const [valueSelect, setValueSelect] = useState(data.region || 'CHUI')

   const dataOption = [
      { id: 'option1', name: 'BATKEN', value: 'BATKEN' },
      { id: 'option2', name: 'JALAL_ABAD', value: 'JALAL_ABAD' },
      { id: 'option3', name: 'YSSYK-KOL', value: 'YSSYK-KOL' },
      { id: 'option4', name: 'NARYN', value: 'NARYN' },
      { id: 'option6', name: 'TALAS', value: 'TALAS' },
      { id: 'option7', name: 'CHUI', value: 'CHUI' },
      { id: 'option5', name: 'OSH', value: 'OSH' },
   ]

   const toggleHandler = () => {
      setModalVisible((prev) => !prev)
   }

   const onChangeHandler = (e) => {
      setValueSelect(e.target.value)
   }
   const itemId = data.id
   const submitHandler = (values) => {
      const saveData = {
         houseType: values.houseType,
         price: +values.price,
         region: valueSelect,
         address: values.address,
         title: values.title,
         maxGuests: +values.maxGuests,
         province: values.province,
         description: values.description,
         images: [values.images],
         status: data.status || 'BOOKED',
      }
      if (saveData) {
         dispatch(editAnouncement({ saveData, itemId, toastType }))
         toggleHandler()
         setEditModalIsOpen(false)
      }

      // eslint-disable-next-line no-undef
   }

   const { values, handleSubmit, handleChange, setValues, errors, touched } =
      useFormik({
         initialValues: {
            maxGuests: data.maxGuests || '',
            price: data.priceDay || '',
            title: data.title || '',
            address: data.address || '',
            province: data.province || '',
            images: data.images.images || '',
            description: data.description || '',
            houseType: data.houseType,
         },
         validationSchema,
         validateOnBlur: true,
         onSubmit: (values) => {
            submitHandler(values)
         },
      })

   useEffect(() => {
      if (data) {
         setValues({
            maxGuests: data.maxGuests || '',
            price: data.priceDay || '',
            title: data.title || '',
            address: data.address || '',
            province: data.province || '',
            images: (data.images && data.images[0]) || '',
            description: data.description || '',
            houseType: data.houseType || '',
            status: data.status || '',
         })
      }
   }, [data])

   return (
      <Modal width="auto" height="auto" open={setModalVisible}>
         <FormStyle onSubmit={handleSubmit}>
            <StyleModalContainer>
               <InputContainer>
                  <StyleRadioContainer>
                     <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                           House type
                        </FormLabel>
                        <RadioGroup
                           aria-labelledby="demo-radio-buttons-group-label"
                           name="houseType"
                           defaultValue={values.houseType}
                           onChange={handleChange}
                           style={{ display: 'flex', flexDirection: 'row' }}
                        >
                           <FormControlLabel
                              value="APARTMENT"
                              control={<Radio />}
                              label="APARTMENT"
                           />
                           <FormControlLabel
                              value="HOUSE"
                              control={<Radio />}
                              label="HOUSE"
                           />
                        </RadioGroup>
                     </FormControl>
                  </StyleRadioContainer>
                  <Input
                     label="title"
                     name="title"
                     value={values.title}
                     onChange={handleChange}
                     error={touched.title && Boolean(errors.title)}
                     helperText={touched.title && errors.title}
                  />{' '}
                  <Input
                     label="images"
                     name="images"
                     value={values.images}
                     onChange={handleChange}
                     error={touched.images && Boolean(errors.images)}
                     helperText={touched.images && errors.images}
                  />{' '}
                  <Input
                     label="address"
                     name="address"
                     value={values.address}
                     onChange={handleChange}
                     error={touched.address && Boolean(errors.address)}
                     helperText={touched.address && errors.address}
                  />
                  <Input
                     label="pice"
                     name="price"
                     value={values.price}
                     onChange={handleChange}
                     error={touched.price && Boolean(errors.price)}
                     helperText={touched.price && errors.price}
                  />
               </InputContainer>
               <InputContainerSecond>
                  <RegionBlock>
                     <StyledLabel htmlFor="region">Region</StyledLabel>
                     <Select
                        value={valueSelect}
                        onChange={onChangeHandler}
                        data={dataOption}
                        width="100%"
                        id="region"
                        error={!!errors.region}
                        defaultValue={data.region}
                        labelName={
                           <SelectLabelName>
                              Please select the region
                           </SelectLabelName>
                        }
                     />
                     <IsError>{errors.region?.message}</IsError>
                  </RegionBlock>

                  <Input
                     label="maxGuests"
                     name="maxGuests"
                     value={values.maxGuests}
                     onChange={handleChange}
                     error={touched.maxGuests && Boolean(errors.maxGuests)}
                     helperText={touched.maxGuests && errors.maxGuests}
                  />

                  <Input
                     label="province"
                     name="province"
                     value={values.province}
                     onChange={handleChange}
                     error={touched.province && Boolean(errors.province)}
                     helperText={touched.province && errors.province}
                  />
                  <Input
                     label="description"
                     name="description"
                     value={values.description}
                     onChange={handleChange}
                     error={touched.description && Boolean(errors.description)}
                     helperText={touched.description && errors.description}
                  />
               </InputContainerSecond>
            </StyleModalContainer>
            <StyleButtonContainer>
               <Button
                  width="8rem"
                  height="2.5rem"
                  color="white"
                  variant="contained"
                  bgColor="#DD8A08"
                  type="submit"
               >
                  Save
               </Button>
               <Button
                  width="8rem"
                  height="2.5rem"
                  color="white"
                  variant="contained"
                  bgColor="#DD8A08"
                  onClick={toggleHandler}
               >
                  Cancel
               </Button>
            </StyleButtonContainer>
         </FormStyle>
      </Modal>
   )
}

const FormStyle = styled('form')`
   width: 100%;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
`
const SelectLabelName = styled('span')(() => ({
   color: '#C4C4C4',
}))

const IsError = styled('span')(() => ({
   color: 'red',
}))
const RegionBlock = styled('div')(() => ({
   marginRight: '.625rem',
   height: '7.5rem',
   paddingTop: '1rem',
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

const StyleModalContainer = styled('div')`
   display: flex;
   justify-content: center;
   gap: 5rem;
   align-items: center;
`

const StyleButtonContainer = styled('div')`
   width: 100%;
   padding-top: 3rem;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 2rem;
`

const InputContainer = styled('div')`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   gap: 1rem;
`
const InputContainerSecond = styled('div')`
   padding-top: 5.2rem;
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   gap: 1rem;
`

const StyleRadioContainer = styled('div')`
   width: 100%;
   display: flex;
   justify-content: space-around;
   margin-top: 21px;
   padding-bottom: 2rem;
`

export default ModalProfile
