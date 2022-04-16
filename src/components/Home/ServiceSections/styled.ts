import {  Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const ServiceSection = styled(Section)`
  padding: 8rem 0;
  // display:flex;
  // flex-direction: column;
  & svg{
    width:28rem;
    height:24rem;
  }
  &:nth-child(odd){
    background:#F4F4F4;
  }
`;
export const ServiceSectionTitle = styled.div`
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
    text-align: center;
    color: #181949;
    margin-bottom:10rem;
`;
export const ServiceSectionContent = styled.div`
  display:flex;
  jusitfy-content:space-between;
  align-items:center;
  padding:0 13rem;
  &>*{
    flex:1;
  }
`;
export const ServiceSectionDetail = styled.div`
  flex:1;
`;
export const ServiceSectionDetailTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: #181949;
`;
export const ServiceSectionDetailDescription = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  margin: 16px 0px;
  white-space:nowrap;
`;
export const ServiceSectionDetailTags = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap: wrap;
  &>div{
    display:inline-block;

    margin: 0 2.4rem;
    text-align:center;
    flex: 0 0 23%;
    // width: 20%;
  }
`;
export const ServiceSectionDetailTag = styled.div`
  padding: 8px 16px;
  background: #181949;
  border-radius: 8px;
  display:inline-block;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;