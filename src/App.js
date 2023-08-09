import React from 'react'
import { Cards } from './components/UI/cards/Cards'
// import { UserProfile } from './components/Profile/Profile'

function App() {
   const data = [
      {
         urls: [
            'https://images.pexels.com/photos/17428217/pexels-photo-17428217/free-photo-of-grand-hotel-on-sea-shore-in-llandudno.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
         ],
         location: 'sdsds',
         title: 'eadg fdgs  ffg ',
      },
   ]

   return (
      <div>
         {/* AirBnB */}
         {/* <UserProfile /> */}
         <Cards data={data} />
      </div>
   )
}
export default App
