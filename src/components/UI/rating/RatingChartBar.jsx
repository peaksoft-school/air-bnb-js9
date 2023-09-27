import { styled } from '@mui/material'
import React from 'react'

export function RatingChartBar({ maximumRating, currentRating, label }) {
   const fillWidth = Math.round((100 * currentRating) / maximumRating)
   return (
      <Container>
         <LabelDiv>
            <StyledLabel>{label}</StyledLabel>
         </LabelDiv>
         <ChartBar>
            <ChartBarInner>
               <ChartBarFill style={{ width: `${fillWidth}%` }}>.</ChartBarFill>
            </ChartBarInner>
            <StyledPtagDiv>
               <StyledPtag>
                  {fillWidth === 0 ? `${fillWidth}` : `${fillWidth}%`}
               </StyledPtag>
            </StyledPtagDiv>
         </ChartBar>
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   alignItems: 'center',
}))

const LabelDiv = styled('div')(() => ({
   width: '100px',
   textAlign: 'center',
}))

const ChartBarFill = styled('div')(() => ({
   display: 'flex ',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   transition: '0.4s ease-out',
   height: '10px',
   backgroundColor: '#4F7755',
}))

const ChartBar = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   width: '580px',
   justifyContent: 'space-between',
}))

const ChartBarInner = styled('div')(() => ({
   width: '20vw',
   backgroundColor: '#d4cdd3',
   overflow: 'hidden',
   display: 'flex',
   flexDirection: 'column',
   height: '3.2px',
}))

const StyledLabel = styled('label')(() => ({
   color: 'var(--primary-black, #363636)',
   fontFamily: 'Inter',
   fontSize: '20px',
   fontWeight: '600',
   texttransform: 'uppercase',
   width: '20px',
}))

const StyledPtag = styled('p')(() => ({
   color: 'var(--primary-black, #363636)',
   fontFamily: 'Inter',
   fontSize: '20px',
   fontStyle: 'normal',
   fontWeight: '600',
   texttransform: 'uppercase',
}))

const StyledPtagDiv = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   width: '20px',
}))
