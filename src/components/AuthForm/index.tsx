import React from 'react'
import * as  S from './styled';
import { useForm } from "react-hook-form";
import { Label } from 'sezy-design';
import FormMessage from '~components/common/FormMessage';
import ResponseMessage from '~components/common/ResponseMessage';
import Link from 'next/link';
import Checkbox from 'sezy-design/components/checkbox';
import { usePostLoginMutation } from '~store/modules/index/api';

const AuthForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [requestLogin, { error: loginError},] = usePostLoginMutation();
    const onSubmit = async data =>  await requestLogin(data);

    return <S.AuthFormWrapper>
        <div>
            <S.AuthFormTitle size='2xl'>Login</S.AuthFormTitle>
            <S.AuthFormInput
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                placeholder='Email...'
                size='l'
            />
            <FormMessage error={errors.email} label='Email' />
            <S.AuthFormInput
                valueType='password'
                {...register("password", { required: true, minLength: 6, maxLength: 255 })}
                placeholder='Password...'
                size='l'
            />
            <FormMessage error={errors.password} label='Password' />
            <S.AuthFormActions>
                <S.AuthFormRemember>
                    <Checkbox size='s' />
                    <Label size='s'>Remember</Label>
                </S.AuthFormRemember>
                <Link href='/register'>Register</Link>
            </S.AuthFormActions>

            <ResponseMessage 
                message={loginError?.['data']?.message}
            />
            
            <S.AuthFormSubmit label='Login' onClick={handleSubmit(onSubmit)} size='l' />
        </div>
    </S.AuthFormWrapper>
}
export default AuthForm