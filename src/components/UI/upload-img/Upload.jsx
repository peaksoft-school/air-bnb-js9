/* eslint-disable consistent-return */
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { styled } from '@mui/material'
import axios from 'axios'
import { Exist, UploadImg } from '../../../assets/icons'

export function Upload({
   width,
   height,
   maxWidth,
   setFileNames,
   fileNames,
   addImageForAnoucement,
}) {
   const [images, setImages] = useState([])
   const [showCamera, setShowCamera] = useState(true)
   // const [uploadImage, setUploadImage] = useState('')

   const postImage = async (data) => {
      try {
         const response = await axios.post(
            'http://airbnb.peaksoftprojects.com/api/file',
            data,
            {
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            }
         )
         const uploadedimgUrl = response.data.Link
         // setUploadImage(uploadedimgUry

         addImageForAnoucement(uploadedimgUrl)
         return response.data
      } catch (error) {
         console.error('Upload error', error)
      }
   }
   // const deleteImageUrl = async (file) => {
   //    try {
   //       const response = await axios.delete(
   //          `http://airbnb.peaksoftprojects.com/api/file?fileName=${file}`
   //       )
   //       return response.data
   //    } catch (error) {
   //       console.error(error)
   //    }
   // }
   const onDrop = (acceptedFiles) => {
      const slicedFiles = acceptedFiles.slice(0, 4)

      const formData = new FormData()

      slicedFiles.forEach((file) => {
         formData.append('file', file)
      })

      const fileURLs = slicedFiles.map((file) => URL.createObjectURL(file))
      setImages((prevImages) => [...prevImages, ...fileURLs])
      setFileNames((prevFileNames) => [
         ...prevFileNames,
         ...slicedFiles.map((file) => file.name),
      ])

      if (images.length + fileURLs.length === 4) {
         setShowCamera(false)
      }
      postImage(formData)
   }

   const deleteImage = (imageURL) => {
      setImages((prevImages) => prevImages.filter((img) => img !== imageURL))
      setShowCamera(true)
      // deleteImageUrl(uploadImage)
   }

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: 'image/*',
      multiple: false,
      maxFiles: 4,
   })

   return (
      <Container>
         <Block>
            <ImageContainer maxWidth={maxWidth}>
               {images.map((img, index) => (
                  <ImageWrapper>
                     <Image src={img} alt={fileNames[index]} />

                     <ExistIcon onClick={() => deleteImage(img)} />
                  </ImageWrapper>
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
         </Block>
      </Container>
   )
}

const Container = styled('div')({
   display: 'flex',
   justifyContent: 'center',
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

const Block = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const ImageContainer = styled('div')(({ maxWidth }) => ({
   border: '1px solid silver',
   maxWidth: maxWidth || '16vw',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexWrap: 'wrap',
   gap: '3px',
}))

const ImageWrapper = styled('div')({
   position: 'relative',
   display: 'flex',
})

const Image = styled('img')(({ width, height }) => ({
   width: width || '120px',
   height: height || '125px',
   objectFit: 'cover',
}))

const ExistIcon = styled(Exist)({
   position: 'absolute',
   top: 0,
   right: 0,
   width: '28px',
   height: '28px',
   cursor: 'pointer',
})
