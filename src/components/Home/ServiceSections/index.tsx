import React from 'react'
import { Tag } from 'sezy-design'
import Service1 from '~svg/Service1'
import Service2 from '~svg/Service2'
import Service3 from '~svg/Service3'
import Service4 from '~svg/Service4'
import Service6 from '~svg/Service6'
import * as S from './styled'

const ServiceSections = () => {
    return (
        <>

            <S.ServiceSection>
                <S.ServiceSectionTitle>IT CLOUD SEA’S IT SERVICE</S.ServiceSectionTitle>
                <S.ServiceSectionContent>
                    <Service1 />
                    <S.ServiceSectionDetail>
                        <S.ServiceSectionDetailTitle>Assets</S.ServiceSectionDetailTitle>
                        <S.ServiceSectionDetailTags>
                            <div>
                                <S.ServiceSectionDetailDescription>Inventory Management</S.ServiceSectionDetailDescription>
                                <S.ServiceSectionDetailTag>G-Book</S.ServiceSectionDetailTag>
                            </div>
                        </S.ServiceSectionDetailTags>
                    </S.ServiceSectionDetail>
                </S.ServiceSectionContent>
            </S.ServiceSection>

            <S.ServiceSection>
                <S.ServiceSectionContent>
                    <S.ServiceSectionDetail>
                        <S.ServiceSectionDetailTitle>Accounting</S.ServiceSectionDetailTitle>
                        <S.ServiceSectionDetailTags>
                            <div>
                                <S.ServiceSectionDetailDescription>Accounting</S.ServiceSectionDetailDescription>
                                <S.ServiceSectionDetailTag>G-Book</S.ServiceSectionDetailTag>
                            </div>
                        </S.ServiceSectionDetailTags>
                    </S.ServiceSectionDetail>
                    <Service2 />
                </S.ServiceSectionContent>
            </S.ServiceSection>

            <S.ServiceSection>
                <S.ServiceSectionContent>
                    <Service3 />
                    <S.ServiceSectionDetail>
                        <S.ServiceSectionDetailTitle>HR & Admin</S.ServiceSectionDetailTitle>
                        <S.ServiceSectionDetailTags>
                            <div>
                                <S.ServiceSectionDetailDescription>Webmail</S.ServiceSectionDetailDescription>
                                <S.ServiceSectionDetailTag>E-office</S.ServiceSectionDetailTag>
                            </div>
                            <div>
                                <S.ServiceSectionDetailDescription>E- Apporval</S.ServiceSectionDetailDescription>
                                <S.ServiceSectionDetailTag>E-office</S.ServiceSectionDetailTag>
                            </div>
                            <div>
                                <S.ServiceSectionDetailDescription>E- Document</S.ServiceSectionDetailDescription>
                                <S.ServiceSectionDetailTag>E-office</S.ServiceSectionDetailTag>
                            </div>
                            <div>
                                <S.ServiceSectionDetailDescription>E- Document</S.ServiceSectionDetailDescription>
                                <S.ServiceSectionDetailTag>E-office</S.ServiceSectionDetailTag>
                            </div>
                            <div>
                                <S.ServiceSectionDetailDescription>Co-work/Project</S.ServiceSectionDetailDescription>
                                <S.ServiceSectionDetailTag>E-office</S.ServiceSectionDetailTag>
                            </div>
                        </S.ServiceSectionDetailTags>
                    </S.ServiceSectionDetail>
                </S.ServiceSectionContent>
            </S.ServiceSection>

            <S.ServiceSection>
                <S.ServiceSectionContent>
                    <S.ServiceSectionDetail>
                        <S.ServiceSectionDetailTitle>Sales</S.ServiceSectionDetailTitle>
                        <S.ServiceSectionDetailTags>
                            <div>
                                <S.ServiceSectionDetailDescription>Create Homepage<br/>Youtube & Instagram</S.ServiceSectionDetailDescription>
                                <S.ServiceSectionDetailTag>Fieldmake</S.ServiceSectionDetailTag>
                            </div>
                        </S.ServiceSectionDetailTags>
                    </S.ServiceSectionDetail>
                    <Service4 />
                </S.ServiceSectionContent>
            </S.ServiceSection>

            <S.ServiceSection>
                <S.ServiceSectionContent>
                    <Service1 />
                    <S.ServiceSectionDetail>
                        <S.ServiceSectionDetailTitle>Customer</S.ServiceSectionDetailTitle>
                        <S.ServiceSectionDetailTags>
                            <div>
                                <S.ServiceSectionDetailDescription>Customer Request Management</S.ServiceSectionDetailDescription>
                                <S.ServiceSectionDetailTag>OQUFIE</S.ServiceSectionDetailTag>
                            </div>
                        </S.ServiceSectionDetailTags>
                    </S.ServiceSectionDetail>
                </S.ServiceSectionContent>
            </S.ServiceSection>

            <S.ServiceSection>
                <S.ServiceSectionContent>
                    <S.ServiceSectionDetail>
                        <S.ServiceSectionDetailTitle>Security</S.ServiceSectionDetailTitle>
                        <S.ServiceSectionDetailTags>
                            <div>
                                <S.ServiceSectionDetailDescription>SSL server</S.ServiceSectionDetailDescription>
                                <S.ServiceSectionDetailTag>SECTIGO</S.ServiceSectionDetailTag>
                            </div>
                        </S.ServiceSectionDetailTags>
                    </S.ServiceSectionDetail>
                    <Service6 />
                </S.ServiceSectionContent>
            </S.ServiceSection>
        </>
    )
}
export default ServiceSections