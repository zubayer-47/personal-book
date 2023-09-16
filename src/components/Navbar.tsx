import { NavLink } from 'react-router-dom';
import ContainerLayout from './Layouts/ContainerLayout';
import NotifyBadge from './NotifyBadge';

const Navbar = () => {
	return (
		<ContainerLayout>
			<div className='mb-3 flex items-center justify-center font-inter'>
				<div className='w-9 h-9 rounded-full bg-primary-100 mr-3' />
				<ul className='flex items-center gap-3 text-slate-600'>
					<li>
						<NavLink
							to='/'
							className='bg-white px-3.5 py-1.5 rounded-3xl inline-block'
						>
							Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/notes'
							className='bg-white px-3.5 py-1.5 rounded-3xl inline-block'
						>
							Notes
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/schedules'
							className='bg-white px-3.5 py-1.5 rounded-3xl inline-block relative'
						>
							<NotifyBadge count={12} />
							Schedules
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/expenses'
							className='bg-white px-3.5 py-1.5 rounded-3xl inline-block'
						>
							Expenses
						</NavLink>
					</li>
				</ul>
			</div>
		</ContainerLayout>
	);
};

export default Navbar;
