import {  Section, Select } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const Navigation = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  height:3.6rem;
`;

const common = `
  display:inline-block;
  margin-left:6rem;
  & input{
    color:#CFE5FF;
    padding:0 !important;
  }
  & svg{
    fill:#CFE5FF;
  }
`
export const NavigationLangSelect = styled(Select)`
  ${common}
  & input{
    width:1.8rem;
  }
`;
export const NavigationCompanySelect = styled(Select)`
  ${common}
  & input{
    width:6.5rem;
  }
`;
export const NavigationPartnerSelect = styled(Select)`
  ${common}
  & input{
    width:14rem;
  }
`;