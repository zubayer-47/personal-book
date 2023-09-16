export function debounce(
	func: (...args: unknown[]) => void,
	delay: number
): (...args: unknown[]) => void {
	let timeoutId: number;

	return (...args: unknown[]): void => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			func(...args);
		}, delay * 1);
	};
}

export const trunc = (text: string, len?: number) => {
	return len
		? text.length > len
			? text.split('').slice(0, len).join('') + '...'
			: text
		: text.split('').slice(0, len).join('');
};
