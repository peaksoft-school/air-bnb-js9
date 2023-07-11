import React from 'react'
import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TablePagination,
   TableRow,
} from '@mui/material'

function ReusableTable({ data }) {
   const columns = [
      {
         header: '№',
         key: 'id',
      },
      {
         header: 'Contact',
         key: 'contact',
      },
      {
         header: 'Bookings',
         key: 'bookings',
      },
      {
         header: 'Announcement',
         key: 'announcement',
      },
   ]

   return (
      <Paper sx={{ width: '100%' }}>
         <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
               <TableHead>
                  <TableRow>
                     <TableCell align="center" colSpan={2}>
                        Country
                     </TableCell>
                     <TableCell align="center" colSpan={3}>
                        Details
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     {columns.map((column) => (
                        <TableCell
                           key={column.id}
                           align={column.align}
                           style={{ top: 57, minWidth: column.minWidth }}
                        >
                           {column.label}
                        </TableCell>
                     ))}
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows
                     .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                     )
                     .map((row) => {
                        return (
                           <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                           >
                              {data.map((column) => {
                                 const value = row[column.id]
                                 return (
                                    <TableCell
                                       key={column.id}
                                       align={column.align}
                                    >
                                       {column.format &&
                                       typeof value === 'number'
                                          ? column.format(value)
                                          : value}
                                    </TableCell>
                                 )
                              })}
                           </TableRow>
                        )
                     })}
               </TableBody>
            </Table>
         </TableContainer>
         <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />
      </Paper>
   )
}

export default ReusableTable
