import {  Button, Input, Label } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const AuthFormWrapper = styled.div`
  background: linear-gradient(153deg,#009ae9,#43e1ff,#f7a3ff);  
  width:100%;
  height:100%;
  &>div{
    width:40rem;
    padding:4rem 5rem;
    position:absolute;
    left:50%;
    top:40%;
    transform:translate(-50%,-50%);
    background:#fff;
    border-radius:8px;
  }
`;


export const AuthFormTitle = styled(Label)`
  font-weight:bold;
  margin-bottom:2rem;
  text-align:center;
  display:block;
`;
export const AuthFormInput = styled(Input)`
  color:red;
  display:block;
  margin:1.5rem 0;
`;

export const AuthFormActions= styled.div`
  display:flex;
  align-items:center;
  margin:1.5rem 0;
  &>a{
    font-size:1.4rem;
    color:blue;
  }
`;
export const AuthFormRemember= styled.div`
  flex:1;
  display:flex;
  align-items:center;
  &>span{
    margin-right:0.8rem;
  }
`;
export const AuthFormSubmit= styled(Button)`
  display:block;
  margin-top:2rem;
  width:100%;
`;