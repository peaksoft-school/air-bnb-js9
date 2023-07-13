import React from 'react'
import { styled } from '@mui/material'
import { RatingChartBar } from './RatingChartBar'

export function RatingChart({ value }) {
   const maximumRating = 5
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
   padding: '50px',
   width: '30%',
}))
