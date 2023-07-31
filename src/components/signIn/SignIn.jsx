import React from 'react'
import { styled } from '@mui/material'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Input } from '../UI/input/Input'
import { Button } from '../UI/button/Button'

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
                  <div style={{ marginBottom: '1rem' }}>
                     <Input
                        type="text"
                        name="email"
                        barsbek="krash"
                        size="small"
                        height="45px"
                        placeholder="Login"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && !!errors.email}
                     />
                     {errors.email && touched.email && (
                        <p style={{ color: 'red' }}>{errors.email}</p>
                     )}
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                     <Input
                        type="password"
                        name="password"
                        barsbek="krash"
                        size="small"
                        height="45px"
                        placeholder="Password"
                        value={values.password}
                        error={touched.password && !!errors.password}
                        onChange={handleChange}
                     />
                     {errors.password && touched.password && (
                        <p style={{ color: 'red' }}>{errors.password}</p>
                     )}
                  </div>

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
}))

const FormStyled = styled(Form)(() => ({
   width: '100%',
}))
