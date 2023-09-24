import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AdminCards } from '../cards/admin/AdminCards'
import { Select as MuiSelect } from '../select/Select'
import { filterHouseRequest } from '../../../store/user/profile/ProfileThunk'
import { homeTypeProfile, popularProfile, price } from '../../../utils/helpers'
import { ProfileCards } from '../cards/ProfileCards'
import { DeleteIcon } from '../../../assets/icons'

export function MyAnnouncement({ select, announcement }) {
   const [sortPrice, setSortPrice] = useState('')
   const [sortRating, setSortRating] = useState('')
   const [sort, setSort] = useState('')
   const dispatch = useDispatch()

   // console.log(announcement, 'announcement my announcement ')
   const changePriceHandler = (e) => {
      setSortPrice(e.target.value)
   }
   const onChangeHomeType = (e) => {
      setSort(e.target.value)
   }
   const changeRatingHandler = (e) => {
      setSortRating(e.target.value)
   }

   useEffect(() => {
      const params = {
         houseType: sort,
         price: sortPrice,
         rating: sortRating,
      }

      dispatch(filterHouseRequest(params))
   }, [sortPrice, sortRating, sort, dispatch])

   const clearSort = (criteria) => {
      if (criteria === 'houseType') {
         setSort('')
      } else if (criteria === 'price') {
         setSortPrice('')
      } else if (criteria === 'rating') {
         setSortRating('')
      }
   }
   const clearAllFilters = () => {
      setSort('')
      setSortPrice('')
      setSortRating('')
   }
   if (sortRating === 'HIGH_TO_LOW') {
      setSortRating('Un Popular')
   } else if (sortRating === 'LOW_TO_HIGH') {
      setSortRating('Popular')
   }
   console.log(announcement, 'announcement')
   return (
      <div>
         <Container>
            {select === 'true' ? (
               <div>
                  <SelectContainer>
                     <MuiSelect
                        labelName="sort  house type"
                        data={homeTypeProfile}
                        onChange={onChangeHomeType}
                     />
                     <MuiSelect
                        labelName="sort by price"
                        data={price}
                        onChange={changePriceHandler}
                     />
                     <MuiSelect
                        labelName="sort by rating"
                        data={popularProfile}
                        onChange={changeRatingHandler}
                     />
                  </SelectContainer>
                  <ContainerSelect>
                     {sort && (
                        <SelectStyle>
                           <DeleteIcon onClick={() => clearSort('houseType')} />
                           {sort}
                        </SelectStyle>
                     )}

                     {sortPrice && (
                        <SelectStyle>
                           <DeleteIcon onClick={() => clearSort('price')} />{' '}
                           {sortPrice === 'HIGH_TO_LOW'
                              ? 'HIGH TO LOW'
                              : 'LOW TO HIGH'}
                        </SelectStyle>
                     )}
                     {sortRating && (
                        <SelectStyle>
                           <DeleteIcon onClick={() => clearSort('rating')} />{' '}
                           {sortRating}
                        </SelectStyle>
                     )}
                     {sort || sortPrice || sortRating ? (
                        <SelectStyle onClick={clearAllFilters}>
                           Clear all
                        </SelectStyle>
                     ) : null}
                  </ContainerSelect>
                  <ContainerCards>
                     <ProfileCards data={announcement} announcement="true" />
                  </ContainerCards>
               </div>
            ) : (
               <div className="cards">
                  <AdminCards
                     image
                     page="admin"
                     toPath="true"
                     imagesClick="click"
                     data={announcement}
                     justifyContent="start"
                  />
               </div>
            )}
         </Container>
      </div>
   )
}
const ContainerSelect = styled('div')`
   display: flex;
   gap: 3rem;
`

const SelectContainer = styled('div')`
   padding-bottom: 2rem;
   display: flex;
   justify-content: space-around;
`
const Container = styled('div')`
   padding: 3% 0px;
   width: 100%;
   flex-wrap: wrap;
   .cards {
      width: 100%;
      display: flex;
      justify-content: center;
   }
`
const ContainerCards = styled('div')`
   padding-top: 2rem;
`
const SelectStyle = styled('p')`
   color: var(--tertiary-middle-gray, #636060);
   font-size: 16px;
   font-weight: 400;
   background: var(--tertiary-the-lightest-gray, #f3f3f3);
   display: inline-flex;
   padding: 8px;
   justify-content: center;
   align-items: center;
   gap: 3px;
   cursor: pointer;
`
