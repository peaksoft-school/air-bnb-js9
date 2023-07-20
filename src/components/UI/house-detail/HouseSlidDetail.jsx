import React from 'react'
import { styled } from '@mui/material'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

export function HouseSlidDetail({ images }) {
   return (
      <Container>
         <ImageGallery
            items={images}
            showPlayButton={false}
            showNav={false}
            showFullscreenButton={false}
            originalWidth={800}
            originalHeight={400}
            thumbnailHeight={500}
            thumbnailWidth={400}
         />
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '26%',
}))
