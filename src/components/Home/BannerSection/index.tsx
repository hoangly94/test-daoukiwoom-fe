import React from 'react'
import { Col, Row, Section } from 'sezy-design'
import IntroContent from './IntroContent'
import Navigation from './Navigation'
import Navigation2 from './Navigation2'
import Navigation3 from './Navigation3'
import * as S from './styled'

const BannerSection = () => {
    return (
        <>
            <S.BannerBackgroundWrapper>
                <Col grid={10}>

                </Col>
                <S.BannerBackground grid={14}>
                    <S.BannerNavigationBackground />
                    <S.BannerBackgroundImg src="/images/background.png"/>
                </S.BannerBackground>
            </S.BannerBackgroundWrapper>
            <Section>
                <Row>
                    <S.BannerContentLeft grid={10}>
                        <Navigation3/>
                        <S.BannerContentLeftText>Asia IT<br/>Market Place</S.BannerContentLeftText>
                    </S.BannerContentLeft>
                    <S.BannerContentRight grid={14}>
                        <Navigation/>
                        <Navigation2/>
                        <IntroContent/>
                    </S.BannerContentRight>
                </Row>
            </Section>
        </>
    )
}
export default BannerSection