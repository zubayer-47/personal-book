import { FiPlus } from 'react-icons/fi';
import { InputHandler } from '../../types/custom';

type ThumbType = {
	preview: string;
	handler: InputHandler;
	isLoading?: boolean;
	error?: string;
};

export const MaterialThumbnail = ({
	preview,
	handler,
	isLoading,
	error,
}: ThumbType) => {
	return (
		<div className='flex-col gap-2'>
			<p className='uppercase ml-1 mb-1 font-bold tracking-wide text-xs text-slate-500'>
				Thumbnail
			</p>
			<label
				htmlFor='thumbnail'
				className='w-36 h-24 relative grid place-content-center border border-dashed border-indigo-300 rounded-lg cursor-pointer overflow-hidden'
			>
				<FiPlus className='w-6 h-6 stroke-1 text-indigo-600' />
				<input
					type='file'
					name='thumbnail'
					id='thumbnail'
					onChange={handler}
					className='hidden'
					accept='image/*'
					disabled={isLoading}
				/>
				{preview && (
					<img
						src={preview}
						alt='thumbnail image'
						className='absolute inset-0 w-full h-full object-cover'
					/>
				)}
			</label>
			{!error ? null : (
				<p className='ml-2 text-sm text-red-400 tracking-wide'>{error}</p>
			)}
		</div>
	);
};
