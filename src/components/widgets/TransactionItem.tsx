import { FiEdit, FiMoreVertical, FiTrash } from 'react-icons/fi';
import { ButtonClickHandler } from '../../types/custom';

type Props = {
	title: string;
	timestamp: string;
	reason: 'expense' | 'income';
	cost: number;
	openWidget?: boolean;
	handleWidgetModal?: ButtonClickHandler;
	onClose?: () => void;
	// deleteExpense: ButtonClickHandler;
};

const TransactionItem = ({
	title,
	timestamp,
	reason,
	cost,
	openWidget,
	handleWidgetModal,
	onClose,
}: // deleteExpense,
Props) => {
	return (
		<div className='flex items-center justify-between rounded bg-white px-3 py-1.5 tracking-wide'>
			<div>
				<p className='font-bold text-lg text-slate-700'>{title}</p>
				<p className='font-normal text-xs text-slate-400'>{timestamp}</p>
			</div>
			<div className='flex items-center gap-2 relative'>
				<div
					className={`font-medium ${
						reason === 'expense' ? 'text-red' : 'text-green'
					}`}
				>
					{cost}Tk
				</div>
				<button type='button' onClick={handleWidgetModal} onBlur={onClose}>
					<FiMoreVertical className='w-5 h-5 text-slate-400' />
				</button>

				{openWidget && (
					<div className='absolute right-6 -top-3 bg-background shadow-md z-10 flex gap-1 items-center'>
						<button
							type='button'
							className='flex items-center gap-2 px-3 py-1.5 w-full text-left hover:bg-slate-300/70'
						>
							<FiEdit className='w-5 h-5 text-primary-200' />
							Edit
						</button>
						<div className='h-6 border-r border-primary-200/30 inline-block'></div>
						<button
							type='button'
							// onClick={deleteExpense}
							className='flex items-center gap-2 px-3 py-1.5 w-full text-left hover:bg-slate-300/70'
						>
							<FiTrash className='w-5 h-5 text-red' />
							Delete
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default TransactionItem;
