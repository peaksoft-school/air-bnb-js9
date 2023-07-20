import React from 'react'
import { Cards } from './components/UI/cards/Cards'
import { data } from './utils/constants/helpers'

function App() {
   return (
      <div>
         AirBnB
         <Cards data={data} />
      </div>
   )
}
export default App
