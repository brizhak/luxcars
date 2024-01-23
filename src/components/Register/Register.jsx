import React from 'react';
import { MainContainer, FormContainer, RegisterForm, RegisterInput, RegisterButton, LoginText, LoginLink } from './Register.styled';
import { Formik } from 'formik';
import styled from 'styled-components';

const Register = () => {
  return (
    <MainContainer>
      <FormContainer>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Please enter name';
            } else if (!values.email) {
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
            <RegisterForm onSubmit={handleSubmit}>
              <RegisterInput
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              <RegisterInput
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              <RegisterInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              <RegisterButton type="submit" disabled={isSubmitting}>
                Sign up
              </RegisterButton>
              <LoginText>If you already have an account, please <LoginLink to={'/login'}>sign in</LoginLink></LoginText>
            </RegisterForm>
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

export default Register;

