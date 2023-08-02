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
import { useEffect, useState } from 'react'
import { Delete } from '../../assets/icons'
import { deleteUser, getAllUsers } from '../../api/userService'

function ReusableTable() {
   const [users, setUsers] = useState([])

   const getUsers = async () => {
      try {
         const response = await getAllUsers()
         const data = response
         setUsers(data.data)
      } catch (error) {
         console.log('error: ', error)
      }
   }

   const deleteUserById = async (id) => {
      try {
         await deleteUser(id)
         console.log('id: ', id)
      } catch (error) {
         console.log('error: ', error)
      }
   }

   useEffect(() => {
      getUsers()
   }, [])

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
      },
   ]

   return (
      <StylePaper>
         {users.length > 0 ? (
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
                              <StyledTableCell>{user.id}</StyledTableCell>
                              <StyledTableCell>{user.fullName}</StyledTableCell>
                              <TableCell align="center">{user.email}</TableCell>
                              <TableCell align="right">
                                 {user.announcements}
                              </TableCell>
                              <TableCell align="right">
                                 {user.bookings}
                              </TableCell>
                              <TableCell align="right">
                                 <IconButton
                                    onClick={() => deleteUserById(user.id)}
                                 >
                                    <Delete />
                                 </IconButton>
                              </TableCell>
                           </StyledTableRow>
                        )
                     })}
                  </TableBody>
               </Table>
            </TableContainer>
         ) : (
            <p>There are no users here yet</p>
         )}
      </StylePaper>
   )
}

export default ReusableTable

const StylePaper = styled(Paper)`
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
