import { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const ContainerLayout: FC<Props> = ({ children }) => {
	return <div className='container mx-auto'>{children}</div>;
};

export default ContainerLayout;
