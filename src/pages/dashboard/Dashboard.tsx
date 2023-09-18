import ContainerLayout from '../../components/Layouts/ContainerLayout';
import ScheduleItem from '../../components/widgets/ScheduleItem';
import SectionLabel from '../../components/widgets/SectionLabel';
import TransactionItem from '../../components/widgets/TransactionItem';

const Dashboard = () => {
	return (
		<ContainerLayout isPB>
			<div className='flex flex-col gap-5'>
				<div className='flex items-stretch gap-5 font-inter'>
					<div className='flex-1 bg-white rounded-md'></div>
					<div className='flex flex-col items-center bg-yellow text-primary-200 px-3 py-1.5 rounded-md'>
						<div className='flex-1 px-3 py-1 text-6xl font-medium'>16</div>
						<span className='uppercase tracking-wide'>september</span>
					</div>
				</div>
				<div className='flex items-stretch gap-5'>
					<div className='flex flex-col gap-1 tracking-wide px-3 py-1.5 rounded-md bg-white w-36'>
						<div className='flex items-center justify-between'>
							<span className='text-primary-200 font-inter'>Expense</span>
							<span className='font-light text-red text-xs'>23%</span>
						</div>
						<div className='font-bold text-2xl text-primary-100'>2973TK</div>
						<div className='text-sm text-slate-400'>This Month</div>
					</div>
					<div className='flex-1 bg-white rounded-md'></div>
				</div>
			</div>

			<SectionLabel title='Schedule' link='/schedules' linkTitle='See More' />
			<div className='flex flex-col gap-3'>
				<ScheduleItem title='Next Gen' timestamp='2h:03m:23s' />
				<ScheduleItem title='Next Gen' timestamp='2h:03m:23s' />
			</div>

			<SectionLabel title='Transection' link='/expenses' linkTitle='See More' />
			<div className='flex flex-col gap-2'>
				<TransactionItem
					title='Buy Coffie'
					timestamp='2 minutes ago'
					reason='expense'
					cost={360}
				/>
				<TransactionItem
					title='Buy Coffie'
					timestamp='2 minutes ago'
					reason='expense'
					cost={360}
				/>
				<TransactionItem
					title='Sellary'
					timestamp='45 minutes ago'
					reason='income'
					cost={25000}
				/>
			</div>
		</ContainerLayout>
	);
};

export default Dashboard;
