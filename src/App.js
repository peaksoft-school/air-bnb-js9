import React from 'react'
import { Booked } from './components/UI/booked/Booked'

function App() {
   const data = [
      {
         price: 233,
         name: 'gulzat',
         email: '@gmail.com',
         checkin: '20.10.2023',
         checkout: '20.10.2023',
      },
   ]
   return (
      <div>
         {data?.map((item) => {
            return <Booked item={item} />
         })}
      </div>
   )
}
export default App
