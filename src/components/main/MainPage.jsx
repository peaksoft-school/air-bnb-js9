import { Checkbox, InputAdornment, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDebounce } from 'use-debounce'
import mainBackground from '../../assets/images/MainBackground.png'
import { Header } from '../../layout/header/Header'
import { Input } from '../UI/input/Input'
import { SearchIcon } from '../../assets/icons'
import { getGlobalSearch } from '../../store/user/search/searchThunk'
import { SearchResult } from '../UI/search/SearchResult'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export function MainPage() {
   const [userLogin] = useState(false)
   const [searchText, setSearchText] = useState('')
   const [isChecked, setIsChecked] = useState(false)
   const [location, setLocation] = useState(null)
   const { search } = useSelector((state) => state.global)
   const dispatch = useDispatch()
   const [searchedValue] = useDebounce(searchText, 1000)

   function getUserLocation() {
      if ('geolocation' in navigator) {
         navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            setLocation({ latitude, longitude })
         })
      } else {
         console.error('Браузер не поддерживает геолокацию.')
      }
   }

   useEffect(() => {
      getUserLocation()
   }, [])

   useEffect(() => {
      if (location) {
         const params = {
            word: searchedValue,
            isNearby: isChecked,
            latitude: location.latitude,
            longitude: location.longitude,
         }

         dispatch(getGlobalSearch(params))
      }
   }, [location, searchedValue, isChecked])

   const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked)
   }

   const onChangeRegions = (e) => {
      setSearchText(e.target.value)
   }

   return (
      <div>
         <StyleMain
            style={{
               background: `url(${mainBackground})`,
               backgroundSize: 'cover',
            }}
         >
            <Header login="true" />
            <Block>
               <h1>Find a place you ll love to stay at</h1>
               <BlockInput>
                  <InputSearch
                     type="search"
                     size="small"
                     onChange={onChangeRegions}
                     value={searchText}
                     placeholder="Region, city, apartment, house..."
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <SearchIcon />
                           </InputAdornment>
                        ),
                     }}
                     barsbek="nekrash"
                     id="myInputId"
                  />
                  {searchText.length > 0 ? (
                     <SearchResult search={search} />
                  ) : null}

                  <div>
                     {userLogin ? null : (
                        <>
                           <StyleCheckbox
                              {...label}
                              id="id"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                              sx={{
                                 color: '#fff',
                                 '&.Mui-checked': {
                                    color: '#6495ED',
                                 },
                              }}
                           />
                           <label htmlFor="id">Искать поблизости</label>
                        </>
                     )}
                  </div>
               </BlockInput>
            </Block>
         </StyleMain>
      </div>
   )
}

const StyleMain = styled('div')(() => ({
   width: '100%',
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',
   gap: '17.69rem',
}))

const Block = styled('div')(() => ({
   width: '100%',
   minHeight: '10vh',
   display: 'flex',
   flexDirection: 'column',
   gap: '3.12rem',
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
const BlockInput = styled('div')(() => ({
   width: '60%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-end',
   div: {
      label: {
         color: '#EDEDED',
         fontFamily: 'Inter',
         fontSize: '1rem',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: 'normal',
      },
   },
}))
const StyleCheckbox = styled(Checkbox)(() => ({
   '&.MuiCheckbox-root': {
      borderColor: '#fff',
   },
}))

const InputSearch = styled(Input)(() => ({
   width: '100%',
   background: '#fff',
}))
