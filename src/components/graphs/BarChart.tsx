import { useEffect, useRef } from 'react';

// type Props = {};

const weekDays = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const BarChart = () => {
	const parentRef = useRef<HTMLDivElement>(null);
	const dayRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!parentRef.current || !dayRef.current) return;

		const parentEl = parentRef.current;
		const dayEl = dayRef.current;

		// gets from backend (percentage)
		const percentage = 50;

		const parentHeight = parentEl.clientHeight;
		const dayHeight = (percentage * parentHeight) / 100;

		dayEl.classList.add('bar-height');
		dayEl.style.setProperty('--bar-height-var', `${dayHeight}px`);
		dayEl.style.setProperty('--bar-hover-content', `"${percentage}%"`);
	}, []);
	return (
		<div
			className='w-full h-full bg-transparent text-xs flex justify-center items-end gap-2 pr-2 relative'
			ref={parentRef}
		>
			<div className='border-l-2 flex flex-col gap-2'>
				<span>100%</span>
				<span>75%</span>
				<span>50%</span>
				<span>25%</span>
				<span>0%</span>
			</div>

			<div className='grid grid-cols-7 items-end mb-4 gap-5 w-full h-full'>
				{/* {weekDays.map((day) => ( */}
				<button ref={dayRef} className='w-full bg-red/50 font-inter h-0'>
					Sat
				</button>
				<button ref={dayRef} className='w-full bg-red/50 font-inter h-0'>
					Sun
				</button>
				<button ref={dayRef} className='w-full bg-red/50 font-inter h-0'>
					Mon
				</button>
				<button ref={dayRef} className='w-full bg-red/50 font-inter h-0'>
					Tue
				</button>
				<button ref={dayRef} className='w-full bg-red/50 font-inter h-0'>
					Wed
				</button>
				<button ref={dayRef} className='w-full bg-red/50 font-inter h-0'>
					Thu
				</button>
				<button ref={dayRef} className='w-full bg-red/50 font-inter h-0'>
					Fri
				</button>
				{/* ))} */}
			</div>
		</div>
	);
};

export default BarChart;
