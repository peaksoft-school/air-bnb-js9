/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { styled } from '@mui/material'
import { UploadImg } from '../../assets/icons'

export function Upload() {
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
            <DropzoneContainer {...getRootProps()}>
               <input {...getInputProps()} />
               {isDragActive ? (
                  <p>Drop the files here...</p>
               ) : (
                  showCamera && <CameraIcon />
               )}
            </DropzoneContainer>
            <ImageContainer>
               {images.map((img, index) => (
                  <Image key={index} src={img} alt={fileNames[index]} />
               ))}
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

const DropzoneContainer = styled('div')`
   background: #f3f3f3;
   width: 8.4375rem;
   height: 8.4375rem;
   display: flex;
   align-items: center;
   justify-content: center;
   &:active {
      border: 1px solid silver;
   }
`

const CameraIcon = styled(UploadImg)`
   width: 2.7rem;
   height: 2.7rem;
`

const Form = styled('form')`
   background: #f3f3f3;
   width: 8.4375rem;
   height: 8.4375rem;
   display: flex;
   align-items: center;
   justify-content: center;
   &:active {
      border: 1px solid silver;
   }
`

const ImageContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 0.5rem;
`

const Image = styled('img')`
   width: 3rem;
   height: 3rem;
   border: 1px solid;
   border-radius: 5px;
`
