/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react'
import { Link, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from '@mui/material/Pagination'
import { Header } from '../../layout/Header/Header'
import { FilterSelect } from '../filter-select/FilterSelect'
import { Cards } from '../UI/cards/Cards'
import { getAllCards } from '../../store/card/cardThunk'
import Skeleto from '../UI/cards/Skeleto'
import Modal from '../UI/modal/Modal'
import { SignIn } from '../signIn/SignIn'
import { JoinUs } from '../signIn/JoinUs'

function AnnouncementGetAll() {
   const [login, setLogin] = useState(false)
   const dispatch = useDispatch()
   const { search, isLoading } = useSelector((state) => state.global)
   const [selectedRegion, setSelectedRegion] = useState('')
   const [selectedPopular, setSelectedPopular] = useState('')
   const [selectedHomeType, setSelectedHomeType] = useState('')
   const [selectedPrice, setSelectedPrice] = useState('')
   const [openModal, setOpenModal] = useState(false)
   const [signIn, setSignIn] = useState(false)
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

   useEffect(() => {
      dispatch(getAllCards())
   }, [dispatch])
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
   const openModalHandler = () => {
      setOpenModal((prev) => !prev)
   }
   const moveToSigninAndSignUp = () => {
      setSignIn((prev) => !prev)
   }
   const clearSelectedRegion = () => {
      setSelectedRegion('')
   }
   const clearSelectedPopular = () => {
      setSelectedPopular('')
   }
   const clearSelectedPrice = () => {
      setSelectedPrice('')
   }
   const clearSelectedType = () => {
      setSelectedHomeType('')
   }

   console.log(Object.values(params))
   const navigate = useNavigate()
   return (
      <WrapperContainer>
         <Header
            login={login}
            setLogin={setLogin}
            openHandler={openModalHandler}
         />
         {openModal ? (
            <Modal open={openModal} onClose={openModalHandler}>
               {signIn ? (
                  <SignIn moveToSigninAndSignUp={moveToSigninAndSignUp} />
               ) : (
                  <JoinUs moveToSigninAndSignUp={moveToSigninAndSignUp} />
               )}
            </Modal>
         ) : null}
         <div style={{ margin: '1rem 8rem' }} role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
               <Link
                  underline="hover"
                  color="inherit"
                  href="/main"
                  onClick={() => navigate('/main')}
               >
                  Main
               </Link>
               <Typography
                  underline="hover"
                  color="text.primary"
                  aria-current="page"
               >
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
               {selectedRegion === '' ? Object.values(params) : selectedRegion}(
               {todosLength})
            </h4>
            <FilterSelect
               selectedRegion={selectedRegion}
               onChangeRegions={onChangeRegions}
               onChangePopular={onChangePopular}
               onChangeHomeType={onChangeHomeType}
               onChangePrice={onChangePrice}
            />
         </div>

         <div>
            <button onClick={clearSelectedRegion}>{selectedRegion}</button>
            <button onClick={clearSelectedPopular}>{selectedPopular}</button>
            <button onClick={clearSelectedType}>{selectedHomeType}</button>
            <button onClick={clearSelectedPrice}>{selectedPrice}</button>
         </div>

         {isLoading ? (
            <div>
               <Skeleto />
            </div>
         ) : (
            <Cards data={search} />
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
