import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Select } from '../UI/select/Select'
import {
   filterHouseRequest,
   getAnnouncement,
} from '../../store/profile/ProfileThunk'
import { homeTypeProfile, popularProfile, price } from '../../utils/helpers'
import { ProfileCards } from '../UI/cards/ProfileCards'

export function MyAnnouncement({ select, announcement }) {
   const [sortPrice, setSortPrice] = useState('')
   const [sortRatingg, setSortRating] = useState('')
   const [sort, setSort] = useState('')
   const dispatch = useDispatch()

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
         rating: sortRatingg,
      }

      if (sort || sortPrice || sortRatingg) {
         dispatch(filterHouseRequest(params))
      } else {
         dispatch(getAnnouncement())
      }
   }, [sortPrice, sortRatingg, sort, dispatch])

   return (
      <Container>
         {select === 'true' && (
            <div>
               <SelectContainer>
                  <Select
                     labelName="sort  house type"
                     data={homeTypeProfile}
                     onChange={onChangeHomeType}
                  />
                  <Select
                     labelName="sort by price"
                     data={price}
                     onChange={changePriceHandler}
                  />
                  <Select
                     labelName="sort by rating"
                     data={popularProfile}
                     onChange={changeRatingHandler}
                  />
               </SelectContainer>

               <ProfileCards data={announcement} announcement="true" />
            </div>
         )}
      </Container>
   )
}

const SelectContainer = styled('div')`
   padding-bottom: 3rem;
   display: flex;
   justify-content: space-around;
`
const Container = styled('div')`
   padding: 3% 0px;
   width: 100%;
   flex-wrap: wrap;
`
