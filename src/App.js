import React from 'react'
import { AppRoutes } from './routes/AppRoutes'
import { Payment } from './components/payment/Payment'

function App() {
   return (
      <div>
         <Payment methot="post" price="50" announcementId="9" />
         <AppRoutes />
      </div>
   )
}
export default App
