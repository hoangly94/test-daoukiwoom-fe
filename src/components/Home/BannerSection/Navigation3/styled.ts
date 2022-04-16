import Link from "next/link";
import {  Row, Section, Select } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const Navigation = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  margin-top:5rem;
`;
export const NavigationLogo = styled.img`
  
`;
export const NavigationLink = styled.a`
  font-weight: 700;
  font-size: 1.4rem;
  color: #181949;
  text-align:center;
  &>svg{
    fill:none;
    margin-right:1.2rem;
  }
`;