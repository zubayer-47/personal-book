import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import ContainerLayout from '../../components/Layouts/ContainerLayout';
import SectionLabel from '../../components/widgets/SectionLabel';
import TransectionItem from '../../components/widgets/TransectionItem';

const Expense = () => {
	return (
		<ContainerLayout>
			<div className='flex items-stretch gap-3'>
				<Button title='New Transection' />
				<Input
					name='search-tran'
					hint='Search transections...'
					handler={() => undefined}
				/>
			</div>

			<SectionLabel title='Recent Transection' />
			<div className='flex flex-col gap-2'>
				<TransectionItem
					title='Buy Coffie'
					timestamp='2 minutes ago'
					reason='expense'
					cost={360}
				/>
				<TransectionItem
					title='Buy Coffie'
					timestamp='2 minutes ago'
					reason='expense'
					cost={360}
				/>
				<TransectionItem
					title='Buy Coffie'
					timestamp='2 minutes ago'
					reason='expense'
					cost={360}
				/>
			</div>

			<SectionLabel title='Transection History' link='/expenses?list=all' />
			<div className='flex flex-col gap-2'>
				<TransectionItem
					title='Buy Coffie'
					timestamp='2 minutes ago'
					reason='expense'
					cost={360}
				/>
				<TransectionItem
					title='Buy Coffie'
					timestamp='2 minutes ago'
					reason='expense'
					cost={360}
				/>
				<TransectionItem
					title='Sellary'
					timestamp='45 minutes ago'
					reason='income'
					cost={25000}
				/>
			</div>
		</ContainerLayout>
	);
};

export default Expense;
