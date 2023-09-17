import { TabBtn } from './Button';

type Props = {
	tabs: string[];
	active: string;
	handler: (tab: string) => void;
};

const TabButton = ({ tabs, active, handler }: Props) => {
	return (
		<div className='flex items-stretch gap-3'>
			{tabs.map((tab) => (
				<TabBtn
					key={tab}
					title={tab}
					handler={() => handler(tab)}
					active={active === tab}
				/>
			))}
		</div>
	);
};

export default TabButton;
