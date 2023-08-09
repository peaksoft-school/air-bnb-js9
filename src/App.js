import React from 'react'
import { ReusableTable } from './components/table/Table'
// import { AppRoutes } from './routes/AppRoutes'
import { Snackbar } from './components/UI/snackbar/Snackbar'

function App() {
   return (
      <div>
         {/* <AppRoutes /> */}
         <ReusableTable />
         <Snackbar />
      </div>
   )
}
export default App
