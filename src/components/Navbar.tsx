import { Link } from 'react-router-dom';
import ContainerLayout from './Layouts/ContainerLayout';

const Navbar = () => {
	return (
		<ContainerLayout>
			<div className='-mt-12 flex justify-center items-center font-inter'>
				<h1 className='w-7 h-7 rounded-full bg-primary-200 mr-3'></h1>

				<ul className='flex items-center gap-3'>
					<li>
						<Link
							to='/profiles?sc=dashboard'
							className='bg-white px-3.5 py-1.5 rounded-3xl inline-block active'
						>
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							to='/profiles?sc=notes'
							className='bg-white px-3.5 py-1.5 rounded-3xl inline-block'
						>
							Notes
						</Link>
					</li>
					<li>
						<Link
							to='/profiles?sc=schedules'
							className='bg-white px-3.5 py-1.5 rounded-3xl inline-block relative'
						>
							Schedules
							<span className='text-xs text-primary-100 bg-yellow h-6 w-6 rounded-full flex justify-center items-center absolute -top-2.5 -right-2'>
								7
							</span>
						</Link>
					</li>
					<li>
						<Link
							to='/profiles?sc=expense'
							className='bg-white px-3.5 py-1.5 rounded-3xl inline-block'
						>
							Expense
						</Link>
					</li>
				</ul>
			</div>
		</ContainerLayout>
	);
};

export default Navbar;
