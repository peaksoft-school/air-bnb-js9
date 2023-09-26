import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'

function Media() {
   const { search, isLoading } = useSelector((state) => state.global)

   return (
      <SkeletonGrid container wrap="wrap">
         {(isLoading
            ? Array.from(new Array(30)).map((index) => (
                 <Box
                    key={`skeleton-${index}`}
                    sx={{ width: 300, marginRight: 0.5, my: 5 }}
                 >
                    hello
                 </Box>
              ))
            : search
         ).map((item) => (
            <Box
               key={item.id || `skeleton-${Math.random()}`}
               sx={{ width: 300, marginRight: 0.5, my: 5 }}
            >
               {item ? (
                  <img
                     style={{ width: 300, height: 218 }}
                     alt={item.title}
                     src={item.src}
                  />
               ) : (
                  <Skeleton variant="rectangular" width={300} height={218} />
               )}

               {item ? (
                  <Box key={item.id}>
                     <Typography gutterBottom variant="body2">
                        {item.title}
                     </Typography>
                     <Typography
                        display="block"
                        variant="caption"
                        color="text.secondary"
                     >
                        {item.channel}
                     </Typography>
                     <Typography variant="caption" color="text.primary">
                        {`${item.views} • ${item.createdAt}`}
                     </Typography>
                  </Box>
               ) : (
                  <Box sx={{ pt: 0.5 }}>
                     <SkeletonMain>
                        <Skeleton width="35%" />
                        <Skeleton width="35%" />
                     </SkeletonMain>

                     <Skeleton width="85%" />
                     <Skeleton width="77%" />
                     <SkeletonBlock>
                        <Skeleton width="22%" />
                        <Skeleton width="35%" />
                        <Skeleton width="22%" />
                     </SkeletonBlock>
                  </Box>
               )}
            </Box>
         ))}
      </SkeletonGrid>
   )
}

export default function Skeleto() {
   return (
      <Box sx={{ overflow: 'hidden' }}>
         <Media />
      </Box>
   )
}

const SkeletonGrid = styled(Grid)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '1rem',
   marginLeft: '.8rem',
})
const SkeletonBlock = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
})
const SkeletonMain = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})
