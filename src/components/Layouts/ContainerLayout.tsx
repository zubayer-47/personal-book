import { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const ContainerLayout: FC<Props> = ({ children }) => {
	return <div className='max-w-3xl mx-auto px-2.5 sm:px-5'>{children}</div>;
};

export default ContainerLayout;
