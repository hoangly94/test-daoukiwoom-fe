import {  Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const TextSection = styled(Section)`
  background: #FFD1E8;
  height: 11.2rem;
  &>div{
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 11.2rem;
    text-align: center;
    color: #181949;
  }
`;