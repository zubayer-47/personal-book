import { FC, useEffect, useRef } from 'react';

const BarChart = () => {
	const parentRef = useRef<HTMLDivElement>(null);

	return (
		<div
			className='w-full flex justify-around items-end h-full gap-2 relative'
			ref={parentRef}
		>
			<Bar day='Sat' parentRef={parentRef} percentage={20} />
			<Bar day='Sun' parentRef={parentRef} percentage={50} />
			<Bar day='Mon' parentRef={parentRef} percentage={70} />
			<Bar day='Tue' parentRef={parentRef} percentage={90} />
			<Bar day='Wed' parentRef={parentRef} percentage={30} />
			<Bar day='Thu' parentRef={parentRef} percentage={100} />
			<Bar day='Fri' parentRef={parentRef} percentage={10} />
		</div>
	);
};

type BarProps = {
	day: string;
	percentage: number;
	parentRef: React.RefObject<HTMLDivElement>;
};

const Bar: FC<BarProps> = ({ day, parentRef, percentage }) => {
	const dayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!parentRef.current || !dayRef.current) return;

		const parentEl = parentRef.current;
		const dayEl = dayRef.current;

		// gets from backend (percentage)
		// const percentage = 100;

		const parentHeight = parentEl.clientHeight - 30;
		const dayHeight = (percentage * parentHeight) / 100;

		console.log({ parentHeight, dayHeight });

		dayEl.classList.add('bar-height');
		dayEl.style.setProperty('--bar-height-var', `${dayHeight / 16}rem`);

		dayEl.style.color = '#fff';
	}, [parentRef, percentage]);

	return (
		<div className='h-full flex flex-col justify-end items-center'>
			<div className='w-4 bg-white' ref={dayRef}></div>
			<span className='text-white text-sm'>{day}</span>
		</div>
	);
};

export default BarChart;
