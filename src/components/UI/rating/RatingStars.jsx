import { Box, Rating } from '@mui/material'
import React from 'react'

export function RatingStars({ starRating }) {
   return (
      <div>
         <Box
            sx={{
               '& > legend': { mt: 2 },
               display: 'flex',
               alignItems: 'center',
            }}
         >
            <Rating name="simple-controlled" readOnly value={starRating} />
         </Box>
      </div>
   )
}
