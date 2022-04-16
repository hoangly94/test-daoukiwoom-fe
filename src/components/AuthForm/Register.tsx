import React from 'react'
import * as  S from './styled';
import { useForm } from "react-hook-form";
import FormMessage from '~components/common/FormMessage';
import { usePostRegisterMutation } from '~store/modules/index/api';
import ResponseMessage from '~components/common/ResponseMessage';

const AuthForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [requestRegister, { error: registerError},] = usePostRegisterMutation();
    const onSubmit = async data =>  await requestRegister(data);

    return <S.AuthFormWrapper>
        <div>
            <S.AuthFormTitle size='2xl'>Register</S.AuthFormTitle>
            <S.AuthFormInput
                {...register("name", { required: true, minLength: 3, maxLength: 255 })}
                placeholder='Name...'
                size='l'
            />
            <FormMessage error={errors.name} label='Name' />
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

            <ResponseMessage
                message={registerError?.['data']?.message}
            />
            <S.AuthFormSubmit label='Register' onClick={handleSubmit(onSubmit)} size='l' />
        </div>
    </S.AuthFormWrapper>
}
export default AuthForm