import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { styled } from '@mui/material'

export function HouseSlidDetail({ images }) {
   return (
      <Container>
         <StyleImageGallery
            items={images}
            showPlayButton={false}
            showNav={false}
            originalWidth={800}
            originalHeight={400}
            thumbnailHeight={500}
            thumbnailWidth={400}
         />
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '43%',
}))
const StyleImageGallery = styled(ImageGallery)(() => ({
   width: '100vw',
   height: '100vh',
}))
