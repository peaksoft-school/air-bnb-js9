import React, { useEffect, useState } from 'react'
import { Link, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../../layout/header/Header'
import { FilterSelect } from '../../../components/filter-select/FilterSelect'
import { Cards } from '../../../components/UI/cards/user/Cards'
import Skeleto from '../../../components/UI/cards/Skeleto'
import { XIcon } from '../../../components/UI/icon/XIcon'
import { getAllCards } from '../../../store/user/search/searchThunk'
// import { Paginations } from '../../../components/UI/pagination/Pagination'
// import {
//    getAllPagination,
//    getPagination,
// } from '../../../store/user/search/getAllPaginationThunk'
// import { regions } from '../../../utils/helpers'

function AnnouncementGetAll() {
   const { search, isLoading } = useSelector((state) => state.global)
   const { darkMode } = useSelector((state) => state.darkMode)
   const [selectedHomeType, setSelectedHomeType] = useState('')
   const [selectedPopular, setSelectedPopular] = useState('')
   const [selectedRegion, setSelectedRegion] = useState('')
   const [selectedPrice, setSelectedPrice] = useState('')
   // const [page, setPage] = useState(1)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { region } = useParams()

   // const pagePagination = (value) => {
   //    setPage(value)
   // }

   // const findRegion = regions.find((item) => item.value === region)
   const popularAndRegion = region === 'asc' ? 'Popular' : region
   const lastestAndRegion = region === 'desc' ? 'The lastest' : popularAndRegion
   console.log(lastestAndRegion, 'lastestAndRegion hello ')

   // console.log(popularAndRegion, 'popularApartment')
   // console.log(lastestAndRegion, 'lastestAndRegion')
   // lastest
   // const lastestCondition =
   //    lastestAndRegion === 'The lastest' ? lastestAndRegion : 'desc'

   // const regionLastest =
   //    lastestAndRegion === 'The lastest' ? lastestAndRegion : ''
   // popular
   // const regionContition =
   //    popularAndRegion === 'Popular' ? '' : popularAndRegion

   // const popularCondition =
   //    popularAndRegion === 'Popular' ? popularAndRegion : region
   const popularCondition =
      region === 'asc' || region === 'desc' ? region : region
   console.log(popularCondition, 'popularCondition')
   // console.log(regionLastest, 'regionLastest')
   // console.log(lastestCondition, 'lastestCondition')
   console.log(popularAndRegion, 'popularAndRegion')
   useEffect(() => {
      // if (region !== findRegion?.value) {
      const params = {
         region: selectedRegion || popularCondition,
         rating: selectedPopular || popularCondition,
         houseType: selectedHomeType,
         price: selectedPrice,
      }
      dispatch(getAllCards(params))
      // }
      // dispatch(getPagination(page))
   }, [
      dispatch,
      selectedPrice,
      selectedRegion,
      selectedPopular,
      selectedHomeType,
   ])
   // useEffect(() => {
   //    dispatch(getAllPagination())
   // }, [dispatch])

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
      setSelectedRegion('')
      setSelectedPopular('')
      setSelectedHomeType('')
      setSelectedPrice('')
   }

   useEffect(() => {
      if (selectedPopular === 'all') {
         setSelectedPopular('')
      }
   }, [])

   // const totalItems = allPagination?.length
   // const totalPages = Math.ceil(totalItems / 16)

   const styledark = {
      color64: darkMode ? '#fff' : '#646464',
      color00: darkMode ? '#fff' : '#000',
      background: darkMode
         ? 'linear-gradient(262deg, rgba(152,152,152,1) 15%, rgba(0,0,0,1) 100%)'
         : '#fff',
   }

   const rr = selectedRegion !== 'all' && selectedRegion !== ''
   const pp = selectedPopular !== 'all' && selectedPopular !== ''
   const hh = selectedHomeType !== 'all' && selectedHomeType !== ''
   const pr = selectedPrice !== 'all' && selectedPrice !== ''
   return (
      <WrapperContainer styledark={styledark}>
         <div>
            <Header login="false" />
            <div
               style={{ margin: '0rem  6.3rem', paddingTop: '0.2rem' }}
               role="presentation"
            >
               <BreadCrumbs aria-label="breadcrumb" styledark={styledark}>
                  <StyleLink
                     styledark={styledark}
                     href="/main"
                     onClick={() => navigate('/main')}
                  >
                     Main
                  </StyleLink>
                  <StyledTypography styledark={styledark} color="text.primary">
                     {selectedRegion === ''
                        ? Object.values(popularAndRegion || lastestAndRegion)
                        : selectedRegion}
                  </StyledTypography>
               </BreadCrumbs>
            </div>

            <FilterContainer>
               <Region>
                  <ContainerRegion styledark={styledark}>
                     {selectedRegion === ''
                        ? Object.values(popularAndRegion || lastestAndRegion)
                        : selectedRegion}
                     ({todosLength})
                  </ContainerRegion>
               </Region>

               <div>
                  <FilterSelect
                     onChangeRegions={onChangeRegions}
                     onChangePopular={onChangePopular}
                     onChangeHomeType={onChangeHomeType}
                     onChangePrice={onChangePrice}
                     region={popularAndRegion}
                     selectedRegion={selectedRegion}
                     selectedPopular={selectedPopular}
                     selectedHomeType={selectedHomeType}
                     selectedPrice={selectedPrice}
                  />
               </div>
            </FilterContainer>

            <ContainerSelect>
               {rr && (
                  <SelectStyle>
                     <XIcon onClick={() => clearSort('region')} />
                     {selectedRegion}
                  </SelectStyle>
               )}

               {pp && (
                  <SelectStyle>
                     <XIcon onClick={() => clearSort('popular')} />
                     {(selectedPopular === 'asc' && 'The latest') ||
                        (selectedPopular === 'desc' && 'Popular')}
                  </SelectStyle>
               )}

               {hh && (
                  <SelectStyle>
                     <XIcon onClick={() => clearSort('homeType')} />
                     {selectedHomeType}
                  </SelectStyle>
               )}

               {pr && (
                  <SelectStyle>
                     <XIcon onClick={() => clearSort('price')} />
                     {(selectedPrice === 'asc' && 'Low to high') ||
                        (selectedPrice === 'desc' && 'High to low')}
                  </SelectStyle>
               )}

               {hh || pr || rr || pp ? (
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
         {/* <ContainerPagination>
            <Paginations count={totalPages} pages={pagePagination} />
         </ContainerPagination> */}
      </WrapperContainer>
   )
}

export default AnnouncementGetAll

const WrapperContainer = styled('div')(({ styledark }) => ({
   background: styledark.background,
}))

// const ContainerPagination = styled('div')(() => ({
//    width: '100%',
//    height: '10vh',
//    display: 'flex',
//    justifyContent: 'center',
//    marginTop: '20px',
// }))

const ContainerRegion = styled('div')(({ styledark }) => ({
   color: styledark.color00,
}))

const BreadCrumbs = styled(Breadcrumbs)(({ styledark }) => ({
   marginTop: '90px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'start',
   color: styledark.color00,
}))

const FilterContainer = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   // flexWrap: 'wrap',
   marginLeft: '3.1rem',
   width: '90%',
})

const ContainerSelect = styled('div')`
   display: flex;
   gap: 1rem;
   margin-left: 6.3rem;
`

const Region = styled('div')({
   display: 'flex',
   margin: '2.4rem  3.1rem 0',
   alignItems: 'center',
   color: '#000',
   fontFamily: 'Inter',
   fontSize: '19px',
   fontWeight: '500',
   lineHeight: 'normal',
   textTransform: 'uppercase',
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
const StyleLink = styled(Link)(({ styledark }) => ({
   color: styledark.color64,
   textDecoration: 'none',
}))
const StyledTypography = styled('p')(({ styledark }) => ({
   color: styledark.color00,
}))
