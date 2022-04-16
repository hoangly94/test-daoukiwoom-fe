import React from 'react'
import { Option } from 'sezy-design'
import * as S from './styled'

const Navigation = () => {
    return <S.Navigation>
        <S.NavigationLangSelect type='nude'>
            <Option value='EN' active>EN</Option>
            <Option value='VI'>VI</Option>
        </S.NavigationLangSelect>
        <S.NavigationCompanySelect type='nude'>
            <Option value='Company' active>Company</Option>
            <Option value='Company2'>Company 2</Option>
        </S.NavigationCompanySelect>
        <S.NavigationPartnerSelect type='nude'>
            <Option value='Partner' active>Partner Market Place</Option>
            <Option value='Partner2'>Partner Market Place2</Option>
        </S.NavigationPartnerSelect>
    </S.Navigation>
}
export default Navigation