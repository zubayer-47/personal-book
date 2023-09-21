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
		const percentage = 45;

		const parentHeight = parentEl.clientHeight;
		const dayHeight = (percentage * parentHeight) / 100;

		dayEl.classList.add('bar-height');
		dayEl.style.setProperty('--bar-height-var', `${dayHeight}px`);
		dayEl.style.setProperty('--bar-hover-content', `"${percentage}%"`);

		dayEl.style.color = '#fff';
	}, []);

	return (
		<div
			className='w-full h-full bg-transparent text-xs flex justify-center items-stretch gap-2 pr-2 relative'
			ref={parentRef}
		>
			<div className='border-l-2 flex flex-col gap-2'>
				<span>100%</span>
				<span>75%</span>
				<span>50%</span>
				<span>25%</span>
				<span>0%</span>
			</div>

			<div className='flex-1 grid grid-cols-7 justify-center items-end gap-5'>
				{/* {weekDays.map((day) => ( */}
				<button ref={dayRef} className='bg-primary-100 font-inter h-0 relative'>
					<span className='absolute bottom-0 -translate-x-1/2 -translate-y-1/2'>
						Sat
					</span>
				</button>
				<button className='bg-primary-100 font-inter h-0 relative'>
					<span className='absolute bottom-0 -translate-x-1/2 -translate-y-1/2'>
						Sun
					</span>
				</button>
				<button className='bg-primary-100 font-inter h-0 relative'>
					<span className='absolute bottom-0 -translate-x-1/2 -translate-y-1/2'>
						Mon
					</span>
				</button>
				<button className='bg-primary-100 font-inter h-0 relative'>
					<span className='absolute bottom-0 -translate-x-1/2 -translate-y-1/2'>
						Tue
					</span>
				</button>
				<button className='bg-primary-100 font-inter h-0 relative'>
					<span className='absolute bottom-0 -translate-x-1/2 -translate-y-1/2'>
						Wed
					</span>
				</button>
				<button className='bg-primary-100 font-inter h-0 relative'>
					<span className='absolute bottom-0 -translate-x-1/2 -translate-y-1/2'>
						Thu
					</span>
				</button>
				<button className='bg-primary-100 font-inter h-0 relative'>
					<span className='absolute bottom-0 -translate-x-1/2 -translate-y-1/2'>
						Fri
					</span>
				</button>
				{/* ))} */}
			</div>
		</div>
	);
};

export default BarChart;
