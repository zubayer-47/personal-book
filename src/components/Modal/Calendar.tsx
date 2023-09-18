import React, { useCallback, useState } from 'react';
import { months } from '../../types/custom';

interface Props {
	initialDate?: Date;
	callback: (date: string[]) => void;
}

const Calendar: React.FC<Props> = ({ initialDate = new Date(), callback }) => {
	const [currentDate, setCurrentDate] = useState<Date>(initialDate);

	// new Date(2023, 2, 0); // it'll return feb 1, 2023

	const prevMonth = () => {
		const newDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() - 1,
			currentDate.getDate()
		);
		setCurrentDate(newDate);
	};
	const nextMonth = () => {
		const newDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() + 1,
			currentDate.getDate()
		);
		setCurrentDate(newDate);
	};

	const nextYear = () => {
		const newDate = new Date(
			currentDate.getFullYear() + 1,
			currentDate.getMonth(),
			currentDate.getDate()
		);
		setCurrentDate(newDate);
	};

	const prevYear = () => {
		const newDate = new Date(
			currentDate.getFullYear() - 1,
			currentDate.getMonth(),
			currentDate.getDate()
		);
		setCurrentDate(newDate);
	};

	const selectDay = useCallback(
		(date: number) => {
			const selectedDate = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				date
			);

			callback([
				months[selectedDate.getMonth()],
				date < 10 ? `0${date}` : `${date}`,
			]);

			currentDate.setDate(date);

			// console.log(day === currentDate.getDate());
		},
		[currentDate, callback]
	);

	const daysInMonth = useCallback(() => {
		const days = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() + 1,
			0
		).getDate();

		const daysArr = [];

		let count = 1;
		while (count <= days) {
			daysArr.push(count);
			count++;
		}

		return daysArr;
	}, [currentDate]);

	const formateDate = (date: Date) => {
		const month = months[date.getMonth()];
		const year = date.getFullYear();

		return `${month} ${year}`;
	};

	return (
		<div className='w-full bg-white rounded-lg p-6 max-w-sm absolute top-28 right-16 shadow-2xl z-10'>
			<div className='flex items-center justify-between mb-4'>
				<div>
					<button
						onClick={prevYear}
						className='px-2 py-1 text-primary-100 border border-transparent focus:border-primary-100 rounded-md'
					>
						{'<<'}
					</button>
					<button
						onClick={prevMonth}
						className='px-2 py-1 text-primary-100 border border-transparent focus:border-primary-100 rounded-md'
					>
						{'<'}
					</button>
				</div>
				<h2 className='text-2xl font-semibold'>{formateDate(currentDate)}</h2>
				<div>
					<button
						onClick={nextMonth}
						className='px-2 py-1 text-primary-100 border border-transparent focus:border-primary-100 rounded-md'
					>
						{'>'}
					</button>
					<button
						onClick={nextYear}
						className='px-2 py-1 text-primary-100 border border-transparent focus:border-primary-100 rounded-md'
					>
						{'>>'}
					</button>
				</div>
			</div>
			<div className='grid grid-cols-7 gap-2'>
				{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
					<div key={day} className='text-center text-gray-500'>
						{day}
					</div>
				))}

				{daysInMonth().map((date) => (
					<button
						key={date.toString()}
						onClick={() => selectDay(date)}
						className={`text-center border rounded-lg py-2 focus:text-primary-200 focus:bg-background ${
							date === currentDate.getDate()
								? 'border border-dashed border-primary-100 bg-background'
								: ''
						}`}
					>
						{date}
					</button>
				))}
			</div>
		</div>
	);
};

export default Calendar;
