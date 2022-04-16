import React from 'react'
import BannerSection from './BannerSection'
import ContactSection from './ContactSection'
import PriceSection from './PriceSection'
import ServiceSections from './ServiceSections'
import * as S from './styled'
import TextSection from './TextSection'

const Index = () => {
    return (
        <>
            <BannerSection/>
            <TextSection/>
            <ServiceSections/>
            <PriceSection/>
            <ContactSection/>
        </>
    )
}
export default Index