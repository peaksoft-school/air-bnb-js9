import React from 'react'
import { styled } from '@mui/material'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Input } from '../UI/input/Input'
import { Button } from '../UI/Button'

export function SignIn({ moveToSigninAndSignUp }) {
   const validationSchema = Yup.object().shape({
      email: Yup.string().required('Required').email('It is not an email'),
      password: Yup.string()
         .required('Required')
         .min(8, 'Password must be more than 8 symbols'),
   })

   const handleSubmit = (values) => {
      console.log(values)
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
                  <InputDiv>
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

                     <Input
                        type="password"
                        name="password"
                        barsbek="krash"
                        size="small"
                        placeholder="Password"
                        value={values.password}
                        error={touched.password && !!errors.password}
                        onChange={handleChange}
                     />
                     {errors.password && touched.password && (
                        <p style={{ color: 'red' }}>{errors.password}</p>
                     )}
                  </InputDiv>

                  <Button
                     type="submit"
                     variant="contained"
                     width="100%"
                     color="white"
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
   justifyContent: 'center',
   border: '1px solid gray',
   width: '29.625rem',
   padding: '1.56rem 1.87rem 1.56rem 1.87rem',
   backgroundColor: 'white',
   borderRadius: '10px',
}))

const InputDiv = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '100%',
   marginBottom: '2rem',
}))

const StyledH3 = styled('h3')(() => ({
   color: '#000',
   fontFamily: 'Inter',
   fontSize: '18px',
   fontWeight: '500',
   textTransform: ' uppercase',
   marginBottom: '1.5rem',
}))

const StyledAhref = styled('a')(() => ({
   color: '#266BD3',
   fontFamily: 'Inter',
   fontSize: '14px',
   fontWeight: ' 400',
   marginTop: '1.8rem',
   textDecoration: 'underline',
}))

const FormStyled = styled(Form)(() => ({
   width: '100%',
}))
