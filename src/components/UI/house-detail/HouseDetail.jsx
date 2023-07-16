import { styled } from '@mui/material'
import React from 'react'
import { house } from './HouseDeteilData'

export function HouseDetail() {
   return (
      <Container>
         {house.map((item) => {
            return (
               <ContainerImage key={item.id}>
                  <img src={item.imgHouse1} alt="#" />
                  <div className="block">
                     <img src={item.imgHouse2} alt="#" />
                     <img src={item.imgHouse3} alt="#" />
                     <img src={item.imgHouse4} alt="#" />
                  </div>
               </ContainerImage>
            )
         })}
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '39.375rem',
   margin: '100px',
}))
const ContainerImage = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.25rem',
   '.block': {
      display: 'flex',
      gap: '1.25rem',
   },
}))
