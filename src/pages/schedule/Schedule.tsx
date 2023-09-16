import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import ContainerLayout from '../../components/Layouts/ContainerLayout';
import ScheduleItem from '../../components/widgets/ScheduleItem';
import SectionLabel from '../../components/widgets/SectionLabel';

const Schedule = () => {
	return (
		<ContainerLayout>
			<div className='flex items-stretch gap-3'>
				<Button title='New Schedule' />
				<Input
					name='search-sche'
					hint='Search schedules...'
					handler={() => undefined}
				/>
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
	);
};

export default Schedule;
