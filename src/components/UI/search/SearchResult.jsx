import React from 'react'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import { SearchIcon } from '../../../assets/icons'

export function SearchResult({ search }) {
   return (
      <Container>
         {search.map((item) => {
            return (
               <MapContainer key={item.id}>
                  <Block>
                     <ContainerImg>
                        {item.images.map((item) => {
                           return item === 'string' ? (
                              <SearchIcon />
                           ) : (
                              <img src={item} alt="#" />
                           )
                        })}
                     </ContainerImg>
                     <p>{item.province}</p>
                  </Block>
               </MapContainer>
            )
         })}
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
   maxHeight: '150px',
   overflow: 'auto',
   backgroundColor: '#fff',
   display: 'flex',
   flexDirection: 'column',
}))
const MapContainer = styled(Link)(() => ({
   backgroundColor: '#fff',
   color: '#000',
   display: 'flex',
   flexDirection: 'column',
   '&:hover': {
      backgroundColor: 'var(--tertiary-the-lightest-gray, #F3F3F3)',
   },
}))

const Block = styled('div')(() => ({
   width: '50%',
   height: '6vh',
   padding: '1rem',
   display: 'flex',
   justifyContent: 'start',
   alignItems: 'center',
   gap: '2rem',
}))
const ContainerImg = styled('div')(() => ({
   width: '5vw',
   height: '5vh',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   img: {
      width: '100%',
      height: '100%',
   },
}))
