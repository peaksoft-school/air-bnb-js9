import { MenuItem, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select as MuiSelect } from '../select/Select'
import { filterHouseRequest } from '../../../store/profile/ProfileThunk'
import { homeTypeProfile, popularProfile, price } from '../../../utils/helpers'
import { ProfileCards } from '../cards/ProfileCards'
import { DeleteIcon } from '../../../assets/icons'

export function MyAnnouncement() {
   const { data } = useSelector((state) => state.getannouncement)

   const [sortPrice, setSortPrice] = useState('')
   const [sortRating, setSortRating] = useState('')
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
         rating: sortRating,
      }
      if (sort || sortPrice || sortRating) {
         dispatch(filterHouseRequest(params))
      }
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

   return (
      <div>
         {data?.announcements?.lenght === 0 ? (
            <NoCard>Уou dont have a cards</NoCard>
         ) : (
            <Container>
               <div className="block">
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
                        <StyledMenuItem onClick={clearAllFilters}>
                           Clear all
                        </StyledMenuItem>
                     ) : null}
                  </ContainerSelect>
                  <ContainerCards>
                     {data?.announcements?.map((announData) => {
                        return (
                           <ProfileCards
                              data={announData}
                              announcement="true"
                              key={announData.id}
                              message={announData.messagesFromAdmin}
                           />
                        )
                     })}
                  </ContainerCards>
               </div>
            </Container>
         )}
      </div>
   )
}
const NoCard = styled('div')`
   border: 4px dashed #dd8a08;
   padding: 20px;
   text-align: center;
   font-size: 18px;
   color: #555;
   background-color: #f9f9f9;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   max-width: 300px;
   margin-left: 16.6rem;
   margin-top: 5rem;
`

const ContainerSelect = styled('div')`
   display: flex;
   justify-content: start;
   gap: 0.94rem;
`

const SelectContainer = styled('div')`
   padding-bottom: 2rem;
   display: flex;
   justify-content: start;
   gap: 2.3rem;
`
const Container = styled('div')`
   padding: 3% 0px;
   width: 100%;
   flex-direction: column;
   justify-content: start;
`
const ContainerCards = styled('div')`
   max-width: 100%;
   height: auto;
   display: flex;
   flex-wrap: wrap;
   gap: 3rem;
   justify-content: start;
   margin-top: 2rem;
`
const SelectStyle = styled('p')(({ all }) => ({
   color: 'var(--tertiary-middle-gray, #636060)',
   fontSize: ' 16px',
   fontWeight: '400',
   background: ' var(--tertiary-the-lightest-gray, #f3f3f3)',
   // display: ' inline-flex',
   padding: '8px',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '3px',
   cursor: 'pointer',
   display: all === 'all' ? 'none' : 'block',
}))
const StyledMenuItem = styled(MenuItem)`
   color: var(--tertiary-middle-gray, #828282);
   font-family: Inter;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   text-decoration-line: underline;
   &:hover {
      text-decoration-line: underline;
   }
`
