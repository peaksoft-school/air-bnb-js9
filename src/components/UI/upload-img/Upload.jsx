import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { styled } from '@mui/material'
import { UploadImg } from '../../../assets/icons'

export function Upload({ width, height, maxWidth }) {
   const [images, setImages] = useState([])
   const [fileNames, setFileNames] = useState([])
   const [showCamera, setShowCamera] = useState(true)

   const onDrop = (acceptedFiles) => {
      const slicedFiles = acceptedFiles.slice(0, 4)
      const fileURLs = slicedFiles.map((file) => URL.createObjectURL(file))
      setImages((prevImages) => [...prevImages, ...fileURLs])
      setFileNames((prevFileNames) => [
         ...prevFileNames,
         ...slicedFiles.map((file) => file.name),
      ])

      if (images.length + fileURLs.length === 4) {
         setShowCamera(false)
      }
   }

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: 'image/*',
      multiple: false,
      maxFiles: 4,
   })

   return (
      <Container>
         <Form>
            <ImageContainer maxWidth={maxWidth}>
               {images.map((img, index) => (
                  <Image src={img} alt={fileNames[index]} />
               ))}
               {showCamera ? (
                  <DropzoneContainer
                     {...getRootProps()}
                     width={width}
                     height={height}
                  >
                     <input {...getInputProps()} />
                     {isDragActive ? (
                        <p>Drop the files here...</p>
                     ) : (
                        <CameraIcon width={width} height={height} />
                     )}
                  </DropzoneContainer>
               ) : null}
            </ImageContainer>
         </Form>
      </Container>
   )
}

const Container = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   marginTop: '12rem',
})

const DropzoneContainer = styled('div')(({ theme, width, height }) => ({
   width: width || '120px',
   height: height || '120px',
   background: theme.palette.tertiary.lightwhite,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   cursor: 'pointer',
   p: {
      fontSize: '16px',
   },
}))

const CameraIcon = styled(UploadImg)(({ width, height }) => ({
   width: width || '30px',
   height: height || '30px',
}))

const Form = styled('form')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const ImageContainer = styled('div')(({ maxWidth }) => ({
   border: '1px solid silver',
   maxWidth: maxWidth || '16.3vw',
   display: 'flex',
   justifyContent: 'center',
   flexWrap: 'wrap',
   gap: '5px',
}))

const Image = styled('img')(({ width, height }) => ({
   width: width || '120px',
   height: height || '120px',
   objectFit: 'cover',
}))
