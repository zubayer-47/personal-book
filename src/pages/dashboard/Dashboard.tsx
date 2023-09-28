import { useState } from 'react';
import ContainerLayout from '../../components/Layouts/ContainerLayout';
import Calendar from '../../components/Modal/Calendar';
import BarChart from '../../components/graphs/BarChart';
import ScheduleItem from '../../components/widgets/ScheduleItem';
import SectionLabel from '../../components/widgets/SectionLabel';
import TransactionItem from '../../components/widgets/TransactionItem';
import { months } from '../../types/custom';
import { expenseArr } from '../expense/Expense';

const date = new Date();

const Dashboard = () => {
	const [calenderVisibility, setCalendarVisibility] = useState(false);
	const [selectedDate, setSelectedDate] = useState<string[]>([
		months[date.getMonth()],
		date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`,
	]);
	const [expenseId, setExpenseId] = useState('');

	const handleWidgetModal = (id: string) => {
		if (id === expenseId) return setExpenseId('');

		setExpenseId(id);
	};

	const toggleCalenderVisibility = () => {
		setCalendarVisibility((prev) => !prev);
	};

	const selectDate = (date: string[]) => setSelectedDate(date);

	return (
		<ContainerLayout isPB>
			<div className='flex flex-col gap-5'>
				<div className='flex items-stretch gap-3 smd:gap-5 font-inter relative'>
					<div className='flex-1 bg-white rounded-md'></div>
					<button
						type='button'
						onClick={toggleCalenderVisibility}
						// onBlur={toggleCalenderVisibility}
						className='flex flex-col items-center bg-yellow text-primary-200 px-3 py-1.5 rounded-md '
					>
						<div className='flex-1 px-3 py-1 text-6xl font-medium'>
							{selectedDate[1]}
						</div>
						<span className='uppercase tracking-wide'>{selectedDate[0]}</span>
					</button>
					{calenderVisibility && <Calendar callback={selectDate} />}
				</div>
				<div className='flex items-stretch gap-3 smd:gap-5'>
					<div className='flex flex-col gap-1 tracking-wide px-3 py-1.5 rounded-md bg-white w-36'>
						<div className='flex items-center justify-between'>
							<span className='text-primary-200 font-inter'>Expense</span>
							<span className='font-light text-red text-xs'>23%</span>
						</div>
						<div className='font-bold text-2xl text-primary-100'>2973TK</div>
						<div className='text-sm text-slate-400'>This Month</div>
					</div>
					<div className='flex-1 overflow-hidden bg-primary-200 px-5 rounded-md'>
						<BarChart />
					</div>
				</div>
			</div>

			<SectionLabel title='Schedule' link='/schedules' linkTitle='See More' />
			<div className='flex flex-col gap-3'>
				<ScheduleItem title='Next Gen' timestamp='2h:03m:23s' />
				<ScheduleItem title='Next Gen' timestamp='2h:03m:23s' />
			</div>

			<SectionLabel title='Transaction' link='/expenses' linkTitle='See More' />
			<div className='flex flex-col gap-2'>
				{/* <TransactionItem
					title='Buy Coffie'
					timestamp='2 minutes ago'
					reason='expense'
					cost={360}
				/> */}
				{expenseArr.slice(0, 4).map((expense) => (
					<TransactionItem
						key={expense.id}
						title={expense.title}
						timestamp={expense.timestamp}
						reason={expense.reason}
						cost={expense.cost}
						openWidget={expenseId === expense.id}
						onClose={() => handleWidgetModal(expense.id)}
						handleWidgetModal={() => handleWidgetModal(expense.id)}
						// deleteExpense={() => deleteExpense(expense.id)}
					/>
				))}
			</div>
		</ContainerLayout>
	);
};

export default Dashboard;
