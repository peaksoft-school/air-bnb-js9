import React, { useState } from 'react'
import { styled } from '@mui/material'
import { RatingStars } from '../UI/rating/RatingStars'
import { TextArea } from '../UI/textarea/TextArea'
import { Button } from '../UI/button/Button'
import { Upload } from '../UI/upload-img/Upload'

export function LeaveFeedback() {
   const [usersFeedback, setUsersFeedback] = useState('')
   const submitHandler = (e) => {
      e.preventDefault()
      console.log('usersFeedback: ', usersFeedback)
      setUsersFeedback('')
   }
   return (
      <Container onSubmit={submitHandler}>
         <StyledH3>LEAVE FEEDBACK</StyledH3>
         <UploadImgDiv>
            <Upload />
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  width: '22rem',
               }}
            >
               <StyledAhref href="!#">Add photos to the review</StyledAhref>
               <DescriptionPtag>
                  it will become more noticeable and even more useful. You can
                  upload up to 4 photos.
               </DescriptionPtag>
            </div>
         </UploadImgDiv>

         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: '0.75rem',
               alignItems: 'flex-start',
            }}
         >
            <RatePtag>Rate</RatePtag>
            <RatingStars size="large" />
         </div>
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               gap: '0.75rem',
               alignItems: 'flex-start',
            }}
         >
            <FeedBackPtag>FeedBack</FeedBackPtag>
            <TextArea
               value={usersFeedback}
               onChange={(e) => setUsersFeedback(e.target.value)}
               placeholder="Share your impressions about this place"
            />

            <div
               style={{
                  width: '100%',
                  marginTop: '1.38rem',
                  display: 'flex',
                  justifyContent: 'end',
                  gap: '0.5rem',
               }}
            >
               <Button variant="outlined" width="9.35rem">
                  Cancel
               </Button>
               <Button
                  variant="contained"
                  width="12.25rem"
                  type="submit"
                  bgColor="#DD8A08"
                  color="white"
               >
                  Public
               </Button>
            </div>
         </div>
      </Container>
   )
}

const Container = styled('form')(() => ({
   width: '45rem',
   border: '2px solid black',
   padding: '1.56rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '1.37rem',
}))

const StyledH3 = styled('p')(() => ({
   color: 'var(--primary-black, #363636)',
   fontFamily: 'Inter',
   fontWeight: '500',
   fontSize: '1.125rem',
   display: 'flex',
   justifyContent: 'center',
}))

const UploadImgDiv = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '1.25rem',
}))

const StyledAhref = styled('a')(() => ({
   color: '#266BD3',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: '500',
}))

const DescriptionPtag = styled('p')(() => ({
   color: 'var(--tertiary-middle-gray, #828282)',
   fontFamily: 'Inter',
   fontSize: '0.875rem',
   fontWeight: '400',
}))

const RatePtag = styled('p')(() => ({
   color: '#828282',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: '400',
}))

const FeedBackPtag = styled('p')(() => ({
   color: '#828282',
   fontFamily: 'Inter',
   fontSize: '1rem',
   fontWeight: '400',
}))
