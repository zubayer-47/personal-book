import { FiMoreVertical } from 'react-icons/fi';

type Props = {
	title: string;
	timestamp: string;
	reason: 'expense' | 'income';
	cost: number;
};

const TransectionItem = ({ title, timestamp, reason, cost }: Props) => {
	return (
		<div className='flex items-center justify-between rounded bg-white px-3 py-1.5 tracking-wide'>
			<div>
				<p className='font-bold text-lg text-slate-700'>{title}</p>
				<p className='font-normal text-xs text-slate-400'>{timestamp}</p>
			</div>
			<div className='flex items-center gap-2'>
				<div
					className={`font-medium ${
						reason === 'expense' ? 'text-red' : 'text-green'
					}`}
				>
					{cost}Tk
				</div>
				<FiMoreVertical className='w-5 h-5 text-slate-400' />
			</div>
		</div>
	);
};

export default TransectionItem;
