'use client';

import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import AuthSocialButton from './AuthSocialButton';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
	const [variant, setVariant] = useState<Variant>('LOGIN');
	const [isLoading, setIsLoading] = useState(false);

	const toggleVariant = useCallback(() => {
		variant === 'LOGIN'
			? setVariant('REGISTER')
			: setVariant('LOGIN');
	}, [variant]);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: ''
		}
	});

	const onSubmit: SubmitHandler<FieldValues> = data => {
		setIsLoading(true);

		if (variant === 'REGISTER') {
			// Axios Register
		}
		if (variant === 'LOGIN') {
			// NextAuth SignIn
		}
	};

	const socialAction = (action: string) => {
		setIsLoading(true);

		// NextAuth Social SignIn
	};

	return (
		<div
			className='
      mt-8
      sm:mx-auto
      sm:w-full
      sm:max-w-md
  '
		>
			<div
				className='
      bg-white
      px-4
      py-8
      shadow
      sm:rounded-lg
      sm:px-10
      '
			>
				<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
					{variant === 'REGISTER' && (
						<Input
							{...{
								id: 'name',
								label: 'name',
								type: 'text',
								register,
								errors,
								disabled: isLoading
							}}
              />
					)}
					<Input
						{...{
              id: 'email',
							type: 'email',
							label: 'Email address',
							register,
							errors,
              disabled: isLoading
						}}
            />
					<Input
						{...{
              id: 'password',
							label: 'Password',
							type: 'password',
							register,
							errors, 
              disabled: isLoading
						}}
					/>
					<div>
						<Button
							{...{
								disabled: isLoading,
								type: 'submit'
							}}
							fullWidth
						>
							{variant === 'LOGIN' ? 'Sign in' : 'Register'}
						</Button>
					</div>
				</form>

				<div className='mt-6'>
					<div className='relative'>
						<div
							className='
              absolute
              inset-0
              flex
              items-center
              '
						>
							<div className='w-full border-t border-gray-300' />
						</div>
						<div
							className='
              relatative
              flex
              justify-center
              text-center
              '
						>
							<span
								className='
              bg-white
               px-2
               text-gray-500
              '
							>
								Or continue with
							</span>
						</div>
					</div>

					<div className='flex mt-6  gap-2'>
						<AuthSocialButton
							{...{
								icon: BsGithub,
								onClick: () => socialAction('github')
							}}
						/>
						<AuthSocialButton
							{...{
								icon: BsGoogle,
								onClick: () => socialAction('google')
							}}
						/>
					</div>

					<div
						className='
            flex
            gap-2
            justify-center
            text-sm
            mt-6
            px-2
            text-gray-500
          '
					>
						<div>
							{variant === 'LOGIN'
								? 'New to Messenger'
								: 'Already have an account?'}
						</div>
						<div
							onClick={toggleVariant}
							className='underline cursor-pointer'
						>
							{variant === 'LOGIN' ? 'Create an account' : 'Login'}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
