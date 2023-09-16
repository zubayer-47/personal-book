import Navbar from './Navbar';

const Header = () => {
	return (
		<div className='bg-primary-200 w-full h-52 flex flex-col mb-5'>
			<div className='flex-1 grid place-content-center'>
				<div className='text-right'>
					<h1 className='text-5xl text-white font-inter'>
						P<span className='text-primary-100'>ersonal</span> B
						<span className='text-primary-100'>ook</span>
					</h1>
					<p className='italic tracking-wide text-yellow'>Make life easier</p>
				</div>
			</div>
			<Navbar />
		</div>
	);
};

export default Header;
