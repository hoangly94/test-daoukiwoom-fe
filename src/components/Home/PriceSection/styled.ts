import {  Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const PriceSection = styled(Section)`
  background: #F3F9FF;
  padding:12rem 0;
  &>div{
    display:flex;
    justify-content:space-between;
  }
`;
export const PriceSectionItem = styled.div`
  padding: 40px 0 40px 40px;
  width: 280px;
  background: #FFFFFF;
  border: 1px solid #DEDEDE;
  box-sizing: border-box;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;
export const PriceSectionTitle = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: #181949;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const PriceSectionDescription = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #374754;
  margin-top:0.8rem;
`;
export const PriceSectionCost = styled.div`
  display:flex;
  margin-top:3.5rem;
  margin-left:1rem;
`;
export const PriceSectionNumber = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 66px;
  color: #111111;
  margin-right:1rem;
`;
export const PriceSectionLabels = styled.div`
  &>span{
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #252B42;
  }
  &>div{
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #374754;
  }
`;


export const PriceSectionItem2 = styled.div`
  padding: 40px 0 40px 40px;
  width: 280px;
  background: #E6367E;
  border: 1px solid #E6367E;
  box-sizing: border-box;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;
export const PriceSectionTitle2 = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: #fff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const PriceSectionDescription2 = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  margin-top:0.8rem;
`;
export const PriceSectionCost2 = styled.div`
  display:flex;
  margin-top:3.5rem;
  margin-left:1rem;
`;
export const PriceSectionNumber2 = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 66px;
  color: #fff;
  margin-right:1rem;
`;
export const PriceSectionLabels2 = styled.div`
  &>span{
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #fff;
  }
  &>div{
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #fff;
  }
`;