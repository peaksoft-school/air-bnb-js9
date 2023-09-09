import React, { useEffect, useState } from 'react'
import { Link, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../layout/Header/Header'
import { FilterSelect } from '../filter-select/FilterSelect'
import { Cards } from '../UI/cards/Cards'
import { getAllCards } from '../../store/card/cardThunk'
import Skeleto from '../UI/cards/Skeleto'
import { XIcon } from '../UI/icon/XIcon'

function AnnouncementGetAll() {
   const { search, isLoading } = useSelector((state) => state.global)

   const [selectedHomeType, setSelectedHomeType] = useState('')
   const [selectedPopular, setSelectedPopular] = useState('')
   const [selectedRegion, setSelectedRegion] = useState('')
   const [selectedPrice, setSelectedPrice] = useState('')
   const [login, setLogin] = useState(true)

   const dispatch = useDispatch()
   const navigate = useNavigate()
   const params = useParams()

   useEffect(() => {
      const params = {
         region: selectedRegion,
         rating: selectedPopular,
         houseType: selectedHomeType,
         price: selectedPrice,
      }
      dispatch(getAllCards(params))
   }, [
      dispatch,
      selectedRegion,
      selectedPopular,
      selectedHomeType,
      selectedPrice,
   ])
   if (params.id !== null) {
      useEffect(() => {
         const param = {
            region: params.id,
         }
         dispatch(getAllCards(param))
      }, [
         dispatch,
         selectedRegion,
         selectedPopular,
         selectedHomeType,
         selectedPrice,
      ])
   }
   const todosLength = search.length

   const onChangeRegions = (e) => {
      setSelectedRegion(e.target.value)
   }

   const onChangePopular = (e) => {
      setSelectedPopular(e.target.value)
   }

   const onChangeHomeType = (e) => {
      setSelectedHomeType(e.target.value)
   }

   const onChangePrice = (e) => {
      setSelectedPrice(e.target.value)
   }

   const clearSort = (criteria) => {
      if (criteria === 'region') {
         setSelectedRegion('')
      } else if (criteria === 'popular') {
         setSelectedPopular('')
      } else if (criteria === 'homeType') {
         setSelectedHomeType('')
      } else if (criteria === 'price') {
         setSelectedPrice('')
      }
   }
   const clearAllFilters = () => {
      setSelectedHomeType('')
      setSelectedPopular('')
      setSelectedRegion('')
      setSelectedPrice('')
   }

   return (
      <WrapperContainer>
         <div>
            <Header login={login} setLogin={setLogin} />
            <div style={{ margin: '0.11rem 6.3rem' }} role="presentation">
               <Breadcrumbs
                  aria-label="breadcrumb"
                  sx={{
                     marginTop: '90px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'start',
                  }}
               >
                  <Link
                     underline="hover"
                     color="inherit"
                     href="/main"
                     onClick={() => navigate('/main')}
                  >
                     Main
                  </Link>
                  <Typography color="text.primary">
                     {selectedRegion === ''
                        ? Object.values(params)
                        : selectedRegion}
                  </Typography>
               </Breadcrumbs>
            </div>
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '25px',
               }}
            >
               <Region>
                  {selectedRegion === ''
                     ? Object.values(params)
                     : selectedRegion}
                  ({todosLength})
               </Region>
               <FilterSelect
                  selectedRegion={selectedRegion}
                  onChangeRegions={onChangeRegions}
                  onChangePopular={onChangePopular}
                  onChangeHomeType={onChangeHomeType}
                  onChangePrice={onChangePrice}
                  region={params.id}
               />
            </div>

            <ContainerSelect>
               {selectedRegion && (
                  <SelectStyle>
                     <XIcon onClick={() => clearSort('region')} />
                     {selectedRegion}
                  </SelectStyle>
               )}

               {selectedPopular && (
                  <SelectStyle>
                     <XIcon onClick={() => clearSort('popular')} />
                     {(selectedPopular === 'asc' && 'The latest') ||
                        (selectedPopular === 'desc' && 'Popular')}
                  </SelectStyle>
               )}

               {selectedHomeType && (
                  <SelectStyle>
                     <XIcon onClick={() => clearSort('homeType')} />
                     {selectedHomeType}
                  </SelectStyle>
               )}

               {selectedPrice && (
                  <SelectStyle>
                     <XIcon onClick={() => clearSort('price')} />
                     {(selectedPrice === 'asc' && 'Low to high') ||
                        (selectedPrice === 'desc' && 'High to low')}
                  </SelectStyle>
               )}

               {selectedHomeType ||
               selectedPrice ||
               selectedPopular ||
               selectedRegion ? (
                  <SelectStyle onClick={clearAllFilters}>Clear all</SelectStyle>
               ) : null}
            </ContainerSelect>

            {isLoading ? (
               <div>
                  <Skeleto />
               </div>
            ) : (
               <Cards data={search} />
            )}
         </div>
      </WrapperContainer>
   )
}

export default AnnouncementGetAll

const WrapperContainer = styled('div')({})
const ContainerSelect = styled('div')`
   display: flex;
   gap: 1rem;
   margin-left: 6rem;
`
const Region = styled('p')({
   color: '#000',
   fontFamily: 'Inter',
   fontSize: '16px',
   fontWeight: '500',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '2.4rem',
})

const SelectStyle = styled('div')(() => ({
   color: 'var(--tertiary-middle-gray, #636060)',
   background: ' var(--tertiary-the-lightest-gray, #f3f3f3)',
   padding: '8px',
   fontSize: '16px',
   fontWeight: '400',
   cursor: 'pointer',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '20px',
   gap: '5px',
   '&:hover': {
      background: 'var(--tertiary-light-gray, #C4C4C4)',
      color: '#fff',
   },
   svg: {
      transition: ' fill 0.3s ease',
      '&:hover': {
         fill: '#fff',
      },
   },
}))
