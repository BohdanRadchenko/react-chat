import {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';

export const useOnloadPage = (callbackLoad = null) => {

	const handleReady = useCallback(event => {
		if (event.target.readyState === 'complete') {
			callbackLoad && callbackLoad();
		}
	}, [callbackLoad]);

	useEffect(() => {
		document.addEventListener('readystatechange', handleReady);
		return () => {
			document.removeEventListener('readystatechange', handleReady);
		};
	}, [callbackLoad, handleReady]);
};

useOnloadPage.PropTypes = {
	callbackIn: PropTypes.func,
	callbackOut: PropTypes.func,
};