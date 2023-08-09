import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Pagination from '@mui/material/Pagination'
import { Header } from '../../layout/Header/Header'
import { FilterSelect } from '../filter-select/FilterSelect'
import { Cards } from '../UI/cards/Cards'
import { getAllCards } from '../../store/card/cardThunk'
import Skeleto from '../UI/cards/Skeleto'

function AnnouncementGetAll() {
   const [login, setLogin] = useState(false)
   const dispatch = useDispatch()
   const todos = useSelector((state) => state.todo.todos)
   const isLoading = useSelector((state) => state.todo.isLoading)

   const [selectedRegion, setSelectedRegion] = useState('')
   const [selectedPopular, setSelectedPopular] = useState('')
   const [selectedHomeType, setSelectedHomeType] = useState('')
   const [selectedPrice, setSelectedPrice] = useState('')

   console.log(selectedRegion)

   useEffect(() => {
      const params = {
         region: selectedRegion,
         popular: selectedPopular,
         homeType: selectedHomeType,
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

   useEffect(() => {
      dispatch(getAllCards())
   }, [dispatch])
   const todosLength = todos.length
   function handleClick(event) {
      event.preventDefault()
      console.info('You clicked a breadcrumb.')
   }
   const onChangeRegions = (selectedOption) => {
      setSelectedRegion(selectedOption.target.value)
   }

   const onChangePopular = (selectedOption) => {
      setSelectedPopular(selectedOption.target.value)
   }

   const onChangeHomeType = (selectedOption) => {
      setSelectedHomeType(selectedOption.target.value)
   }

   const onChangePrice = (selectedOption) => {
      setSelectedPrice(selectedOption.target.value)
   }
   return (
      <WrapperContainer>
         <Header login={login} setLogin={setLogin} />
         <div
            style={{ margin: '1rem 8rem' }}
            role="presentation"
            onClick={handleClick}
         >
            <Breadcrumbs aria-label="breadcrumb">
               <Link underline="hover" color="inherit" href="/">
                  Main
               </Link>
               <Typography
                  underline="hover"
                  color="text.primary"
                  href="/material-ui/react-breadcrumbs/"
                  aria-current="page"
               >
                  Yssyk-Kol
               </Typography>
            </Breadcrumbs>
         </div>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               gap: '10px',
            }}
         >
            <h4
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '15px',
               }}
            >
               Yssyk-Kol ({todosLength})
            </h4>
            <FilterSelect
               onChangeRegions={onChangeRegions}
               onChangePopular={onChangePopular}
               onChangeHomeType={onChangeHomeType}
               onChangePrice={onChangePrice}
            />
         </div>
         {isLoading ? (
            <div>
               <Skeleto />
            </div>
         ) : (
            <Cards data={todos} />
         )}
         <PaginationStack spacing={2}>
            <Pagination count={37} color="secondary" />
         </PaginationStack>
      </WrapperContainer>
   )
}

export default AnnouncementGetAll

const WrapperContainer = styled('div')({
   width: '100%',
})
const PaginationStack = styled(Stack)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '20px',
})
