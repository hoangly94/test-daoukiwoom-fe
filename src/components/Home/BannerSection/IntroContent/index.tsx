import Link from 'next/link'
import React from 'react'
import Home from '~svg/Home'
import * as S from './styled'

const IntroContent = () => {
    return (
        <S.IntroContent>
            <S.IntroContentTabs>
                <S.IntroContentTab {...{active:true}}>Now</S.IntroContentTab>
                <S.IntroContentTab>Future</S.IntroContentTab>
            </S.IntroContentTabs>
            <S.IntroContentStats>
                <S.IntroContentStat>
                    <div>6</div>
                    <div>different<br/>IT Software<br/>Networks</div>
                </S.IntroContentStat>
                <S.IntroContentStat>
                    <div>32</div>
                    <div>partners</div>
                </S.IntroContentStat>
                <S.IntroContentStat>
                    <div>4</div>
                    <div>countries</div>
                </S.IntroContentStat>
            </S.IntroContentStats>
        </S.IntroContent>
    )
}
export default IntroContent