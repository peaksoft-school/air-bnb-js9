import { styled } from '@mui/material'
import React from 'react'

export function RatingChartBar({ maximumRating, currentRating, label }) {
   const fillWidth = (100 * currentRating) / maximumRating
   console.log('fillWidth: ', fillWidth)
   return (
      <Container>
         <div>
            <h3>{label}</h3>
         </div>
         <ChartBar>
            <ChartBarInner>
               <ChartBarFill style={{ width: `${fillWidth}%` }}>.</ChartBarFill>
            </ChartBarInner>
            <div>
               <h4> {`${fillWidth}%`}</h4>
            </div>
         </ChartBar>
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   gap: '30px',
   alignItems: 'center',
}))

const ChartBarFill = styled('div')(() => ({
   transition: '0.4s ease-out',
   height: '10px',
   backgroundColor: '#4F7755',
}))

const ChartBar = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   width: '100%',
   gap: '20px',
}))

const ChartBarInner = styled('div')(() => ({
   width: ' 100%',
   backgroundColor: '#d4cdd3',
   overflow: 'hidden',
   display: 'flex',
   flexDirection: 'column',
   height: '3.2px',
}))
