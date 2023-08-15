import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Cards } from '../UI/cards/Cards'
import {
   getAdminUsersCards,
   // getAdminUsersCardsId,
} from '../../store/admin-users/adminUsersThunk'

export function Bookings() {
   const { data } = useSelector((state) => state.adminUsers)
   console.log('data: ', data)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAdminUsersCards())
   }, [dispatch])

   // useEffect(() => {
   //    dispatch(getAdminUsersCardsId(data))
   // }, [])
   return (
      <div>
         {data.map((item) => (
            <div key={item.id}>
               <p>{item.fullname}</p>
               <h3>{item.email}</h3>
            </div>
         ))}
      </div>
   )
}
