import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'

const data = [
   {
      src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
      title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
      channel: 'Don Diablo',
      views: '396k views',
      createdAt: 'a week ago',
   },
   {
      src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
      title: 'Queen - Greatest Hits',
      channel: 'Queen Official',
      views: '40M views',
      createdAt: '3 years ago',
      status: 'dates',
   },
   {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
   },
]

function Media() {
   const isLoading = useSelector((state) => state.todo.isLoading)

   return (
      <SkeletonGrid container wrap="nowrap">
         {(isLoading ? Array.from(new Array(4)) : data).map((item) => (
            <Box sx={{ width: 300, marginRight: 0.5, my: 5 }}>
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
                  <Box>
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
   //    gap: '1rem',
})
const SkeletonMain = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})
