import Image from "next/image";
import {  Col, Row, Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const BannerBackgroundWrapper = styled(Row)`
  width:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
`;
export const BannerBackground = styled(Col)`
  position:relative;
`;
export const BannerBackgroundImg = styled.img`
  width:100%;
  height:65rem;
  object-fit:fill;
`;
export const BannerNavigationBackground = styled.div`
  background: #181949;
  height:3.6rem;
  width:100%;
  position:absolute;
  right:0;
  top:0;
`;

export const BannerContentLeft= styled(Col)`
  padding: 0 7rem 0 3.6rem !important;
  
`;
export const BannerContentLeftText= styled.div`
  font-weight: 700;
  font-size: 5.6rem;
  line-height: 7.6rem;
  color: #181949;
  margin-top:15rem;
`;
export const BannerContentRight= styled(Col)`
  padding: 0 3.6rem !important;
  height:65rem;
`;