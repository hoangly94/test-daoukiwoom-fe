import React from 'react'
import * as S from './styled'

const ContactSection = () => {
    return (
        <S.ContactSection>
            <S.ContactSectionItem>
                <S.ContactSectionTitle>Vietnam Office</S.ContactSectionTitle>
                <S.ContactSectionAddress>14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city</S.ContactSectionAddress>
                <S.ContactSectionAddress>Business resigtration: 0315421202</S.ContactSectionAddress>
                <S.ContactSectionAddress>Tel: 028-3520-2367   sales@dkinno.com</S.ContactSectionAddress>
                <S.ContactSectionAddress>Copyright 2021 DaouKiwoom Innocation C0., Ltd</S.ContactSectionAddress>
            </S.ContactSectionItem>
            <S.ContactSectionItem>
                <S.ContactSectionTitle>Indonesia Office</S.ContactSectionTitle>
                <S.ContactSectionAddress>Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI Jakarta 12190, Indonsia</S.ContactSectionAddress>
                <S.ContactSectionAddress>Tel: +62-21-5082-0038</S.ContactSectionAddress>
            </S.ContactSectionItem>
            <S.ContactSectionItem>
                <S.ContactSectionTitle>Korea Office</S.ContactSectionTitle>
                <S.ContactSectionAddress>5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea</S.ContactSectionAddress>
            </S.ContactSectionItem>
        </S.ContactSection>
    )
}
export default ContactSection