import React from 'react'
import { styled } from '@mui/material'
import { RatingChartBar } from './RatingChartBar'
import { Start1 } from '../../../assets/icons'

export function RatingChart({ starValue }) {
   const maximumRating = 35
   const rating = [
      { label: '5', currentRating: 0 },
      { label: '4', currentRating: 0 },
      { label: '3', currentRating: 0 },
      { label: '2', currentRating: 0 },
      { label: '1', currentRating: 0 },
   ]

   for (let i = 0; i < rating.length; i += 1) {
      const el = rating[i]

      if (+el.label === starValue) {
         el.currentRating = starValue
      }
   }

   return (
      <Container>
         <StarDiv>
            <StyledPtag>{starValue}</StyledPtag>
            <Star />
         </StarDiv>
         {rating.map((item) => {
            return (
               <RatingChartBar
                  key={item.label}
                  label={item.label}
                  currentRating={item.currentRating}
                  maximumRating={maximumRating}
               />
            )
         })}
      </Container>
   )
}

const Container = styled('div')(() => ({
   border: '1px solid gray',
   borderRadius: '14px',
   padding: '25px 30px 30px 10px',
   width: '27%',
}))

const StarDiv = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   marginBottom: '10px',
   marginLeft: '25px',
}))

const Star = styled(Start1)(() => ({
   width: '1.5rem',
   height: '1.5rem',
   marginLeft: '0.5rem',
}))

const StyledPtag = styled('p')(() => ({
   color: 'var(--primary-black, #363636)',
   fontFamily: 'Inter',
   fontSize: '24px',
   fontStyle: 'normal',
   fontWeight: '500',
   texttransform: 'uppercase',
}))
