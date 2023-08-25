import React from 'react'
import { AppRoutes } from './routes/AppRoutes'

function App() {
   return (
      <div>
         <AppRoutes />
      </div>
   )
}
export default App

// import React from 'react'
// import StripeCheckout from 'react-stripe-checkout'
// import axios from 'axios'

// function App() {
//    async function handleToken(token) {
//       console.log(token)
//       await axios
//          .post('http:// :8080/api/payment/charge', {
//             token: token.id,
//             amount: 500,
//          })
//          .then(() => {
//             alert('Payment Success')
//          })
//          .catch((error) => {
//             console.log(error)
//          })
//    }

//    const handleTokenWrapper = (token) => {
//       handleToken(token)
//    }
//    return (
//       <div className="App">
//          <StripeCheckout
//             stripeKey=""
//             token={handleTokenWrapper}
//             amount={1000}
//             name="Your Company Name"
//             description="Payment for Services"
//             currency="USD"
//          />
//       </div>
//    )
// }

// export default App
