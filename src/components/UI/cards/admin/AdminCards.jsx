import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { ModalProfile } from '../../../../pages/user
// /announcement-get-all/get-by-id/profile/ModalProfile'
import { ModalNameHotel } from '../../name-hotel/ModalNameHotel'
import { toastSnackbar } from '../../snackbar/Snackbar'
import { CardItem } from './CardItem'

export function AdminCards({
   data,
   image,
   title,
   toPath,
   padding,
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
   const { toastType } = toastSnackbar()

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

   const open = Boolean(currentEl)
   const idd = open ? 'simple-popover' : undefined

   return (
      <Container padding={padding}>
         <div className="block">
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
                     idd={idd}
                     open={open}
                     item={item}
                     key={item.id}
                     image={image}
                     index={index}
                     itemId={itemId}
                     toPath={toPath}
                     meatballs={meatballs}
                     currentEl={currentEl}
                     removeCard={removeCard}
                     imagesClick={imagesClick}
                     currentImages={currentImages}
                     acceptHandler={acceptHandler}
                     handleMenuOpen={handleMenuOpen}
                     handlePrevImage={handlePrevImage}
                     handleNextImage={handleNextImage}
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

const Container = styled('div')(({ padding }) => ({
   width: '100%',
   padding: padding || '',

   '.block': {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      gap: '1.25rem',
      h2: {
         margin: '0 auto',
      },
   },
}))
