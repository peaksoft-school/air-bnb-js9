import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { toastSnackbar } from '../../snackbar/Snackbar'
import { postFavoriteInCard } from '../../../../store/user/search/searchThunk'
import { UserCardItem } from './UserCardItem'

export function Cards({ data }) {
   const [currentImages, setCurrentImages] = useState(
      Array.isArray(data) ? Array(data.length).fill(0) : []
   )
   const [dataa, setData] = useState([])
   const dispatch = useDispatch()
   const { toastType } = toastSnackbar()

   useEffect(() => {
      setData(
         data?.map((img) => {
            return img.images
         })
      )
   }, [setData])

   const handleNextImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === dataa[index].images.length - 1
               ? 0
               : newImages[index] + 1
         return newImages
      })
   }

   const truncateTitle = (title) => {
      const words = title.split(' ')
      if (words.length > 6) {
         return `${words.slice(0, 4).join(' ')}`
      }
      return title
   }

   const handlePrevImage = (index) => {
      setCurrentImages((prevImages) => {
         const newImages = [...prevImages]
         newImages[index] =
            newImages[index] === 0
               ? dataa[index].images.length - 1
               : newImages[index] - 1
         return newImages
      })
   }

   const postFavorite = (id) => {
      dispatch(postFavoriteInCard({ id, toastType }))
   }

   return (
      <Container>
         <MainContainer>
            {data?.map((item, index) => {
               return (
                  <UserCardItem
                     key={item.id}
                     // page={page}
                     item={item}
                     index={index}
                     postFavorite={postFavorite}
                     truncateTitle={truncateTitle}
                     currentImages={currentImages}
                     handleNextImage={handleNextImage}
                     handlePrevImage={handlePrevImage}
                  />
               )
            })}
         </MainContainer>
      </Container>
   )
}

const Container = styled('div')`
   padding-left: 6.8%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   flex-wrap: wrap;
`

const MainContainer = styled('div')`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: start;
   align-items: center;
   gap: 45px;
   margin-top: 2.5rem;
   width: 100%;
`
