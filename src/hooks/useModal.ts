import { useState } from 'react';

const useModal = () => {
	const [modal, setModal] = useState(false);
	const handleModal = () => {
		setModal((prev) => !prev);
	};

	return { modal, handleModal };
};

export default useModal;
