import { ReactNode } from 'react';
import { FiRefreshCw } from 'react-icons/fi';

interface BtnProp {
	title: string;
	handler?: () => void;
	isDisabled?: boolean;
	isLoading?: boolean;
}

const Button = ({ title, handler, isDisabled, isLoading }: BtnProp) => {
	return (
		<button
			type='button'
			className={`px-4 p-2 rounded-full outline-none tracking-wide font-medium bg-yellow hover:bg-yellow/70 transition-colors text-primary-200 inline-block ${
				(isLoading || isDisabled) && 'opacity-60'
			}`}
			onClick={handler}
			disabled={isLoading || isDisabled}
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

interface TabBtnProps extends BtnProp {
	active?: boolean;
	children?: ReactNode;
}

export const TabBtn = ({
	title,
	handler,
	isDisabled,
	isLoading,
	active,
	children,
}: TabBtnProps) => {
	return (
		<button
			type='button'
			className={`px-4 py-1.5 rounded-full outline-none tracking-wide font-medium transition-colors ${
				!active ? 'bg-white text-primary-200' : 'bg-primary-200 text-white'
			} ${(isLoading || isDisabled) && 'opacity-60'}`}
			onClick={handler}
			disabled={isLoading || isDisabled}
		>
			<span className='flex items-center gap-1'>
				{children}
				<span className='capitalize '>{title}</span>
				{!isLoading ? null : (
					<FiRefreshCw className='ml-2 w-5 h-5 stroke-2 text-white animate-spin' />
				)}
			</span>
		</button>
	);
};

export default Button;
