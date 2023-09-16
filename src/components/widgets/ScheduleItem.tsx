type Props = {
	title: string;
	timestamp: string;
	note?: string;
};

const ScheduleItem = ({ title, timestamp, note }: Props) => {
	return (
		<div className='rounded bg-white px-3 py-1.5 tracking-wide'>
			<div className='flex items-center justify-between'>
				<p className='font-bold text-lg text-slate-700'>{title}</p>
				<div className='px-3 py-1 rounded-full text-center text-primary-200 bg-yellow text-sm font-semibold'>
					{timestamp}
				</div>
			</div>
			{note && <div className='mt-1 text-slate-400'>{note}</div>}
		</div>
	);
};

export default ScheduleItem;
