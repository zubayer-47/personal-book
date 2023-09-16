import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type Props = {
	title: string;
	link?: string;
	linkTitle?: string;
};

const SectionLabel = ({ title, link, linkTitle }: Props) => {
	return (
		<div className='flex items-center justify-between my-4 tracking-wide'>
			<p className='text-slate-400 font-light'>{title}</p>
			{link && (
				<Link
					to={link}
					className='font-semibold hover:underline text-primary-200 flex items-center text-sm'
				>
					<span>{!linkTitle ? 'See All' : linkTitle}</span>
					<FiChevronRight className='w-5 h-5' />
				</Link>
			)}
		</div>
	);
};

export default SectionLabel;
