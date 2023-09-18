import { useState } from 'react';
import {
	FiBookmark,
	FiDollarSign,
	FiFileText,
	FiPlus,
	FiX,
} from 'react-icons/fi';
import { v4 as uuid } from 'uuid';
import { InputHandler, InputType } from '../../types/custom';
import Button, { TabBtn } from '../Buttons/Button';
import TabButton from '../Buttons/TabButton';
import Input from '../Inputs/Input';

// type Props = {};

const tabs = ['single', 'multiple'];

interface ReceiptType {
	id: string;
	receipt: string;
	amount: number;
}

interface ExpenseType {
	receipts: ReceiptType[];
	note: string;
}

const ExpenseModal = () => {
	const [activeTab, setActiveTab] = useState(tabs[0]);
	const [expenses, setExpenses] = useState<ExpenseType>({
		receipts: [{ id: uuid(), receipt: '', amount: 0 }],
		note: '',
	});

	const handleTabs = (tab: string) => {
		setActiveTab(tab);

		setExpenses({
			note: '',
			receipts: [{ id: uuid(), receipt: '', amount: 0 }],
		});
	};

	const addExpense = () => {
		setExpenses((prev) => ({
			...prev,
			receipts: [...prev.receipts, { id: uuid(), receipt: '', amount: 0 }],
		}));
	};

	const removeReceipt = (id: string) => {
		setExpenses((prev) => ({
			...prev,
			receipts: prev.receipts.filter((receipt) => receipt.id !== id),
		}));
	};

	const handleExpenseChange = (e: InputType, id: string) => {
		const receipts = [...expenses.receipts];
		const index = receipts.findIndex((re) => re.id === id);

		if (e.target.name === 'receipt-title')
			receipts[index].receipt = e.target.value;
		else receipts[index].amount = +e.target.value;

		setExpenses((prev) => ({
			...prev,
			receipts: receipts,
		}));
	};

	const handleNoteChange: InputHandler = (e) => {
		setExpenses((prev) => ({
			...prev,
			note: e.target.value,
		}));
	};

	const handleCreate = () => {
		// make api call here
		console.log({ expenses });
	};

	return (
		<div className='flex flex-col gap-3'>
			<div className='flex justify-between items-center pb-2'>
				<TabButton tabs={tabs} handler={handleTabs} active={activeTab} />

				{activeTab === 'multiple' && (
					<TabBtn title='Add' handler={addExpense}>
						<FiPlus className='w-5 h-5 -ml-1' />
					</TabBtn>
				)}
			</div>
			{activeTab === 'single' ? (
				<>
					<Input
						name='receipt-title'
						hint='Receipt Title...'
						handler={(e) => handleExpenseChange(e, expenses.receipts[0].id)}
						value={expenses.receipts[0].receipt}
						inputCss='border border-primary-100/20 focus:border-primary-200 rounded-md'
					>
						<FiBookmark className='w-5 h-5 text-primary-200' />
					</Input>
					<Input
						name='amount'
						hint='0.00'
						type='number'
						handler={(e) => handleExpenseChange(e, expenses.receipts[0].id)}
						value={expenses.receipts[0].amount}
						inputCss='border border-primary-100/20 focus:border-primary-200 rounded-md'
					>
						<FiDollarSign className='w-5 h-5 text-primary-200' />
					</Input>
					<Input
						name='notes'
						hint='Notes...'
						handler={handleNoteChange}
						value={expenses.note}
						inputCss='border border-primary-100/20 focus:border-primary-200 rounded-md'
					>
						<FiFileText className='w-5 h-5 text-primary-200' />
					</Input>
				</>
			) : (
				<>
					{expenses.receipts?.map((receipt) => (
						<div className='flex items-stretch gap-3' key={receipt.id}>
							<Input
								name='receipt-title'
								hint='Receipt Title...'
								handler={(e) => handleExpenseChange(e, receipt.id)}
								value={receipt.receipt}
								inputCss='border border-primary-100/20 focus:border-primary-200 rounded-md'
							>
								<FiBookmark className='w-5 h-5 text-primary-200' />
							</Input>
							<Input
								name='amount'
								hint='0.00'
								type='number'
								value={receipt.amount}
								handler={(e) => handleExpenseChange(e, receipt.id)}
								inputCss='border border-primary-100/20 focus:border-primary-200 rounded-md'
							>
								<FiDollarSign className='w-5 h-5 text-primary-200' />
							</Input>
							<button
								type='button'
								onClick={() => removeReceipt(receipt.id)}
								className='px-2.5 bg-red/10 rounded-md'
							>
								<FiX className='w-5 h-5 text-red/80' />
							</button>
						</div>
					))}

					<div className='w-full border-b border-primary-100/20 h-4'></div>
					<Input
						name='notes'
						hint='Notes...'
						handler={handleNoteChange}
						value={expenses.note}
						inputCss='border border-primary-100/20 focus:border-primary-200 rounded-md'
					>
						<FiFileText className='w-5 h-5 text-primary-200' />
					</Input>
				</>
			)}

			<div className='flex justify-end items-center gap-5 py-3'>
				{!!expenses.receipts.filter((receipt) => !!receipt.amount).length && (
					<p className='text-primary-200 font-medium tracking-wide text-xl'>
						{expenses.receipts.reduce((acc, curr) => acc + curr.amount, 0)}
						tk
					</p>
				)}
				<Button title='Create Expense' handler={handleCreate} />
			</div>
		</div>
	);
};

export default ExpenseModal;
