import { Checkbox, InputAdornment, styled } from '@mui/material'
import React, { useState } from 'react'
import mainBackground from '../../assets/images/MainBackground.png'
import { Header } from '../../layout/Header/Header'
import { Input } from '../UI/input/Input'
import { SearchIcon } from '../../assets/icons'
import Modal from '../UI/modal/Modal'
import { JoinUs } from '../signIn/JoinUs'
import { SignIn } from '../signIn/SignIn'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export function MainPage() {
   const [userLogin, setUserLogin] = useState(false)
   const [openModal, setOpenModal] = useState(false)
   const [signIn, setSignIn] = useState(false)

   const loginHandler = () => {
      setUserLogin((prev) => !prev)
   }

   const openModalHandler = () => {
      setOpenModal((prev) => !prev)
   }

   const moveToSigninAndSignUp = () => {
      setSignIn((prev) => !prev)
   }

   return (
      <div>
         {openModal ? (
            <Modal open={openModal} onClose={openModalHandler}>
               {signIn ? (
                  <SignIn moveToSigninAndSignUp={moveToSigninAndSignUp} />
               ) : (
                  <JoinUs
                     loginHandler={loginHandler}
                     moveToSigninAndSignUp={moveToSigninAndSignUp}
                  />
               )}
            </Modal>
         ) : null}
         <StyleMain
            style={{
               background: `url(${mainBackground})`,
               backgroundSize: 'cover',
            }}
         >
            <Header userLogin={userLogin} openModalHandler={openModalHandler} />
            <Block>
               <h1>Find a place you ll love to stay at</h1>
               <BlockInput>
                  <Input
                     type="search"
                     width="100%"
                     size="small"
                     placeholder="Region, city, apartment, house..."
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <SearchIcon />
                           </InputAdornment>
                        ),
                     }}
                     barsbek="nekrash"
                  />
                  <div>
                     {userLogin ? null : (
                        <>
                           <StyleCheckbox
                              {...label}
                              id="id"
                              sx={{
                                 color: '#fff',
                                 '&.Mui-checked': {
                                    color: '#6495ED',
                                 },
                              }}
                           />
                           <label htmlFor="id">Искать поблизости</label>
                        </>
                     )}
                  </div>
               </BlockInput>
            </Block>
         </StyleMain>
      </div>
   )
}

const StyleMain = styled('div')(() => ({
   width: '100%',
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',
   gap: '17.69rem',
}))

const Block = styled('div')(() => ({
   width: '100%',
   minHeight: '10vh',
   display: 'flex',
   flexDirection: 'column',
   gap: '3.12rem',
   alignItems: 'center',
   h1: {
      color: '#FFF',
      fontFamily: 'Jenriv Titling',
      fontSize: '2.5rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      textTransform: 'uppercase',
   },
}))
const BlockInput = styled('div')(() => ({
   width: '60%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-end',
   div: {
      label: {
         color: '#EDEDED',
         fontFamily: 'Inter',
         fontSize: '1rem',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: 'normal',
      },
   },
}))
const StyleCheckbox = styled(Checkbox)(() => ({
   '&.MuiCheckbox-root': {
      borderColor: '#fff',
   },
}))
