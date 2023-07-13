import React from 'react'
import { styled } from '@mui/material'
import { RatingChartBar } from './RatingChartBar'
import { Start1 } from '../../../assets/icons'

export function RatingChart({ value }) {
   const maximumRating = 50
   const rating = [
      { label: '5', currentRating: 0 },
      { label: '4', currentRating: 0 },
      { label: '3', currentRating: 0 },
      { label: '2', currentRating: 0 },
      { label: '1', currentRating: 0 },
   ]

   for (let i = 0; i < rating.length; i += 1) {
      const el = rating[i]

      if (+el.label === value) {
         el.currentRating = value
      }
      console.log('currentRating: ', el.currentRating)
   }

   return (
      <Container>
         <StarDiv>
            <h2>{value}</h2>
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
   border: '2px solid gray',
   borderRadius: '14px',
   padding: '40px',
   width: '30%',
}))

const StarDiv = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   marginBottom: '10px',
   marginLeft: '20px',
}))

const Star = styled(Start1)(() => ({
   width: '1.5rem',
   height: '1.5rem',
   marginLeft: '0.5rem',
}))
