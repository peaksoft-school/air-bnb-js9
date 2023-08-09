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
import Modal from '../UI/modal/Modal'
import { Button } from '../UI/button/Button'

function ReusableTable() {
   const [users, setUsers] = useState([])
   const [showModal, setShowModal] = useState(false)

   const getUsers = async () => {
      try {
         const response = await getAllUsers()
         const data = response
         setUsers(data.data)
      } catch (error) {
         console.log('error: ', error)
      }
   }

   const openModalHandler = () => {
      setShowModal((prev) => !prev)
   }

   const deleteUserById = async (id) => {
      try {
         await deleteUser(id)
         getUsers()
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
                                 <IconButton onClick={openModalHandler}>
                                    <Delete />
                                 </IconButton>
                              </TableCell>
                              {showModal && (
                                 <Modal
                                    open={showModal}
                                    onClose={openModalHandler}
                                    width="22%"
                                    height="190px"
                                    margin="350px 0"
                                 >
                                    Are your shure delate this user?
                                    <ButtonContainer
                                       style={{
                                          display: 'flex',
                                          marginTop: '50px',
                                       }}
                                    >
                                       <Button onClick={openModalHandler}>
                                          cancel
                                       </Button>
                                       <Button
                                          bgColor="orange"
                                          variant="contained"
                                          color="white"
                                          onClick={() =>
                                             deleteUserById(user.id)
                                          }
                                       >
                                          delete
                                       </Button>
                                    </ButtonContainer>
                                 </Modal>
                              )}
                           </StyledTableRow>
                        )
                     })}
                  </TableBody>
               </Table>
            </TableContainer>
         ) : (
            <ModalParagraph>There are no users here yet</ModalParagraph>
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
const ButtonContainer = styled('div')`
   display: flex;
   justify-content: center;
   gap: 30px;
   align-items: flex-end;
`
const ModalParagraph = styled('p')`
   margin-left: 90px;
   color: #000;
   font-size: 20px;
   font-weight: 500;
`

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
