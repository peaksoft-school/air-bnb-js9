import { InputAdornment, styled } from '@mui/material'
import React from 'react'
import mainBackground from '../../assets/images/MainBackground.png'
import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg'
import { Button } from '../UI/Button'
import { Input } from '../UI/input/Input'

export function MainPage() {
   return (
      <StyleMain
         style={{
            background: `url(${mainBackground})`,
            backgroundSize: 'cover',
         }}
      >
         <Header>
            <h2>Icon </h2>
            <div>
               <a href="hello">leave an ad</a>
               <Button>join us</Button>
            </div>
         </Header>
         <Block>
            <h1>Find a place you ll love to stay at</h1>
            <div>
               <Input
                  type="text"
                  padding=" 0.625rem 1.5rem 0.625rem 1.125rem "
                  height="2rem"
                  width="50rem"
                  placeholder="Region, city, apartment, house..."
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <StyleSearchIcon />
                        </InputAdornment>
                     ),
                  }}
               />
            </div>
         </Block>
      </StyleMain>
   )
}

const Header = styled('header')(() => ({
   width: '100%',
   height: '100px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',

   div: {
      display: 'flex',
      alignItems: 'center',
   },
}))
const StyleMain = styled('div')(() => ({
   width: '100%',
   height: '51.25rem',
}))

const Block = styled('div')(() => ({
   width: '100%',
   minHeight: '10vh',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   h1: {
      color: '#FFF',
      fontFamily: 'Jenriv Titling',
      fontSize: '2.5rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      textTransform: 'uppercase',
   },
}))

const StyleSearchIcon = styled(SearchIcon)(() => ({
   position: 'absolute',
}))
