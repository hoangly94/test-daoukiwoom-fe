import Link from "next/link";
import {  Row, Section, Select } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const IntroContent = styled.div`
  margin-top:7.5rem;
`;
export const IntroContentTabs = styled.div`
  text-align:center;
`;
export const IntroContentTab = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;  
  color:#fff;
  opacity: 0.5;
  padding:1.6rem 3.5rem;
  display:inline-block;
  ${props=>props['active'] && `
    border-bottom: 1.5px solid #CFE5FF;
    opacity: 1;
  `}
`;

export const IntroContentStats = styled.div`
  text-align:center;
  display:flex;
  justify-content:center;
`;
export const IntroContentStat = styled.div`
  margin: 2rem 5.5rem;
  &>div:first-child{
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 8.7rem;
    text-align: center;
    color: #CFE5FF;
  }
  &>div:last-child{
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.7rem;
    text-align: center;
    color: #FFF;

  }
`;