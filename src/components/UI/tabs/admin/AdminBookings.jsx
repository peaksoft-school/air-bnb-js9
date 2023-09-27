import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { AdminCards } from '../../cards/admin/AdminCards'

export function AdminBookings() {
   const { bookings } = useSelector((state) => state.admin)
   console.log(bookings, 'bookings')
   return (
      <Container>
         <div className="block">
            <AdminCards data={bookings} image />
         </div>
         {/* <NoCard>Уou dont have a cards</NoCard> */}
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'flex-start',
   '.block': {
      display: 'flex',
      flexDirection: 'column-reverse',
   },
}))
