import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import ContainerLayout from '../../components/Layouts/ContainerLayout';
import ExpenseModal from '../../components/Modal/ExpenseModal';
import Modal from '../../components/Modal/Modal';
import SectionLabel from '../../components/widgets/SectionLabel';
import TransactionItem from '../../components/widgets/TransactionItem';
import useModal from '../../hooks/useModal';

type ExpenseDemoType = {
	id: string;
	title: string;
	timestamp: string;
	reason: 'expense' | 'income';
	cost: number;
};

const expenseArr: ExpenseDemoType[] = [
	{
		id: uuid(),
		title: 'Buy Coffee',
		timestamp: '2 minutes ago',
		reason: 'expense',
		cost: 360,
	},
	{
		id: uuid(),
		title: 'Buy Coffee',
		timestamp: '2 minutes ago',
		reason: 'expense',
		cost: 360,
	},
	{
		id: uuid(),
		title: 'Buy Coffee',
		timestamp: '2 minutes ago',
		reason: 'expense',
		cost: 360,
	},
];

const Expense = () => {
	const { modal, handleModal } = useModal();
	const [expenseId, setExpenseId] = useState('');

	const handleWidgetModal = (id: string) => {
		if (id === expenseId) return setExpenseId('');

		setExpenseId(id);
	};
	return (
		<>
			<ContainerLayout isPB>
				<div className='flex items-stretch gap-3'>
					<Button title='New Transaction' handler={handleModal} />
					<Input
						name='search-tran'
						hint='Search transactions...'
						handler={() => undefined}
					>
						<FiSearch className='w-5 h-5' />
					</Input>
				</div>

				<SectionLabel title='Recent Transaction' />
				<div className='flex flex-col gap-2'>
					{expenseArr.map((expense) => (
						<TransactionItem
							key={expense.id}
							title={expense.title}
							timestamp={expense.timestamp}
							reason={expense.reason}
							cost={expense.cost}
							openWidget={expenseId === expense.id}
							onClose={() => handleWidgetModal(expense.id)}
							handleWidgetModal={() => handleWidgetModal(expense.id)}
							// deleteExpense={() => deleteExpense(expense.id)}
						/>
					))}
					{/* <TransactionItem
						title='Buy Coffie'
						timestamp='2 minutes ago'
						reason='expense'
						cost={360}
					/>
					<TransactionItem
						title='Buy Coffie'
						timestamp='2 minutes ago'
						reason='expense'
						cost={360}
					/> */}
				</div>

				<SectionLabel title='Transaction History' link='/expenses?list=all' />
				<div className='flex flex-col gap-2'>
					{expenseArr.map((expense) => (
						<TransactionItem
							key={expense.id}
							title={expense.title}
							timestamp={expense.timestamp}
							reason={expense.reason}
							cost={expense.cost}
							openWidget={expenseId === expense.id}
							onClose={() => handleWidgetModal(expense.id)}
							handleWidgetModal={() => handleWidgetModal(expense.id)}
						/>
					))}
					{/* <TransactionItem
						title='Buy Coffie'
						timestamp='2 minutes ago'
						reason='expense'
						cost={360}
					/>
					<TransactionItem
						title='Buy Coffie'
						timestamp='2 minutes ago'
						reason='expense'
						cost={360}
					/>
					<TransactionItem
						title='Sellary'
						timestamp='45 minutes ago'
						reason='income'
						cost={25000}
					/> */}
				</div>
			</ContainerLayout>

			{modal && (
				<Modal onClose={handleModal} title='Add New Expense'>
					<ExpenseModal />
				</Modal>
			)}
		</>
	);
};

export default Expense;
