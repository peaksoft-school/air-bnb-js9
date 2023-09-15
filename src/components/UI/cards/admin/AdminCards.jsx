import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'

import ModalProfile from '../../../Profile/ModalProfile'
import { ModalNameHotel } from '../../name-hotel/ModalNameHotel'
import { toastSnackbar } from '../../snackbar/Snackbar'
import { CardItem } from './CardItem'

export function AdminCards({
   data,
   image,
   title,
   meatballs,
   removeCard,
   imagesClick,
   acceptHandler,
   changeHandler,
   rejectedHandler,
   removeAllHousing,
}) {
   const [currentImages, setCurrentImages] = useState([])
   const [openModal, setOpenModal] = useState(false)
   const [currentEl, setCurrentEl] = useState(null)
   const [itemId, setItemId] = useState('')
   const [dataa, setData] = useState([])
   const [id, setId] = useState(null)
   const [idAllHousing, setIdAllHousing] = useState('')
   const [openAllHouseModal, setOpenAllHouseModal] = useState(false)
   const { toastType } = toastSnackbar()

   console.log(data, 'data in date')

   useEffect(() => {
      setData(data?.map((item) => ({ ...item, open: false })))
      setCurrentImages(data?.map(() => 0))
   }, [data])

   const handlePrevImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === 0
               ? dataa[index].images.images.length - 1
               : newImages[index] - 1
         return newImages
      })
   }

   const handleNextImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === dataa[index].images.images.length - 1
               ? 0
               : newImages[index] + 1
         return newImages
      })
   }

   const handleMenuOpen = (e, id) => {
      setCurrentEl(e.currentTarget)
      setItemId(id)
   }

   const closeMeatBallsHeandler = () => {
      setCurrentEl(null)
   }

   const openModalHandler = (id) => {
      setOpenModal((prev) => !prev)
      setCurrentEl(null)
      setId(id)
   }

   const rejectedCartd = async () => {
      try {
         rejectedHandler(id)
         setOpenModal(false)
         toastType('success', 'Successfully sent :)')
      } catch (error) {
         toastType('error', error)
      }
   }
   const openModalAllHousing = (itemId) => {
      data?.map((item) => {
         if (item.id === itemId) {
            setIdAllHousing(item)
            return item
         }
         return item
      })
      setOpenAllHouseModal(true)
   }
   const open = Boolean(currentEl)
   const idd = open ? 'simple-popover' : undefined

   return (
      <Container>
         <div className="block">
            {openAllHouseModal ? (
               <ModalProfile
                  data={idAllHousing}
                  itemId={idAllHousing.id}
                  setModalVisible={setOpenAllHouseModal}
                  handleMenuClose={closeMeatBallsHeandler}
               />
            ) : null}
            <ModalNameHotel
               openModal={openModal}
               openModalHandler={openModalHandler}
               rejectedCartd={rejectedCartd}
               title={title}
               changeHandler={changeHandler}
            />
            {data?.length > 0 ? (
               data?.map((item, index) => (
                  <CardItem
                     open={open}
                     idd={idd}
                     image={image}
                     item={item}
                     index={index}
                     imagesClick={imagesClick}
                     key={item.id}
                     currentEl={currentEl}
                     openModalAllHousing={openModalAllHousing}
                     handleMenuOpen={handleMenuOpen}
                     handleNextImage={handleNextImage}
                     handlePrevImage={handlePrevImage}
                     itemId={itemId}
                     currentImages={currentImages}
                     meatballs={meatballs}
                     removeCard={removeCard}
                     acceptHandler={acceptHandler}
                     removeAllHousing={removeAllHousing}
                     openModalHandler={openModalHandler}
                     closeMeatBallsHeandler={closeMeatBallsHeandler}
                  />
               ))
            ) : (
               <h2>No cards yet...</h2>
            )}
         </div>
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
   padding: '1.81rem 2.25rem ',

   '.block': {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      gap: '1.25rem',
   },
}))
