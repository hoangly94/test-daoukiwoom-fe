import Link from "next/link";
import {  Row, Section, Select } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const Navigation = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:2.4rem;
`;
export const NavigationLink = styled.a`
  font-weight: 400;
  font-size: 1.4rem;
  color: #FFF;
  text-align:center;
`;