'use client';

import {
	FieldErrors,
	FieldValues,
	UseFormRegister
} from 'react-hook-form';

interface MessageInputProps {
	placeholder?: string;
	id: string;
	type?: string;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const MessageInput = ({
	placeholder,
	id,
	type,
	required,
	register,
	errors
}: MessageInputProps) => {
	return (
		<div className='relative w-full'>
			<input
				{...{ id, type, autoComplete: id, placeholder }}
				{...register(id, { required: required })}
				className='
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100
          w-full
          rounded-full
          focus: outline-none
        '
			/>
		</div>
	);
};

export default MessageInput;
