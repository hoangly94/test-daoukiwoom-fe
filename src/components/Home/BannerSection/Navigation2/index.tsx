import Link from 'next/link'
import React from 'react'
import { Option } from 'sezy-design'
import * as S from './styled'

const Navigation2 = () => {
    return <S.Navigation>
        <S.NavigationLink href='/Auto-Homepage'>Auto Homepage</S.NavigationLink>
        <S.NavigationLink href='/Sales'>Sales</S.NavigationLink>
        <S.NavigationLink href='/CRM'>CRM</S.NavigationLink>
        <S.NavigationLink href='/Electronic-office'>Electronic office</S.NavigationLink>
        <S.NavigationLink href='/Cloud-ERP'>Cloud ERP</S.NavigationLink>
        <S.NavigationLink href='/SSL'>SSL</S.NavigationLink>
    </S.Navigation>
}
export default Navigation2