import {  Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const ContactSection = styled(Section)`
  border-top: 1px solid rgba(153, 153, 153, 0.46);
  background: #F3F9FF;
  &>div{
    display:flex;
  }
`;
export const ContactSectionItem = styled.div`
  flex:1;
  padding:4rem;
  &:nth-child(2){
    border-left: 1px solid rgba(153, 153, 153, 0.46);
    border-right: 1px solid rgba(153, 153, 153, 0.46);
  }
`;
export const ContactSectionTitle = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  color: #181949;
  margin-bottom:0.4rem;
`;
export const ContactSectionAddress = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #666666;
  margin-top:1.6rem;
`;