import { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
	isPB?: boolean;
};

const ContainerLayout: FC<Props> = ({ children, isPB }) => {
	return (
		<div
			className={`max-w-3xl mx-auto px-2.5 sm:px-5 ${!isPB ? 'pb-0' : 'pb-5'}`}
		>
			{children}
		</div>
	);
};

export default ContainerLayout;
