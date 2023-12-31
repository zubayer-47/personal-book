import { ReactNode, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { InputHandler } from '../../types/custom';

type InputProp = {
	name: string;
	handler: InputHandler;
	type?: string;
	title?: string;
	hint?: string;
	value?: string | number | null;
	isLoading?: boolean;
	isRequired?: boolean;
	error?: string | null;
	notMatched?: boolean;
	wrapperCss?: string;
	inputCss?: string;
	children?: ReactNode;
};

const Input = ({
	name,
	handler,
	type = 'text',
	title = '',
	hint = '',
	value,
	isLoading = false,
	isRequired = false,
	error = '',
	inputCss,
	children,
}: InputProp) => {
	return (
		<div className='flex-1'>
			{title && (
				<label
					htmlFor={name}
					className={`capitalize font-semibold text-sm  text-slate-600 ${
						!isRequired ? '' : "after:content-['*'] after:text-red-500"
					}`}
				>
					{title}
				</label>
			)}

			<div className={`relative`}>
				{!children ? null : (
					<label
						htmlFor={name}
						className='absolute inset-y-0 left-0 flex items-center p-2.5'
					>
						{children}
					</label>
				)}
				<input
					type={type}
					name={name}
					id={name}
					className={`bg-white flex-1 w-full pr-2 py-3 outline-none tracking-wider pl-10 ${
						inputCss || 'rounded-full'
					}`}
					placeholder={hint}
					value={value || ''}
					onChange={handler}
					autoComplete='off'
					disabled={isLoading}
					required={isRequired}
				/>
			</div>

			{!error ? null : (
				<p className='ml-2 text-sm text-red-400 tracking-wide'>{error}</p>
			)}
		</div>
	);
};

export default Input;

export const PasswordInput = ({
	name,
	handler,
	title,
	hint,
	value,
	isLoading = false,
	isRequired,
	error = '',
	notMatched,
}: InputProp) => {
	const [show, setShow] = useState(false);

	const onVisible = () => setShow((prev) => !prev);

	return (
		<div className='bg-transparent'>
			{title && (
				<label
					htmlFor={name}
					className={`capitalize font-semibold text-sm  text-slate-600 ${
						!isRequired ? '' : "after:content-['*'] after:text-red-500"
					}`}
				>
					{title}
				</label>
			)}
			<div
				className={`flex items-stretch border rounded-lg ${
					!notMatched ? 'border-indigo-200' : 'border-red-500'
				}`}
			>
				<input
					type={show ? 'text' : 'password'}
					name={name}
					className={`flex-1 p-3 bg-transparent outline-none tracking-wider`}
					placeholder={hint}
					value={value || ''}
					onChange={handler}
					disabled={isLoading}
					required={isRequired}
				/>
				{!value ? null : (
					<button type='button' className='p-2' onClick={onVisible}>
						{show ? (
							<FiEyeOff className='w-5 h-5 stroke-1 text-indigo-300' />
						) : (
							<FiEye className='w-5 h-5 stroke-1 text-indigo-300' />
						)}
					</button>
				)}
			</div>
			{!error ? null : (
				<p className='ml-2 text-sm text-red-400 tracking-wide'>{error}</p>
			)}
		</div>
	);
};
