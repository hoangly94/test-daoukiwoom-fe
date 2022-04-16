import React from 'react'
import * as  S from './styled';
import IFormMessage from '~interfaces/IFormMessage';
import { useTrans } from '~hooks';

interface FormMessageProps {
    label: string,
    error: IFormMessage
}

const FormMessage = ({ label, error }: FormMessageProps) => {
    const trans = useTrans();
    return error ? <S.FormMessage>{`${label} ${trans?.message?.form?.[error.type]}`}</S.FormMessage> : null
}

export default FormMessage