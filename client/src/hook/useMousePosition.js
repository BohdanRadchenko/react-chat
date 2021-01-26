import {useEffect} from 'react';

const useMousePosition = (callback) => {
	const type = 'mousemove';
	useEffect(() => {
		const mouseMove = e => {
			callback({x: e.clientX, y: e.clientY});
		};
		document.addEventListener(type, mouseMove);
		return () => {
			document.removeEventListener(type, mouseMove);
		};
	}, [callback]);
};

export default useMousePosition;