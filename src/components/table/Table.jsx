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
import { useNavigate } from 'react-router-dom'
import { Delete } from '../../assets/icons'
import { deleteUser, getAllUsers } from '../../api/userService'
import Modal from '../UI/modal/Modal'
import { Button } from '../UI/button/Button'
import { toastSnackbar } from '../UI/snackbar/Snackbar'

export function ReusableTable() {
   const [users, setUsers] = useState([])
   const [showModal, setShowModal] = useState(false)
   const [userToDelete, setUserToDeleteId] = useState(null)
   const { toastType } = toastSnackbar()
   const navigate = useNavigate()
   const getUsers = async () => {
      try {
         const response = await getAllUsers()
         const data = response
         setUsers(data.data)
      } catch (error) {
         console.log('error: ', error)
      }
   }

   const openModalHandler = (id) => {
      setUserToDeleteId(id) // Установка id выбранного пользователя
      setShowModal(true)
   }
   const closeModalHandler = () => {
      setUserToDeleteId(null) // Обнуление id выбранного пользователя
      setShowModal(false)
   }

   const deleteUserById = async (id) => {
      try {
         await deleteUser(id)
         getUsers()

         closeModalHandler()
         toastType('success', 'deleted successfully', 'success')
      } catch (error) {
         toastType('error', error)
      }
   }
   const getUsersById = (payload) => {
      navigate(`${payload.id}`)
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
      <div style={{ padding: '3.10rem 2.5rem 0 2.5rem' }}>
         <h3 style={{ marginTop: '5rem', marginBottom: '1.25rem' }}>USERS</h3>
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
                        {users?.map((user) => (
                           <StyledTableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={user.id}
                              onClick={() => getUsersById(user)}
                              style={{ cursor: 'pointer' }}
                           >
                              <StyledTableCell>{user.id}</StyledTableCell>
                              <StyledTableCell>{user.fullName}</StyledTableCell>
                              <TableCell align="center">{user.email}</TableCell>
                              <TableCell align="right">
                                 {user.bookings}
                              </TableCell>
                              <TableCell align="right">
                                 {user.announcements}
                              </TableCell>
                              <TableCell align="right">
                                 <IconButton
                                    onClick={() => openModalHandler(user.id)}
                                 >
                                    <Delete />
                                 </IconButton>
                              </TableCell>
                           </StyledTableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            ) : (
               <ModalParagraph>There are no users here yet</ModalParagraph>
            )}
         </StylePaper>

         {showModal && (
            <Modal
               open={showModal}
               onClose={closeModalHandler}
               width="22%"
               height="190px"
               margin="350px 0"
            >
               Are you sure you want to delete this user?
               <ButtonContainer
                  style={{
                     display: 'flex',
                     marginTop: '50px',
                  }}
               >
                  <Button onClick={closeModalHandler}>cancel</Button>
                  <Button
                     bgColor="orange"
                     variant="contained"
                     color="white"
                     onClick={() => deleteUserById(userToDelete)}
                  >
                     delete
                  </Button>
               </ButtonContainer>
            </Modal>
         )}
      </div>
   )
}

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
