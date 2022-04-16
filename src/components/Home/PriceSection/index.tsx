import React from 'react'
import * as S from './styled'

const PriceSection = () => {
    return (
        <S.PriceSection>
            <S.PriceSectionItem>
                <S.PriceSectionTitle>Free Test</S.PriceSectionTitle>
                <S.PriceSectionDescription>Organize across all apps by hand</S.PriceSectionDescription>
                <S.PriceSectionCost>
                    <S.PriceSectionNumber style={{fontSize: '6.4rem'}}>0</S.PriceSectionNumber>
                    <S.PriceSectionLabels>
                        <span>$</span>
                        <div>Per Month</div>
                    </S.PriceSectionLabels>
                </S.PriceSectionCost>
            </S.PriceSectionItem>
            <S.PriceSectionItem>
                <S.PriceSectionTitle>Low Price</S.PriceSectionTitle>
                <S.PriceSectionDescription>Monthly Fixed Amount</S.PriceSectionDescription>
                <S.PriceSectionCost>
                    <S.PriceSectionNumber>200.000</S.PriceSectionNumber>
                    <S.PriceSectionLabels>
                        <span>$</span>
                        <div>Per Month</div>
                    </S.PriceSectionLabels>
                </S.PriceSectionCost>
            </S.PriceSectionItem>
            <S.PriceSectionItem style={{border: '2px solid #E6367E'}}>
                <S.PriceSectionTitle>Easy Using Methods</S.PriceSectionTitle>
                <S.PriceSectionDescription>Various Manuals</S.PriceSectionDescription>
                <S.PriceSectionCost>
                    <S.PriceSectionNumber>200.000</S.PriceSectionNumber>
                    <S.PriceSectionLabels>
                        <span>$</span>
                        <div>Per Month</div>
                    </S.PriceSectionLabels>
                </S.PriceSectionCost>
            </S.PriceSectionItem>
            <S.PriceSectionItem2>
                <S.PriceSectionTitle2>Verified IT Service</S.PriceSectionTitle2>
                <S.PriceSectionDescription2>On sale in 4 countries</S.PriceSectionDescription2>
                <S.PriceSectionCost2>
                    <S.PriceSectionNumber2>300.000</S.PriceSectionNumber2>
                    <S.PriceSectionLabels2>
                        <span>VND</span>
                        <div>Per Month</div>
                    </S.PriceSectionLabels2>
                </S.PriceSectionCost2>
            </S.PriceSectionItem2>
        </S.PriceSection>
    )
}
export default PriceSection