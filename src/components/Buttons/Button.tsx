import { ButtonHTMLAttributes } from 'react';
import { FiRefreshCw } from 'react-icons/fi';

type BtnProp = ButtonHTMLAttributes<HTMLButtonElement> & {
	title: string;
	handler?: () => void;
	isDisabled?: boolean;
	isLoading?: boolean;
};

const Button = ({
	title,
	handler,
	isDisabled,
	isLoading,
	...props
}: BtnProp) => {
	return (
		<button
			type='button'
			className={`px-4 p-2 rounded-full outline-none tracking-wide font-medium bg-yellow text-primary-200 ${
				(isLoading || isDisabled) && 'opacity-60'
			}`}
			onClick={handler}
			disabled={isLoading || isDisabled}
			{...props}
		>
			<span className='flex items-center'>
				<span>{title}</span>
				{!isLoading ? null : (
					<FiRefreshCw className='ml-2 w-5 h-5 stroke-2 text-white animate-spin' />
				)}
			</span>
		</button>
	);
};

export default Button;
