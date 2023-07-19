import { styled } from '@mui/material'
import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

export function MyImageGallery({ images }) {
   return (
      <Container>
         <ImageGallery
            className="head"
            items={images}
            showPlayButton={false}
            showNav={false}
         />
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '50%',
   height: '30vh',
}))
