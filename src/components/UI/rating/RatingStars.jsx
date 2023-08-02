import { Box, Rating } from '@mui/material'
import React from 'react'

export function RatingStars({ ratingValue, setRatingValue, size }) {
   return (
      <div>
         <Box
            sx={{
               '& > legend': { mt: 2 },
               display: 'flex',
               alignItems: 'center',
            }}
         >
            <Rating
               size={size}
               controlled
               name="simple-controlled"
               value={ratingValue}
               onChange={(event, newValue) => {
                  setRatingValue(newValue)
               }}
            />
         </Box>
      </div>
   )
}
