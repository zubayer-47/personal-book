type Props = {
	count: number;
};

const NotifyBadge = ({ count }: Props) => {
	return (
		<span className='text-xs text-primary-200 bg-yellow h-6 w-6 rounded-full flex justify-center items-center absolute -top-2.5 -right-1.5'>
			{count}
		</span>
	);
};

export default NotifyBadge;
