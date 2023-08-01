import React, { useState } from 'react'
import { Payment } from './components/payment/Payment'

function App() {
   const [toggle, setToggle] = useState(false)
   const toggles = () => {
      setToggle((prev) => !prev)
   }
   return (
      <div>
         <Payment openModalHandler={toggles} state={toggle} price="50" />
      </div>
   )
}
export default App
