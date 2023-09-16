import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import ContainerLayout from '../../components/Layouts/ContainerLayout';

const Notes = () => {
	return (
		<ContainerLayout>
			<div className='flex items-stretch gap-3'>
				<Button title='New Note' />
				<Input
					name='search-note'
					hint='Search notes...'
					handler={() => undefined}
				/>
			</div>
		</ContainerLayout>
	);
};

export default Notes;
