import { Box, Rating } from '@mui/material'
import React, { useState } from 'react'
import { RatingChart } from './RatingChart'

export function RatingStars() {
   const [starValue, setStarValue] = useState(0)
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
               name="simple-controlled"
               value={starValue}
               onChange={(event, newValue) => {
                  setStarValue(newValue)
               }}
            />
         </Box>
         <RatingChart starValue={starValue} />
      </div>
   )
}
