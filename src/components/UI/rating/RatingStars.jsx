import { Box, Rating } from '@mui/material'
import React, { useState } from 'react'
import { RatingChart } from './RatingChart'

export function RatingStars() {
   const [value, setValue] = useState(0)
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
               value={value}
               onChange={(event, newValue) => {
                  setValue(newValue)
               }}
            />
            <div>{`(${value})`}</div>
         </Box>
         <RatingChart value={value} />
      </div>
   )
}
