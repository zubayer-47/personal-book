import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import ContainerLayout from '../../components/Layouts/ContainerLayout';
import Modal from '../../components/Modal/Modal';
import ScheduleItem from '../../components/widgets/ScheduleItem';
import SectionLabel from '../../components/widgets/SectionLabel';

const Schedule = () => {
	const [modal, setModal] = useState(false);
	const handleScheduleModal = () => {
		setModal((prev) => !prev);
	};

	return (
		<>
			<ContainerLayout isPB>
				<div className='flex items-stretch gap-3'>
					<Button title='New Schedule' handler={handleScheduleModal} />
					<Input
						name='search-sche'
						hint='Search schedules...'
						handler={() => undefined}
					>
						<FiSearch className='w-5 h-5' />
					</Input>
				</div>

				<SectionLabel title='Todays' />
				<div className='flex flex-col gap-3'>
					<ScheduleItem
						title='Next Gen'
						timestamp='2h:03m:23s'
						note='Lorem ipsum dolor sit amet consectetur adipisicing elit'
					/>
					<ScheduleItem
						title='Next Gen'
						timestamp='2h:03m:23s'
						note='Lorem ipsum dolor sit amet consectetur adipisicing elit'
					/>
				</div>

				<SectionLabel title='Others' />
				<div className='flex flex-col gap-3'>
					<ScheduleItem
						title='Next Gen'
						timestamp='2h:03m:23s'
						note='Lorem ipsum dolor sit amet consectetur adipisicing elit'
					/>
					<ScheduleItem
						title='Next Gen'
						timestamp='2h:03m:23s'
						note='Lorem ipsum dolor sit amet consectetur adipisicing elit'
					/>
					<ScheduleItem
						title='Next Gen'
						timestamp='2h:03m:23s'
						note='Lorem ipsum dolor sit amet consectetur adipisicing elit'
					/>
				</div>
			</ContainerLayout>

			{modal && (
				<Modal onClose={handleScheduleModal} title='Add New Schedule'>
					<div className='flex flex-col gap-3'>
						<Input
							name='search-note'
							hint='Search notes...'
							handler={() => undefined}
						>
							<FiSearch className='w-5 h-5' />
						</Input>
					</div>
				</Modal>
			)}
		</>
	);
};

export default Schedule;
