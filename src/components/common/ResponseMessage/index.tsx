import React from 'react'
import * as  S from './styled';
import { useTrans } from '~hooks';

interface ResponseMessageProps {
    message?: string,
}

const ResponseMessage = ({ message }: ResponseMessageProps) => {
    const trans = useTrans();
    return message ? <S.ResponseMessage>{trans.message?.response?.[message] ?? message}</S.ResponseMessage> : null
}

export default ResponseMessage