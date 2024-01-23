import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  height: calc(95vh - 65px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 428px) {
    height: calc(95vh - 75px);
  }
  @media screen and (min-width: 768px) {
    height: calc(100vh - 80px);
  }
  @media screen and (min-width: 1158px) {
    height: calc(100vh - 75px);
  }
`

export const FormContainer = styled.div`
  width: 300px;
  @media screen and (min-width: 768px){
    width: 400px;
  }
  @media screen and (min-width: 1158px) {
    width: 494px;
  }
`

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    gap: 28px;
  }
  @media screen and (min-width: 1158px) {
    gap: 32px;
  }
`

export const RegisterInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 40px;
  @media screen and (min-width: 768px) {
    height: 57px;
  }
  @media screen and (min-width: 1158px) {
    height: 64px;
  }
`

export const RegisterButton = styled.button`
  font-size: 16px;
  text-decoration: none;
  color: var(--second-text-color);
  padding: 6px 15px;
  height: 50px;
  border-color: transparent;
  border-radius: 40px;
  background-color: var(--accent-color);
  transition: all 0.3s;
  &:hover {
    background-color: var(--darker-accent-color);
  }
  @media screen and (min-width: 768px) {
    height: 57px;
    font-size: 18px;
  }
  @media screen and (min-width: 1158px) {
    height: 64px;
    font-size: 20px;
  }
`

export const LoginText = styled.p`
  text-align: center;
  font-size: 14px;
  @media screen and (min-width: 1158px) {
    font-size: 16px;
  }
`

export const LoginLink = styled(Link)`
  transition: all 0.3s;
  &:hover {
    color: var(--accent-color);
  }
`