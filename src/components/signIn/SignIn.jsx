import React, { useState } from 'react'
import { InputAdornment, styled } from '@mui/material'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { Input } from '../UI/input/Input'
import { Button } from '../UI/button/Button'
import { signInRequest } from '../../store/auth/authThunk'
import { HiddenPassword, SeenPassword } from '../../assets/icons'
import { toastSnackbar } from '../UI/snackbar/Snackbar'

export function SignIn({ moveToSigninAndSignUp }) {
   const [seePassword, setSeePassword] = useState(false)
   const { toastType } = toastSnackbar()

   const seePasswordHandler = () => {
      setSeePassword((prev) => !prev)
   }
   const validationSchema = Yup.object().shape({
      email: Yup.string().required('Required').email('It is not an email'),
      password: Yup.string()
         .required('Required')
         .min(8, 'Password must be more than 8 symbols'),
   })

   const dispatch = useDispatch()

   const handleSubmit = async (values) => {
      try {
         await dispatch(signInRequest(values))
         toastType(
            'success',
            'Successfully logIn as ADMIN',
            'Вы только что выполнили вход на наш сайт как Админ'
         )
      } catch (error) {
         toastType('error', 'Login error', 'Something went wrong')
      }
   }

   return (
      <Container>
         <StyledH3>SIGN IN</StyledH3>
         <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
         >
            {({ errors, touched, values, handleChange }) => (
               <FormStyled>
                  <InputContainer>
                     <Input
                        type="text"
                        name="email"
                        barsbek="krash"
                        size="small"
                        placeholder="Login"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && !!errors.email}
                     />
                     {errors.email && touched.email && (
                        <p style={{ color: 'red' }}>{errors.email}</p>
                     )}
                  </InputContainer>

                  <InputContainer>
                     <Input
                        type={seePassword ? 'text' : 'password'}
                        name="password"
                        barsbek="krash"
                        size="small"
                        placeholder="Password"
                        value={values.password}
                        error={touched.password && !!errors.password}
                        onChange={handleChange}
                        InputProps={{
                           endAdornment: (
                              <InputAdornment position="end">
                                 {seePassword ? (
                                    <SeenPassword
                                       style={{
                                          cursor: 'pointer',
                                       }}
                                       onClick={seePasswordHandler}
                                    />
                                 ) : (
                                    <HiddenPassword
                                       style={{
                                          cursor: 'pointer',
                                       }}
                                       onClick={seePasswordHandler}
                                    />
                                 )}
                              </InputAdornment>
                           ),
                        }}
                     />
                     {errors.password && touched.password && (
                        <p style={{ color: 'red' }}>{errors.password}</p>
                     )}
                  </InputContainer>

                  <Button
                     type="submit"
                     variant="contained"
                     width="100%"
                     color="white"
                     bgColor="#DD8A08"
                  >
                     SIGN IN
                  </Button>
               </FormStyled>
            )}
         </Formik>
         <StyledAhref onClick={moveToSigninAndSignUp}>
            sign in with google
         </StyledAhref>
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}))

const StyledH3 = styled('h3')(() => ({
   color: '#000',
   fontFamily: 'Inter',
   fontSize: '18px',
   fontWeight: '500',
   textTransform: 'uppercase',
   marginBottom: '1.5rem',
}))

const StyledAhref = styled('a')(() => ({
   color: '#266BD3',
   fontFamily: 'Inter',
   fontSize: '14px',
   fontWeight: ' 400',
   marginTop: '1.8rem',
   textDecoration: 'underline',
   cursor: 'pointer',
}))

const FormStyled = styled(Form)`
   width: 100%;

   svg {
      path {
         fill: gray;
      }
   }
`
const InputContainer = styled('div')(() => ({
   height: '5vh',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   gap: '0.3rem',
   marginBottom: '2rem',
}))
