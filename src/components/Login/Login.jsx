import React from 'react';
import { MainContainer, FormContainer, LoginForm, LoginInput, LoginButton, RegistrationText, RegistrationLink } from './Login.styled';
import { Formik } from 'formik';
import styled from 'styled-components';

const Login = () => {
  return (
    <MainContainer>
      <FormContainer>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Please enter email';
            } else if (!values.password) {
              errors.password = 'Please enter password';
            } else if (
              !/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <LoginForm onSubmit={handleSubmit}>
              <LoginInput
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              <LoginInput
                type="password"
                name="password"
                placeholder='Password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              <LoginButton type="submit" disabled={isSubmitting}>
                Sign in
              </LoginButton>
              <RegistrationText>If you do not have an account yet, please <RegistrationLink to={'/register'}>register</RegistrationLink></RegistrationText>
            </LoginForm>
          )}
        </Formik>
      </FormContainer>
    </MainContainer>
  );
};

const ErrorMessage = styled.div`
  color: red; 
  margin-top: 5px;
  font-size: 14px; 
`;
export default Login;
