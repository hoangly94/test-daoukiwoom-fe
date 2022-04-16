import Link from 'next/link'
import React from 'react'
import Home from '~svg/Home'
import * as S from './styled'

const Navigation3 = () => {
    return <S.Navigation>
        <S.NavigationLogo src='/images/logo.png'/>
        <S.NavigationLink href='/'><Home/>Home</S.NavigationLink>
    </S.Navigation>
}
export default Navigation3