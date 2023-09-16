import { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const ContainerLayout: FC<Props> = ({ children }) => {
	return <div className='container mx-auto px-2.5 sm:px-0'>{children}</div>;
};

export default ContainerLayout;
