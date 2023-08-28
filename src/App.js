import React from 'react'
import { AppRoutes } from './routes/AppRoutes'
import { Favorite } from './components/favorite/Favorite'

function App() {
   return (
      <div>
         <AppRoutes />
         <Favorite />
      </div>
   )
}
export default App
