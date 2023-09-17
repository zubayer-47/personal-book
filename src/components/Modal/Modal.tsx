import { FC, ReactNode } from 'react';
import { FiX } from 'react-icons/fi';
import ModalBox from './ModalViews/ModalBox';

type Props = {
	title: string;
	children: ReactNode;
	onClose: () => void;
};

const Modal: FC<Props> = ({ title, children, onClose }) => {
	return (
		<ModalBox onClose={onClose}>
			<div className='flex flex-col gap-3'>
				<div className='flex justify-between items-stretch border-b border-primary-100/20'>
					<h2 className='px-3 py-2.5 text-2xl font-medium text-primary-200'>
						{title}
					</h2>

					<button
						type='button'
						onClick={onClose}
						className='px-3.5 hover:bg-red/20 transition-colors'
					>
						<FiX className='w-5 h-5 text-red/80' />
					</button>
				</div>
				<div className='px-3 pb-3 w-102'>{children}</div>
			</div>
		</ModalBox>
	);
};

export default Modal;
