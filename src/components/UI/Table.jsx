import React from 'react'
import {
   IconButton,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   styled,
} from '@mui/material'
import { Delete } from '../../assets/icons'

const users = [
   {
      id: '1',
      name: 'Илон Маск',
      contact: 'elonmusk@gmail.com',
      bookings: '1',
      announcement: '2',
   },
   {
      id: '2',
      name: 'Илон Маск',
      contact: 'elonmusk@gmail.com',
      bookings: '1',
      announcement: '2',
   },
   {
      id: '3',
      name: 'Илон Маск',
      contact: 'elonmusk@gmail.com',
      bookings: '1',
      announcement: '2',
   },
   {
      id: '4',
      name: 'Илон Маск',
      contact: 'elonmusk@gmail.com',
      bookings: '1',
      announcement: '2',
   },
]

function ReusableTable() {
   const columns = [
      {
         header: '№',
         key: 'id',
         minWidth: '10px',
         align: 'left',
      },
      {
         header: 'Name',
         key: 'name',
      },
      {
         header: 'Contact',
         key: 'contact',
         align: 'center',
         minWidth: '136px',
      },
      {
         header: 'Bookings',
         key: 'bookings',
         align: 'right',
         minWidth: '20px',
      },
      {
         header: 'Announcement',
         key: 'announcement',
         align: 'right',
         minWidth: '10px',
      },
      {
         header: 'Action',
         key: 'action',
         minWidth: '10px',
         align: 'right',
         render: () => (
            <TableCell align="right">
               <IconButton>
                  <Delete />
               </IconButton>
            </TableCell>
         ),
      },
   ]

   return (
      <StylePaper>
         <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
               <TableHead>
                  <TableRow sx={{ height: '2%' }}>
                     {columns.map((column) => (
                        <StyledTableCell
                           key={column.key}
                           align={column.align}
                           style={{ minWidth: column.minWidth }}
                           sx={
                              column.header && {
                                 backgroundColor:
                                    'var(--tertiary-dark-gray, #646464)',
                                 color: 'white',
                              }
                           }
                        >
                           {column.header}
                        </StyledTableCell>
                     ))}
                  </TableRow>
               </TableHead>

               <TableBody>
                  {users?.map((user) => {
                     return (
                        <StyledTableRow
                           hover
                           role="checkbox"
                           tabIndex={-1}
                           key={user.id}
                        >
                           {columns.map((column) => {
                              if (column.render) {
                                 return column.render()
                              }

                              const value = user[column.key]
                              return (
                                 <StyledTableCell
                                    key={column.key}
                                    align={column.align}
                                    name={column.name}
                                 >
                                    {column.format && typeof value === 'number'
                                       ? column.format(value)
                                       : value}
                                 </StyledTableCell>
                              )
                           })}
                        </StyledTableRow>
                     )
                  })}
               </TableBody>
            </Table>
         </TableContainer>
      </StylePaper>
   )
}

export default ReusableTable
const StylePaper = styled(Paper)`
   margin-left: 5%;
   width: '90%';
   align-content: 'center';
`
const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${TableHead}`]: {
      color: theme.palette.common.white,
   },
   [`&.${TableBody}`]: {
      fontSize: 14,
   },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
   },
   '&:last-child td, &:last-child th': {
      border: 0,
   },
   '&.MuiTableRow-root:hover': {
      background: ' #D8D8D8',
   },
}))
