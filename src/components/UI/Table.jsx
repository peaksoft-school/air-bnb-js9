import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const ReusableTable = ({ data }) => {
   return (
      <Table>
         <TableHead>
            <TableRow>
               <TableCell>#</TableCell>
               <TableCell>Name</TableCell>
               <TableCell>Age</TableCell>
               {/* Добавьте остальные заголовки столбцов */}
            </TableRow>
         </TableHead>
         <TableBody>
            {data?.map((row, index) => (
               <TableRow key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  {/* Добавьте остальные ячейки для данных */}
               </TableRow>
            ))}
         </TableBody>
      </Table>
   )
}

export default ReusableTable
